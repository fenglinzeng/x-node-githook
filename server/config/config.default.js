const fs = require('fs');
const path = require('path');
module.exports = appInfo => {
    const config = exports = {};

    // 端口号
    config.cluster = {
        listen: {
            port: 7002
        }
    };

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1511050143789_9830';

    // 添加模板渲染引擎
    config.view = {
        defaultViewEngine: 'nunjucks',
        defaultExtension: '.tpl',
        mapping: {
            '.tpl': 'nunjucks'
        }
    };

    // csrf攻击防范
    config.security = {
        csrf: {
            enable: false
        },
        // 跨域白名单，配合egg-cors使用
        domainWhiteList: ['http://127.0.0.1:19999']
    };

    exports.static = {
        maxAge: 31536000
    };


    let dbConfig;
    try {
        dbConfig = JSON.parse(fs.readFileSync('/wwwroot/configs/db/public.json'));
    } catch (err) {
        dbConfig = {
            host: 'your ip',
            port: 'your port',
            user: 'your user',
            password: 'your password',
            database: 'your database'
        };
    }


    config.mysql = {
        // 单数据库信息配置
        client: {
            // host
            host: dbConfig.host,
            // 端口号
            port: dbConfig.port,
            // 用户名
            user: dbConfig.user,
            // 密码
            password: dbConfig.password,
            // 数据库名
            database: dbConfig.database
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false
    };
    return config;
};