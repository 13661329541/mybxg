define(['jquery','template','cookie'],function($,template){
        $.ajax({
            type : 'get',
            url : '/api/teacher',
            dataType : 'json',
            success : function(data){
                    console.log(data);
                    var html = template('templinfoID', {list : data.result});
                    $('#templinfo').html(html);
                    // 点击查看显示模态框
                    // $('#teacherModalInfo').find('a1Info').
            }
        });
});