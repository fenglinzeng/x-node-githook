module.exports = app => {
    const {
        controller
    } = app;

    // gitHook
    require('./routers/githook')(app);
};