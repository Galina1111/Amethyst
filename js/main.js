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
        }, {
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
        }, {
            breakpoint: 570,
            settings: {
                slidesToShow: 2,
                arrows: false,
                mobileFirst: true,
                width: 20
            }
        }, {
            breakpoint: 410,
            settings: {
                slidesToShow: 1,
                arrows: false,
                mobileFirst: true,
                width: 20
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

    function animate_testimonial() {
        var time = 2, cc = 1;
        $(window).scroll(function () {
            $('#counter').each(function () {
                var
                    cPos = $(this).offset().top,
                    topWindow = $(window).scrollTop();
                if (cPos < topWindow + 500) {
                    if (cc < 2) {
                        $('div').each(function () {
                            var
                                i = 1,
                                num = $(this).data('num'),
                                step = 1000 * time / num,
                                that = $(this),
                                int = setInterval(function () {
                                    if (i <= num) {
                                        that.html(i);
                                    }
                                    else {
                                        cc = cc + 2;
                                        clearInterval(int);
                                    }
                                    i++;
                                }, step);
                        });
                    }
                }
            });
        });
    }

    animate_testimonial();

    function animate_skills() {


    }

    $(window).scroll(function () {
        var position = $('.skills').offset().top - $('.skills').height(),
            scrollPosition = $(window).scrollTop(),
            start = false;
        if (!start && scrollPosition > position) {
            start = true;
            $('.skills .progress-bar span').each(function () {
                $(this).parent().animate({
                    width: $(this).data('count') + '%'
                }, {
                    step: function (now, fx) {
                        fx.elem.firstElementChild.innerHTML = Math.round(now) + '%';
                    },
                    duration: 3000,
                    queue: false,
                });
            });
        }
    });
    $(document).on('click', '.skills', function () {

    });


    $(".button a").click(function (event) {
        $(".button a").removeClass("active");
        $(this).addClass("active");
    });


    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }

        });
    }
    ;

    $('.icon').click(function () {
        $('.icon').toggleClass('active');
        $('.nav').toggleClass('active');
    });


});
