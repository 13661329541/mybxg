define(['jquery'],function($){
    return {

        setM : function(pathname){
            //  var pathname = location.pathname;
            $('.aside .navs a').removeClass('active');
            $('.aside .navs a[href="'+pathname+'"]').addClass('active');
        }
    }
        
});