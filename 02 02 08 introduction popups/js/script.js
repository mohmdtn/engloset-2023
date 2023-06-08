$(document).ready(function () {
    var swiper = new Swiper('.mySwiper', {
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.next-btn',
        },
    });

    if ($(".green").hasClass('deactive')) {
        $(".green-slide").remove();
    }
    if ($(".blue").hasClass('deactive')) {
        $(".blue-slide").remove();
    }
    if ($(".orange").hasClass('deactive')) {
        $(".orange-slide").remove();
    }
    if ($(".purple").hasClass('deactive')) {
        $(".purple-slide").remove();
    }
    if ($(".pink").hasClass('deactive')) {
        $(".pink-slide").remove();
    }

    $(".image").click(function (e) {
        console.log(e);
        if (!$(this).hasClass('deactive')) {
            let index = $(this).data("index");
            swiper.slideTo(index);
        }
    });
});