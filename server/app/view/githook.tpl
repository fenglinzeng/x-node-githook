<!DOCTYPE html>
<html>

<head>
    <meta charset=utf-8>
    <meta name=viewport content="width=device-width,initial-scale=1">
    <title>Githook</title>
    <link rel="shortcut icon" href={{favicon}}>
    <link rel=stylesheet href=https://cdn.bootcss.com/element-ui/2.2.1/theme-chalk/index.css>
    <link href={{cdn}}/githook/static/css/app.css rel=stylesheet>
</head>

<body>
    <div id=app></div>
    <script>
        var vars = window.vars || {};
        vars.APIBASE = '{{path}}';
        vars.copyright = '{{copyright}}';
    </script>
    <script src=https://cdn.bootcss.com/vue/2.5.16/vue.runtime.min.js></script>
    <script src=https://cdn.bootcss.com/vue-router/2.8.1/vue-router.min.js></script>
    <script src=https://cdn.bootcss.com/axios/0.18.0/axios.min.js></script>
    <script src=https://cdn.bootcss.com/element-ui/2.2.2/index.js></script>
    <script src={{cdn}}/githook/static/js/manifest.js></script>
    <script src={{cdn}}/githook/static/js/vendor.js></script>
    <script src={{cdn}}/githook/static/js/app.js></script>
</body>

</html>
