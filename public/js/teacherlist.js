define(['jquery','template','bootstrap','cookie'],function($,template){
        $.ajax({
            type : 'get',
            url : '/api/teacher',
            dataType : 'json',
            success : function(data){
                    var html = template('templinfoID', {list : data.result});
                    $('#templinfo').html(html);
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
                                console.log(data);
                                var html = template('teacherModalID',data.result);
                                 console.log(html);
                                $('#teacherModalInfo').html(html);
                                // 弹出模态框
                                $('#teacherModal').modal();
                           }

                        });
                    });
            }
        });
});