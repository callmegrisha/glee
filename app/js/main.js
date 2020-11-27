$(function() {

    $('.slider__inner').slick({
        arrows: false,
        dots: true
    });

    $('.tab').on('click', function(e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs__content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs__content--active');
    });

});