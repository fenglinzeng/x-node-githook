
module.exports = app => {
    const controller = app.controller;
    app.get('/', controller.githook.admin);
    app.post('/hook', controller.githook.hook);
    app.post('/add', controller.githook.add);
    app.post('/update', controller.githook.update);
    app.post('/remove', controller.githook.remove);
    app.get('/list', controller.githook.list);
    app.get('/item/:id', controller.githook.item);
};