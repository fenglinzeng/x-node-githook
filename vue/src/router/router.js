import Main from '@/App.vue';


// 首页
const index = {
    path: '/',
    name: 'index',
    title: '首页',
    component: resolve => { require.ensure([], () => resolve(require('@/pages/index.vue')), 'index'); }
};

const add = {
    path: '/new',
    title: '添加',
    name: 'new',
    component: resolve => { require.ensure([], () => resolve(require('@/pages/new.vue')), 'new'); }
};

const edit = {
    path: '/edit/:id',
    title: '添加',
    name: 'edit',
    component: resolve => { require.ensure([], () => resolve(require('@/pages/edit.vue')), 'new'); }
};

export const routers = [
    index,
    add,
    edit
];
