<template>

    <section class="view-content">
        <el-row>
            <el-card>
                <div slot="header" class="clearfix">
                    <span>{{pageTitle}}</span>
                    <el-button style="float: right;" type="primary" @click="jump({name: 'new'})">添加</el-button>
                </div>
                <div class="list-con">
                    <el-row>
                        <el-table :data="data" border v-loading="isLoading">
                            <el-table-column v-for="(column,key) in columns" :prop="column.key" :label="column.title" :key="key"></el-table-column>
                            <el-table-column label="操作" width="160px">
                                <template slot-scope="scope">
                                    <el-button
                                    type="text"
                                    @click="hook(scope.row)">上线</el-button>
                                    <el-button
                                    type="text"
                                    @click="jump({ name: 'edit', params: { id: scope.row.id } })">编辑</el-button>
                                    <el-button
                                    type="text"
                                    @click="remove({id: scope.row.id})">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-row>
                </div>
            </el-card>
        </el-row>
    </section>
</template>
<script>

import API from '@/apis/index';
import Util from '@/utils/util';
export default {
    data() {
        return {
            pageTitle: '列表',
            data: [],
            columns: [
                {
                    key: 'alias',
                    title: '别名'
                },
                {
                    key: 'path',
                    title: '路径'
                },
                {
                    key: 'update_time',
                    title: '更新时间'
                },
                {
                    key: 'create_time',
                    title: '创建时间'
                }
            ]
        };
    },
    methods: {
        /**
         * 路由跳转
         * @param {Object} route 路由信息
         */
        jump(route) {
            this.$router.push(route);
        },
        hook(data) {
            console.log(data);
            this.$confirm('确定上线？').then(() => {
                this.loading = this.$loading();
                API.hook(data).then(res => {
                    this.loading.close();
                    this.$alert(res.msg).then(() => {
                        this.init();
                    });
                });
            }).catch();
        },
        remove(data) {
            this.$confirm('确定删除？').then(() => {
                API.remove(data).then(res => {
                    this.$alert(res.msg).then(() => {
                        this.init();
                    });
                });
            }).catch();
        },
        /**
         * 路由跳转
         * @param {Object} route 路由信息
         */
        getData() {
            API.getData().then(res => {
                if (!res.code) {
                    return this.$alert(res.msg, '接口错误');
                }
                this.data = res.data.map(item => {
                    item.update_time = Util.parseTime(new Date(item.update_time));
                    item.create_time = Util.parseTime(new Date(item.create_time));
                    return item;
                });
            });
        },
        init() {
            this.getData();
        }
    },
    created() {
        this.init();
    }
};
</script>
