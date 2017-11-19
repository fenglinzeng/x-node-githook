import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// element的默认样式偏大，全局设置为mini
import ElementUI from 'element-ui';
Vue.use(ElementUI);
Vue.prototype.$ELEMENT = {
    size: 'mini'
};


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
