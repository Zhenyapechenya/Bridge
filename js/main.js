$(function(){
    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0px',
        // cssEase: 'ease',
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        // variableWidth:'true',
        // responsive: [
        //     {
        //         breakpoint: 841,
        //         settings: {
        //             slidesToShow: 2
        //         }
        //     },
        //     {
        //         breakpoint: 601,
        //         settings: {
        //             slidesToShow: 1
        //         }
        //     },
        // ]
    });
});

$(function() {
    let header = $('.carousel__header');
    let logo = $('#carousel__logo');
    let hederHeight = header.height();

    $(window).scroll(function() {
        if($(this).scrollTop() > 1) {
            header.addClass('header_fixed');
        } else {
            header.removeClass('header_fixed');
        }

        if($(this).scrollTop() > 500) {
            $("#carousel__logo").attr("src","./pic/logo/favicon.png");
            logo.css({
                'width': '50px',
                'transition': '.3s',
            });
            $("#link").attr("href","#");
        } else {
            $("#carousel__logo").attr("src","./pic/logo/bridge_logo-01.png");
            logo.css({
                'width': '300px',
                'transition': '.3s',
            });
            $("#link").attr("href","https://zhenyapechenya.github.io/Bridge/index.html");
        }
    });
});