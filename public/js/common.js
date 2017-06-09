define(['jquery', 'cookie'], function($) {
    // 登录进来上面的蓝色条框显示
    $('.navs ul').prev('a').on('click', function() {
        $(this).next().slideToggle();
    });

    $('#loginOut').click(function() {
        $.ajax({
            type: 'post',
            url: '/api/logout',
            dataType: 'json',
            success: function(data) {
                //    退出的时候清除cookie
                $.removeCookie('loginCookie', { path: '/' });
                    
                location.href = '/login';
            }
        });
    });
    // 获取请求路径
    var pathname = location.pathname;
    if (pathname != '/login' && !$.cookie('PHPSESSID')) {
        location.href = '/login';
    }
    // 获取用户传过来的cookie
    var objCookie = $.cookie('loginCookie') && JSON.parse($.cookie('loginCookie'));

    if (objCookie) {
        var str =
            $('.aside .profile').find('h4').html(objCookie.tc_name);
        $('.aside .profile').find('img').attr('src', objCookie.tc_avatar);


    }

});