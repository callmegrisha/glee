$(function() {

    $('.slider-top__inner').slick({
        arrows: false,
        dots: true
    });

    $('.tab').on('click', function() {

        let tabId = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('tab--active');
        $('.tabs__content').removeClass('tabs__content--active');

        $(this).addClass('tab--active');
        $("#" + tabId).addClass('tabs__content--active');
    });

    $('.header__inner, menu a, user-nav').on('click', function() {

        $('.burger-btn').toggleClass('burger-btn--active');
        $('.menu').toggleClass('menu--active');
        $('.user-nav').toggleClass('user-nav--active');
        $('.header').toggleClass('header--active');
    });

});