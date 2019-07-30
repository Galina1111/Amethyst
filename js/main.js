jQuery(function ($) {

    var $container = $('.works .posts');
    $container.isotope({
        filter: '*',
        sortBy: 'symbol'
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
    //анімація
    new WOW().init();

    //слайдер
    $('.testimonials-logos-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        // speed: 1000,
        slidesToShow: 6,
        infinite: true,
        arrows: true, /*стрілки керування*/

        responsive: [{
            breakpoint: 1289,
            settings: {
                slidesToShow: 5,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 1250,
            settings: {
                slidesToShow: 5,
                arrows: false
            }
        },{
            breakpoint: 950,
            settings: {
                slidesToShow: 4,
                arrows: false,
                mobileFirst: true,
                //
                // variableWidth: true,
            }
        }, {
            breakpoint: 730,
            settings: {
                slidesToShow: 3,
                arrows: false,
                mobileFirst: true,

            }
        },{
            breakpoint: 570,
            settings: {
                slidesToShow: 2,
                arrows: false,
                mobileFirst: true,
                width:20
            }
        },{
            breakpoint: 410,
            settings: {
                slidesToShow: 1,
                arrows: false,
                mobileFirst: true,
                width:20
            }
        }
        ]
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


    $(".button a").click(function(event) {
        $(".button a").removeClass("active");
        $(this).addClass("active");
    });





    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }

        });
    };


    // $(".nav-item a").click(function(event) {
    //     $(".nav-item a").removeClass("active");
    //     $(this).addClass("active");
    // });

    $('.icon').click(function () {
        if ($(window).width() <= 700) {
            $('.icon').toggleClass('active');
            $('.nav').toggle();
        } else if($(window).width() > 700) {
            $('#nav-menu').css('display', 'flex');
            $('#nav-menu').show();

        }
    });




});
