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
    $('.your-class').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        // speed: 1000,
        slidesToShow: 6,
        infinite: true,
        arrows: true /*стрілки керування*/
    });

});
