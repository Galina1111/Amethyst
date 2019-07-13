jQuery(function ($) {

    var $container = $('.Works .posts');
    $container.isotope({
        filter: '*',
    });

    $('.Works .toggles a').click(function () {
        $('.Works .toggles a.active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
        });
        return false;
    });

    //слайдер
    $('.your-class').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        // speed: 1000,
        slidesToShow: 6,
        infinite: true,
        arrows: true /*стрілки керування*/
    });

});
