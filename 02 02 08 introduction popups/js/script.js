$(document).ready(function () {
    var swiper = new Swiper('.mySwiper', {
        spaceBetween: 20,
        allowTouchMove: false,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: '.next-btn',
        },
    });

    $(".next-btn").click(function (e) { 
        $('.swiper-pagination-bullet-active').addClass('.bullet-fill').removeClass('.swiper-pagination-bullet-active');
        $('.swiper-pagination-bullet-active').prevAll().addClass('bullet-fill');

        getCompleteIndex = $('.swiper-pagination-bullet-active').index();
        if(getCompleteIndex == 2){
            $(".introduction-popups .images .orange").removeClass("deactive");
        }
        if(getCompleteIndex == 3){
            $(".introduction-popups .images .blue").removeClass("deactive");
        }
        if(getCompleteIndex == 5){
            $(".introduction-popups .images .purple").removeClass("deactive");
        }
        if(getCompleteIndex == 7){
            $(".introduction-popups .images .pink").removeClass("deactive");
        }
    });


    $(".image").click(function (e) {
        if (!$(this).hasClass('deactive')) {
            let index = $(this).data("index");
            swiper.slideTo(index);
        }
    });
});