import fetch from '@/utils/fetch';

export default {
    /**
     * 获取列表
     */
    getData() {
        return fetch({
            url: '/list',
            method: 'get'
        });
    },
    /**
     * 添加
     */
    add(data) {
        return fetch({
            url: '/add',
            data: data,
            method: 'post'
        });
    },
    /**
     * 更新
     */
    update(data) {
        return fetch({
            url: '/update',
            data: data,
            method: 'post'
        });
    },
    /**
     * 单项
     */
    getItem(data) {
        return fetch({
            url: '/item/' + data.id,
            method: 'get'
        });
    },
    /**
     * 移除
     */
    remove(data) {
        return fetch({
            url: '/remove/',
            data: data,
            method: 'post'
        });
    },
    /**
     * 移除
     */
    hook(data) {
        return fetch({
            url: '/hook/',
            data: data,
            method: 'post'
        });
    }
};