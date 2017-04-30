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
var $slide = $('.bg-slide');
var $window = $(window);
var screenHeight;


var setBackgroundSize = function () {
    screenHeight = $window.height();
    $slide.each(function () {
        var imgWidth = $(this).data('image-width');
        var imgHeight = $(this).data('image-height');
        var elementWidth = $(this).width();
        var imgRatio = imgWidth / imgHeight;
        var screenRatio = elementWidth / screenHeight;
        var backgroundSizeHeight;
        var backgroundSizeWidth;
        var elementPosition = $(this).offset().top;
        var elementHeight = $(this).outerHeight();

        $(this).data('topPosition', elementPosition);
        $(this).data('elementHeight', elementHeight);

        if (imgRatio <= screenRatio) {
            backgroundSizeHeight = (imgHeight * elementWidth) / imgWidth;
            backgroundSizeWidth = elementWidth;
        } else {
            backgroundSizeWidth = (imgWidth * screenHeight) / imgHeight;
            backgroundSizeHeight = screenHeight;
        }

        $(this).data('backgroundHeight', backgroundSizeHeight);

        $(this).find('.background')
            .css('background-size', backgroundSizeWidth + 'px ' + backgroundSizeHeight + 'px')
            .css('height', backgroundSizeHeight);

    });
};

setBackgroundSize();

$(window).on('resize', function () {
    setBackgroundSize();
    scrollHandler();
});

window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){setTimeout(f, 1000/60)};

var scrollHandler = function (event) {
    $slide.each(function () {
        var scroll = $window.scrollTop();
        var elementPosition = $(this).data('topPosition');
        var elementHeight = $(this).data('elementHeight');
        var relativeScroll = scroll - (elementPosition - screenHeight) - $(this).data('backgroundHeight');

        if (elementPosition < (scroll + screenHeight) &&
            (elementPosition + elementHeight) > scroll) {
            $(this).find('.background').css('transform', 'translateY(' + relativeScroll + 'px)');
            // alternative selector type: $('.background', this);

        }
    });
};

var parallax = function () {
    var scrolled = $(window).scrollTop();
    $('video').css('top', (scrolled * .5) + 'px');
};

$(window).on('scroll', function (e) {
    parallax();
    // scrollHandler();
    requestAnimationFrame(scrollHandler);
});

var scrollTo = function (elementId) {
    var position = $(elementId).offset().top;
    var menuHeight = $('.container-main-menu').height();

    $('html, body').animate({scrollTop: (position - menuHeight)}, 1500);
};

var scrollToTop = function () {
    $('html, body').animate({scrollTop: 0}, 1500);
};

$('.menu  a[href!="#menus"], .small-menu--menu a[href!="#menus"], .nav a').on('click', function (elementId) {
    var test = $(this).attr('href');
    var elementId = $(this).attr('href');
    showIndexPage();
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

var showMenusSide = function () {
    $('#aside-menu').hide();
    $('#home').hide();
    $('#about').hide();
    $('#menus').hide();
    $('.second-menu').hide();
    $('#reviews').hide();
    $('.review-image').hide();
    $('#contact').hide();
    $('#photos').hide();
    $('.small-screen-slide').hide();
    $('.menu-side-container').fadeIn(1500);
};

var showIndexPage = function () {
    $('#aside-menu').show();
    $('#home').show();
    $('#about').show();
    $('#menus').show();
    $('.second-menu').show();
    $('#reviews').show();
    $('.review-image').show();
    $('#contact').show();
    $('.menu-side-container').hide();
    if ($(window).width() <= 600) {
        $('.small-screen-slide').show();
        $('#photos').hide();
    } else {
        $('#photos').show();
    }
};

$('.menu a[href="#menus"], .small-menu--menu a[href="#menus"], .menus a[href="#menus"], .second-menu-information button').on('click', function () {
    showMenusSide();
    $('html, body').animate({scrollTop: 0}, 1500);
});



