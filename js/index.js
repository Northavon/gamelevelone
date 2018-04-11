
$(document).ready(function(){

    $('.main-slider').slick({
        infinite:true,
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.portfolio-slider').slick({
        infinite:false,
        slidesToShow:4,
        dots:false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $("#services").click(function() {
        $('html, body').animate({
        scrollTop: ($('#service-container').offset().top -100)
    },500);
    });

    $("#about").click(function() {
        $('html, body').animate({
        scrollTop: ($('#about-container').offset().top -80)
    },500);
    });

    $("#contact").click(function() {
        $('html, body').animate({
        scrollTop: ($('#contact-container').offset().top -80)
    },500);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $("#toTop").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

});
