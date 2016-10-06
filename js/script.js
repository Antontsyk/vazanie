$(document).ready(function () {
    $(function () {
        $('.menu').slicknav({
            label: 'Меню',
            prependTo: 'nav'
        });
    });
    $('.slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000
    });
    $('.drop_left_menu').click(function () {
        $('.left_menu').slideToggle('slide');
    });

    $('.add_shem').click(function () {

    });
    $('#file_shem').change(function () {
        var text = $('#file_shem').val();
        $('.add_sh .file .file_text').html(text);
    });

    $('.add_shem').click(function () {
        $('.block_popup').slideDown(300);
    });

    $('.close').click(function () {
        $('.block_popup, .block_popup_2').slideUp(300);
    });

    $('.add_sh_info').click(function () {
        $('.block_popup_2').slideDown(300);
    });

    //слайдер в товаре
    if ($('.slider_vertical').length) {
        $('.slider_vertical').slick({
            vertical: true,
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        vertical: false,
                    }
                            }]
        });
    }
    //слайдер в товаре 2
    if ($('.slider_row').length) {
        $('.slider_row').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 3,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                    }
    },
                {
                    breakpoint: 870,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2
                    }
    },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    },

    },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    },

    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
        });
    }

    $(window).resize(function () {
        if (window.innerWidth > 700) {
            $('.left_menu').css('display', 'block');
        }
    });
});