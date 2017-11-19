const egg = require('egg');

const workers = Number(process.argv[2] || require('os').cpus().length);

// 配置环境变量
process.env.EGG_SERVER_ENV = 'prod';

egg.startCluster({
    workers,
    baseDir: __dirname
});
