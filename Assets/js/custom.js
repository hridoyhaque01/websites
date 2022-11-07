$(document).on('click','.navbar-nav .nav-item', function(){
  $(this).addClass('active').siblings().removeClass('active');
})
$(document).on('click','.dropdown-menu li', function(){
  $(this).addClass('active').siblings().removeClass('active');
})
$(document).on('click','.list-group li', function(){
  $(this).addClass('active-tab').siblings().removeClass('active-tab');
})
$(document).on('click','.portfolio-filter li', function(){
  $(this).addClass('active').siblings().removeClass('active');
})
$(document).on('click','.share .love', function(){
  $(this).addClass('active');
})
$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 850,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll:2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
var $grid = $('.portfolio-item');
// filter items on button click
$('.portfolio-filter').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
$(document).ready(function(){
  $('.fixed').click(function(){
    $(window).scrollTop(0);
  });
  $(window).scroll(function(){
    $scrollTop = $(window).scrollTop();

    if($scrollTop > 100){
      $('.fixed').css("opacity","1");
      $('nav').addClass("sticky-top",2000);
    }else{
      $('.fixed').css("opacity","0");
      $('nav').removeClass("sticky-top",2000);
    }

  });

});
