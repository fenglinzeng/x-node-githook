// had enabled by egg
exports.static = true;

// config/plugin.js
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks',
};
exports.mysql = {
    enable: true,
    package: 'egg-mysql',
};
// 允许跨域插件
// 搭配config.security.domainWhiteList配置使用
exports.cors = {
    enable: true,
    package: 'egg-cors',
};