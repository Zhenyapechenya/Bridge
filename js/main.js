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

        if($(this).scrollTop() > 300) {
            if(window.matchMedia('(max-width: 1200px)').matches){
                // do functionality on screens smaller than 1200
                $("#carousel__logo").attr("src","./pic/logo/favicon.png");
                logo.css({
                    'width': '35px',
                    'transition': '.5s',
                });
            } else{
        
                $("#carousel__logo").attr("src","./pic/logo/favicon.png");
                logo.css({
                    'width': '40px',
                    'transition': '.5s',
                });
                $("#link").attr("href","#");
            }
        } else {
            if(window.matchMedia('(max-width: 1200px)').matches){
                $("#carousel__logo").attr("src","./pic/logo/bridge_logo-01.png");
                logo.css({
                    'width': '250px',
                    'transition': '.3s',
                });
                $("#link").attr("href","https://zhenyapechenya.github.io/Bridge/index.html");
            }else {
                $("#carousel__logo").attr("src","./pic/logo/bridge_logo-01.png");
                logo.css({
                    'width': '300px',
                    'transition': '.3s',
                });
                $("#link").attr("href","https://zhenyapechenya.github.io/Bridge/index.html");
            }
        }
    });
});