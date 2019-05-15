jQuery(function ($) {
    var $container = $('.portfolio .posts');
    $container.isotope({
        filter: '*',
    });

    $('.portfolio .toggles a').click(function(){
        $('.portfolio .toggles a.active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
        });
        return false;
    });



//анімація
    new WOW().init();
//слайдер
    $('.your-class').slick({
        autoplay:  true,
        autoplaySpeed: 2000,
        // speed: 1000,
        slidesToShow: 6,
        infinite: true,
        arrows: true /*стрілки керування*/
    });


        $('.liftSlider').bxSlider({
            auto: true,
            autoControls: true,
            stopAutoOnClick: true,
            pager: true
        });

});


