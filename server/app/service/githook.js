const execSync = require('child_process').execSync;

module.exports = app => class GitHookService extends app.Service {
    // 项目列表
    async list() {
        const mysql = await app.mysql;

        let result;
        try {
            result = await mysql.select('githook', {
                where: {is_show: 1}
            })
        } catch (error) {
            return {
                code: 0,
                msg: error,
            };
        }
        return {
            code: 1,
            msg: 'ok',
            data: result
        };
    }
    // 添加项目
    async add(data) {
        const mysql = await app.mysql.beginTransaction();

        const alias = data.alias;
        const path = data.path;

        if (!alias || !path) {
            return {
                code: 0,
                msg: '缺少参数',
            };
        }
        const updateTime = app.mysql.literals.now;

        try {
            await mysql.insert('githook', {
                alias,
                path,
                create_time: updateTime,
                is_show: 1
            })
            await mysql.commit();
        } catch (error) {
            await mysql.rollback();
            return {
                code: 0,
                msg: error,
            };
        }
        return {
            code: 1,
            msg: 'ok',
            data: {}
        };
    }
    // 修改项目
    async update(data) {
        const mysql = await app.mysql.beginTransaction();

        const id = data.id;
        const alias = data.alias;
        const path = data.path;
        if (!id || !alias || !path) {
            return {
                code: 0,
                msg: '缺少参数',
            };
        }

        try {
            await mysql.update('githook', {
                id,
                alias,
                path,
                update_time: app.mysql.literals.now
            });
            await mysql.commit();
        } catch (error) {
            await mysql.rollback();
            return {
                code: 0,
                msg: error,
            };
        }
        return {
            code: 1,
            msg: 'ok',
            data: {}
        };
    }
    // 获取某个项目详情
    async item(id) {
        const result = await app.mysql.get('githook', {id});
        return {
            code: 1,
            msg: 'ok',
            data: result
        }
    }
    // 删除某个项目
    async remove(data) {
        const id = data.id;
        if (!id || isNaN(id)) {
            return {
                code: 0,
                msg: '缺少数据',
            }
        }
        try {
            await app.mysql.update('githook', {
                id,
                is_show: 0,
                update_time: app.mysql.literals.now
            });
        } catch (error) {
            return {
                code: 0,
                msg: error,
            }
        }
        return {
            code: 1,
            msg: 'ok',
        }
    }
    // 上线
    async hook(data) {
        const sql = await app.mysql.select('githook', data);

        if (!sql) {
            return {
                code: 0,
                msg: '数据过期，请刷新后重试',
            };
        }

        const path = data.path;

        const cmd = `cd ${path} && sudo git reset --hard && sudo git pull && sudo pm2 reload pm2.config.js`;
        let result;
        try {
            result = await execSync(cmd);
        } catch (error) {
            return {
                code: 0,
                msg: error.stderr.toString()
            };
        }
        return {
            code: 1,
            msg: 'ok',
            data: result.toString()
        };
    }
}
