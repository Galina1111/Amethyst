jQuery(function ($) {

    var $container = $('.works .posts');
    $container.isotope({
        filter: '*',
    });

    $('.works .toggles a').click(function () {
        $('.works .toggles a.active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
        });
        return false;
    });

    //слайдер
    $('.testimonials-logos-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        // speed: 1000,
        slidesToShow: 6,
        infinite: true,
        arrows: true /*стрілки керування*/
    });

    $('.js-services-slider').slick({
        //autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        infinite: true,
        arrows: false, /*стрілки керування*/
        dots: true,
    });

    $('.js-display-services a').click(function () {
        $('.js-services-slider').slick('slickGoTo', $(this).index());
        $(this).parent().find('a.active').removeClass('active');
        $(this).addClass('active');
        return false;
    });


});
