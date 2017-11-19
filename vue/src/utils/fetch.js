import axios from 'axios';

const service = axios.create({
    baseURL: window.vars.APIBASE
});

// respone拦截器
service.interceptors.response.use(
    response => response.data,
    error => {
        console.error(`接口错误：${error}`);
        return Promise.reject(error);
    }
);
export default service;