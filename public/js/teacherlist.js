define(['jquery','template','util','bootstrap','cookie'],function($,template,util){

    util.setM(location.pathname);
    // 左侧侧边栏
            //  var pathname = location.pathname;
            // $('.aside .navs a').removeClass('active');
            // $('.aside .navs a[href="'+pathname+'"]').addClass('active');
        // 加载列表
        $.ajax({
            type : 'get',
            url : '/api/teacher',
            dataType : 'json',
            success : function(data){
                    var html = template('templinfoID', {list : data.result});
                    $('#templinfo').html(html);
                //    调用查看讲师
                   previewTeachter();
                // 注销和启动
                   startlogoutTeachter();

            }
        });



        // 查看讲师功能
        function previewTeachter(){
             // 点击查看显示模态框
                    $('#templinfo').find('.a1Info').click(function(e){
                         window.event?window.event.returnValue = false:e.preventDefault();
                        var tdId = $(this).closest('td').attr('data-id');
                        $.ajax({
                            type : 'get',
                            url : '/api/teacher/view',
                             data : {tc_id : tdId},
                            dataType : 'json',
                           success : function(data){
                               data.result.tc_hometown = data.result.tc_hometown.split('|').join('  ');
                                var html = template('teacherModalID',data.result);
                                $('#teacherModalInfo').html(html);
                                // 弹出模态框
                                $('#teacherModal').modal();
                           }

                        });
                    });
        }
        //启动和注销功能
        function startlogoutTeachter(){
             $('#templinfo').find('.a3slTeachter').click(function(e){
                 window.event?window.event.returnValue = false:e.preventDefault();
                 var that = this;
                 var td =$(this).closest('td');
                 var tdId = td.attr('data-id'); 
                 var tdStatus = td.attr('data-status');
                 $.ajax({
                    type : 'post',
                    url : '/api/teacher/handle',
                    data : {tc_id : tdId ,tc_status : tdStatus},
                    dataType : 'json',
                    success : function(data){
                        if(data.code == 200){
                            //点击的时候获取后台传过来的值
                             td.attr('data-status', data.result.tc_status);
                             if(data.result.tc_status == 0){
                                 $(that).text('注销');
                             }else{
                                  $(that).text('启动');
                             }
                        }
                    }
                 });
             });
        }
});