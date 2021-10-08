$(document).ready(function(){
  $('.slick-home').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: true,
    nextArrow: '<i class="fas fa-chevron-right arrow-next"></i>',
    prevArrow: '<i class="fas fa-chevron-left arrow-prev"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          autoplay:true,
          infinite: true,
          autoplaySpeed:4000
        }
      },
      {
        breakpoint: 320,
        settings: {
          dots: true,
          arrows: false,
          autoplay:true,
          infinite: true,
          autoplaySpeed:4000
        }
      }
    ]
  });
});