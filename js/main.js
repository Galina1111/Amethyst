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


    // $('.liftSlider').bxSlider({
    //     auto: true,
    //     autoControls: true,
    //     stopAutoOnClick: true,
    //     pager: true
    // });
    //
    // $('#bar1').barfiller({
    //     barColor: "#990000",
    //     // animateOnResize: false,
    //     symbol: ""
    // });
    //
    // $('#bar2').barfiller({
    //     // barColor: linear-gradient(to right, #8f66b9, #8f66b9),
    //     // barColor: linear-gradient(to bottom right, #8f66b9, #8f66b9),
    //     // background: linear-gradient(49.25turn, #8f66b9, 70%, #ca7f2f),
    //     // barColor: "#990000",
    //     animateOnResize: true,
    //     symbol: ""
    // });
    // $('#bar3').barfiller({
    //     barColor: "#990000",
    //     animateOnResize: true,
    //     symbol: ""
    // });
    // $('#bar4').barfiller({
    //     barColor: "#990000",
    //     animateOnResize: true,
    //     symbol: ""
    // });



    // var tempScrollTop = $(window).scrollTop();
    var elem = document.getElementById("bar");
    var elem2 = document.getElementById("bar-2");
    var elem3 = document.getElementById("bar-3");
    var elem4 = document.getElementById("bar-4");
    var width = 2;
    var id = setInterval(animat1, 100);
    var id2 = setInterval(animat2, 100);
    var id3 = setInterval(animat3, 100);
    var id4 = setInterval(animat4, 100);

    // $('.progress-bar').each(function() {
    //     var bar_value = $(this).attr('aria-valuenow') + '%';
    //     $(this).animate({ width: bar_value }, { duration: 2000, easing: 'easeOutCirc' });
    // });




    function animat1() {
        if (width >= 80) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("value").innerHTML = width;
        }
    }

    function animat2() {
        if (width >= 97) {
            clearInterval(id2);
        } else {
            width++;
            elem2.style.width = width + '%';
            document.getElementById("value-2").innerHTML = width;
        }
    }

    function animat3() {
        if (width >= 65) {
            clearInterval(id3);
        } else {
            width++;
            elem3.style.width = width + '%';
            document.getElementById("value-3").innerHTML = width;
        }
    }

    function animat4() {
        if (width >= 72) {
            clearInterval(id4);
        } else {
            width++;
            elem4.style.width = width + '%';
            document.getElementById("value-4").innerHTML = width;
        }
    }

    // animat();
    // animat2();
    // animat3();
    // animat4();

   // $( '#bar' ).scrollTop(300)
   //
    $(window).scroll(animat1);
     $(window).scroll(animat2);
     $(window).scroll(animat3);
     $(window).scroll(animat4);


});
