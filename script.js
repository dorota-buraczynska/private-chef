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