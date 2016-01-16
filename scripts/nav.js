jQuery(document).ready(function($) {

    $('.mobile-nav .nav-list').hide();

    function isVisible() {
        var sections = [('#ngpvan'),('#uocd'),('#gcsp'),('#research'),('#edu'),('#insper'),('#softdes'),('#eh'),('#dream'),('#edisco')];

        $('.vertical-nav li').removeClass('active');

        for (i = 0; i < sections.length; i++) {
            var top = $(window).scrollTop();
            var bottom = top + $(window).height();
            var objTop = $(sections[i]).offset().top;
            var objBottom = objTop + $(sections[i]).height();

            var test = i+1;

            if(objTop < bottom && objBottom > top) {
                ($(".vertical-nav li:nth-child("+test+")")).addClass('active');
            }
        }
    }

    isVisible()

    $(window).bind('scroll',function(e){
      isVisible()
    });
    

    $('.vertical-nav li').click(function(){
      
        var id = $(this).find('a').attr("href"),
          posi,
          ele,
          padding = 0;
      
        ele = $(id);
        posi = ($(ele).offset()||0).top - padding;

        $('.vertical-nav li').removeClass('active');

        $(this).addClass('active');
      
        $('html, body').animate({scrollTop:posi}, 'slow');
      
        return false;
    });


    $('.mobile-nav .close-nav').click(function() {

        $('.mobile-nav .nav-list').hide();

    });

    $('.mobile-nav .mobile-nav-link').click(function() {

        $('.mobile-nav .nav-list').hide();

    });

    $('.mobile-nav .hamburger-menu').click(function() {

        $('.mobile-nav .nav-list').show();

    });

});