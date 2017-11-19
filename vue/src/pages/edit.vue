<template>

    <section class="view-content">
        <el-row>
            <el-card>
                <div slot="header" class="clearfix">
                    <span>{{pageTitle}}</span>
                    <el-button style="float: right;" type="primary" @click="submit">提交</el-button>
                </div>
                <div class="list-con">
                    <el-form ref="formItem" :model="formItem" label-width="100px">
                        <div class="form-item">
                            <el-form-item label="代号">
                                <el-input v-model="alias" placeholder="数据库名称" style="width: 240px"></el-input>
                            </el-form-item>
                        </div>
                        <div class="form-item">
                            <el-form-item label="路径">
                                <el-input v-model="path" placeholder="数据库名称" style="width: 240px"></el-input>
                            </el-form-item>
                        </div>
                    </el-form>
                </div>
            </el-card>
        </el-row>
    </section>
</template>
<script>

import API from '@/apis/index';
export default {
    data() {
        return {
            pageTitle: '列表',
            path: '',
            alias: ''
        };
    },
    methods: {
        /**
         * 提交
         */
        submit() {
            const alias = this.alias;
            const path = this.path;
            const id = this.id;
            if (!alias) {
                this.$alert('代号不能为空');
            }
            if (!path) {
                this.$alert('路径不能为空');
            }
            const param = {
                alias,
                path,
                id
            };
            API.update(param).then(res => {
                this.$alert(res.msg).then(() => {
                    if (res.code) {
                        this.$router.push({ name: 'index' });
                    }
                });
            });
        },
        getData() {
            const param = {
                id: this.id
            };
            API.getItem(param).then(res => {
                if (!res.code) {
                    return this.$alert(res.msg);
                }
                this.alias = res.data.alias;
                this.path = res.data.path;
            });
        },
        init() {
            this.getData();
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.init();
    }
};
</script>
