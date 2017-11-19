const Controller = require('egg').Controller;

class GitHookController extends Controller {
    async hook(ctx) {
        const body = ctx.request.body;

        const result = await ctx.service.githook.hook(body);

        return ctx.body = result;
    }
    async list(ctx) {
        const result = await ctx.service.githook.list();
        ctx.body = result;
    }
    async admin(ctx) {
        let data;
        try {
            data = JSON.parse(fs.readFileSync('/wwwroot/configs/githook.json'));
        } catch (error) {
            data = {
                copyright: '小岛粪',
                cdn: '/public',
                path: '/',
                favicon: 'https://brofen.cn/public/images/icon.png'
            };
        }
        return await ctx.render('githook.tpl', data);
    }

    // 添加
    async add(ctx) {
        const body = ctx.request.body;

        const result = await ctx.service.githook.add(body);

        ctx.body = result;
    }

    // 查看某个
    async item(ctx) {
        const id = ctx.params.id;
        const service = ctx.service;

        const result = await service.githook.item(id);

        ctx.body = result;
    }

    // 检查采集状态
    async update(ctx) {
        const body = ctx.request.body;

        const result = await ctx.service.githook.update(body);

        ctx.body = result;
    }

    // 检查采集状态
    async remove(ctx) {
        const body = ctx.request.body;

        const result = await ctx.service.githook.remove(body);

        ctx.body = result;
    }
}

module.exports = GitHookController;
