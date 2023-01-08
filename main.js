var width = $(window).width();

var swiper = new Swiper(".mySwiper", {
    effect: "slider",
    slidesPerView: 2,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
});

window.onscroll = function () {
    if ((width >= 1000)) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            $("#header").css("background", "rgb(255, 255, 255)");
            $("#header").css("color", "rgb(57, 62, 70)");
            $("#header").css("box-shadow", "0px 0px 20px rgba(57, 62, 70, .09)");
            $("#header").css("padding", "4vh 4vw");
            $("#navigation a").hover(function () {
                $(this).css("border-bottom", "2px solid rgb(57, 62, 70)");
            }, function () {
                $(this).css("border-bottom", "2px solid transparent");
            });
        } else {
            $("#header").css("background", "transparent");
            $("#header").css("color", "rgb(57, 62, 70)");
            $("#header").css("box-shadow", "0px 0px 0px rgba(0,0,0,0)");
            $("#header").css("padding", "6vh 4vw");
            $("#navigation a").hover(function () {
                $(this).css("border-bottom", "2px solid rgb(57, 62, 70)");
            }, function () {
                $(this).css("border-bottom", "2px solid transparent");
            });
        }
    }
}

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('body,html').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function () {
                window.location.hash = hash;
            });
        }
    });
});
