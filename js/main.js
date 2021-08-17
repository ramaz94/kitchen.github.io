$(function(){

 
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow-prew" type="button"><img src="./img/slider__btn-left.png"></button>',
        nextArrow: '<button class="slick-arrow-next" type="button"><img src="./img/slider__btn-right.png"></button>',
        responsive: [
          {
            breakpoint: 1290,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.burger').on('click', function(){
        $('.header__menu').slideToggle();
      });

      $('.burger').on('click', function(){
        $('.burger').toggleClass('active');
      });
  




    // $(document).ready(function() {    
    //     $("*").find("a[href='"+window.location.href+"']").each(function(){  // Ищем текущую ссылку     
    //         $(this).addClass("current_link");     // Добавляем текущей ссылке class - current_link
    //     })
    //     });

  

});