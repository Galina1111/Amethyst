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






    var elem1 = document.getElementById("bar-eighty");
    var elem2 = document.getElementById("bar-ninety-seven");
    var elem3 = document.getElementById("bar-sixty-five");
    var elem4 = document.getElementById("bar-seventy-two");
    var width = 2;
    var id = setInterval(animat1, 100);
    var id2 = setInterval(animat2, 100);
    var id3 = setInterval(animat3, 100);
    var id4 = setInterval(animat4, 100);
    function animat1() {
        if (width >= 80) {
            clearInterval(id);
        } else {
            width++;
            elem1.style.width = width +'%';
            document.getElementById("span-value-eighty").innerHTML = width;
        }
    }
    function animat2() {
        if (width >= 97) {
            clearInterval(id2);
        } else {
            width++;
            elem2.style.width = width + '%';
            document.getElementById("span-value-ninety-seven").innerHTML = width;
        }
    }
    function animat3() {
        if (width >= 65) {
            clearInterval(id3);
        } else {
            width++;
            elem3.style.width = width + '%';
            document.getElementById("span-value-sixty-five").innerHTML = width;
        }
    }
    function animat4() {
        if (width >= 72) {
            clearInterval(id4);
        } else {
            width++;
            elem4.style.width = width + '%';
            document.getElementById("span-value-seventy-two").innerHTML = width;
        }
    }
    $(window).scroll(animat1);
    $(window).scroll(animat2);
    $(window).scroll(animat3);
    $(window).scroll(animat4);



});
