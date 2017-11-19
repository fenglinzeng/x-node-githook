module.exports = {
    apps: [
        {
            name: 'githook',
            script: 'server.js',
            cwd: './',
            watch: false,
            env: {
                COMMON_VARIABLE: 'true'
            },
            env_production: {
                NODE_ENV: 'production'
            },
            out_file: './logs/githook_out.log',
            error_file: './logs/githook_error.log'
        }
    ]
};
