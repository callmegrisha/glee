$(function() {

    $('.slider-top__inner').slick({
        arrows: false,
        dots: true
    });

    $('.tabs__item').on('click', function() {

        let tabId = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('tabs__item--active');
        $('.tabs__content').removeClass('tabs__content--active');

        $(this).addClass('tabs__item--active');
        $("#" + tabId).addClass('tabs__content--active');
    });

    $('.header__inner, menu a, user-nav').on('click', function() {

        $('.burger-btn').toggleClass('burger-btn--active');
        $('.menu').toggleClass('menu--active');
        $('.user-nav').toggleClass('user-nav--active');
        $('.header').toggleClass('header--active');
    });

    $('.filter__range-input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $('.filter__range-from').text(data.from);
            $('.filter__range-to').text(data.to);
        },
        onChange: function (data) {
            $('.filter__range-from').text(data.from);
            $('.filter__range-to').text(data.to);
        }
    });

    $('.recent-products__rating').rateYo({
        starWidth: "11px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        "starSvg": 
        '<svg height="511pt" viewBox="0 -10 511.98685 511" width="511pt" xmlns="http://www.w3.org/2000/svg">	' + 
        '<path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"/>' + 
        "</svg>",
        spacing: "8px",
        readOnly: true
    });

    $('.product-item__rating, .product__rate').rateYo({
        starWidth: "18px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        "starSvg": 
        '<svg height="511pt" viewBox="0 -10 511.98685 511" width="511pt" xmlns="http://www.w3.org/2000/svg">	' + 
        '<path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"/>' + 
        "</svg>",
        spacing: "13px",
        readOnly: true
    });

    if($('.partners__item').length > 5) {
        $('.partners__list').slick({
            slidesToShow: 6,
            arrows: false,
            // autoplay: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        centerPadding: 50
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });
    }

    $('.catalog__btn--list').on('click', function(){
        $('.product-item').addClass('product-item--list');
    });

    $('.catalog__btn--grid').on('click', function(){
        $('.product-item').removeClass('product-item--list');
    });

    $('.product-slider__main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-slider__nav',
        arrows: false,
        fade: true,
        draggable: false
    });

    $('.product-slider__nav').slick({
        slidesToShow: 3,
        asNavFor: '.product-slider__main',
        arrows: false,
        vertical: true,
        draggable: false,
        focusOnSelect: true
    });

    $('.product__num').styler();

    $('.related-products__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev" type="button"><img src="images/icons/slider-arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button class="slick-next" type="button"><img src="images/icons/slider-arrow-right.svg" alt="arrow-right"></button>',
    });

});