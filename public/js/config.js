//  模块化开发 定制
requirejs.config({
    //定制路径
    baseUrl: '/public/assets',
    // 给每个路径取个名字 利于依赖每个js文件 js可以省略
    paths: {
        jquery: 'jquery/jquery',
        bootstrap: 'bootstrap/js/bootstrap',
        nprogress: 'nprogress/nprogress',
        echarts: 'echarts/echarts.min.js',
        cookie: 'jquery-cookie/jquery.cookie',
        template: 'artTemplate/template-web',
        common: '../js/common',
        login: '../js/login',
        index : '../js/index',
        util : '../js/util',
        teacherlist: '../js/teacherlist'
    },
    //bootstrap 不属于模块需要定制成 模块 只能定制一个 兼容非标准的模块
    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    }
});