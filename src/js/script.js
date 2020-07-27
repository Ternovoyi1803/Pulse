$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrowLeft.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrowRight.png"></button>',
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__items').removeClass('catalog__items_active').eq($(this).index()).addClass('catalog__items_active');
      });

    function toggleSlide(linkName) {
        $(linkName).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog__main').eq(i).toggleClass('catalog__main_active');
                $('.catalog__back').eq(i).toggleClass('catalog__back_active');
            });
        });
    }

    toggleSlide('.catalog__link');
    toggleSlide('.catalog__backlink');

    // Modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });    
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button_buy').on('click', function() {
        $('.overlay, #order').fadeIn('slow');
    });

    $('.button_buy').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__subheader')
                .text($('.catalog__title')
                .eq(i).text());
        });
    });
  });