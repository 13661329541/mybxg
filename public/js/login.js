
define(['jquery','cookie'], function ($) {
    $('#loginID').click(function (e) {
        window.event ? window.event.returnValue = false : e.preventDefault();
        var formID = $('#formID').serialize();
        $.ajax({
            type: 'post',
            url: '/api/login',
            dataType: 'json',
            data: formID,
            success: function (data) {
                if (data.code == 200) {
                //    获取登录信息转换成字符串
                    var str = JSON.stringify(data.result);
                      // 登录的时候要同时把用户名带进去  获得cookie 存在cookie里面
                    $.cookie('loginCookie' , str, {path : '/'});
                    location.href = '/index/index';
                }
            }
        });

    });
});


