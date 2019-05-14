jQuery(function ($) {
  $('.toggles button').click(function () {
    var get_id = this.id;
    var get_current = $('.posts .' + get_id);

    $('.post').not(get_current).hide(500);
    get_current.show(500);
  });

    $('#all').click(function () {
    $('.post').show(500);
  //     $(this).addClass('active').css({
  //       'backgroundColor': "#bbbec2",
  //       "padding-top": "40px",
  //       "border":"1px solid #f9f9f9",
  //
  // });



  });





    $('.toggles button').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    // var urban = document.getElementsByClassName('urban');
    // var design = document.getElementsByClassName('design');
    // var posters = document.getElementsByClassName('posters');
    // var active = document.getElementsByClassName('active');
    //
    // if(urban !== active || design !== active || posters !== active){
    //    $('.urban').css({
    //        'backgroundColor': '#bbbec2'
    //    });
    //     $('.urban p').css({
    //         'fontSize': '14px',
    //         'color': 'transparent'
    //         // 'font-family': 'Lato-Regular'
    //     });
    //     $('.urban h6').css({
    //         'fontSize': '0px'
    //     });
    // }
    // $(urban).hover(function(){
    //     $(this).css("background-color", "#9466c2");
    //     // $(this  'p').css("color", "rgba(249, 249, 249, 255)",
    //     // );
    // }, function(){
    //     $(this).css("background-color", "#bbbec2");
    // });



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
// progress-bar

});


