import Vue from 'vue';
import VueRouter from 'vue-router';
import { routers } from './router';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    routes: routers
};

const router = new VueRouter(RouterConfig);

/**
 * 路由前置守卫
 */
router.beforeEach((to, from, next) => {
    next();
});

export default router;
