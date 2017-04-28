$('button.menu').on('click', function () {
    $('.small-menu').toggleClass('invisible');
});

$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    arrows: false,
    centerPadding: 0,
    responsive: [
        {
            breakpoint: 1176,
            settings: {
                variableWidth: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                variableWidth: true
            }
        }
    ]

});

var parallax = function () {
    var scrolled = $(window).scrollTop();
    $('video').css('top', (scrolled * .5) + 'px');
};

$(window).scroll(function (e) {
    parallax();
});

var scrollTo = function (elementId) {
    var position = $(elementId).offset().top;
    var menuHeight = $('.container-main-menu').height();

    $('html, body').animate({scrollTop: (position - menuHeight)}, 1500);
};

var scrollToTop = function () {
    $('html, body').animate({scrollTop: 0}, 1500);
};

$('.menu  a, .small-menu--menu a, .nav a').on('click', function (elementId) {
    var test = $(this).attr('href');
    var elementId = $(this).attr('href');
    $(this)
        .addClass('.active-main-menu')
        .siblings().removeClass('.active-main-menu');
    if ($(this).attr('href') == '#home') {
       scrollToTop();
    } else {
        scrollTo(elementId);
    }
});

$('.back-to-top').on('click', function () {
    scrollToTop();
});

