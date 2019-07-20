$(document).ready(function() {
    $('.header-slider').slick({
        dots: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    $('.clients-slider-content').slick({
      dots: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});
    
// $('[data-mobile]').click(function() {
//   var selector = $(this).attr('data-mobile');
  
//   if (selector === 'close') {
//     $('.overlay').removeClass('active');
//     $('.mobile-nav').removeClass('active');
//   }
//   else {
//     $('.overlay').addClass('active');
//     $('.mobile-nav').addClass('active');
//   }
// });


document.querySelectorAll('[data-mobile]').forEach(function(mobile) {
  mobile.addEventListener('click', function(e) {
      let target = this.getAttribute('data-mobile');

      if(target === 'close') {
          document.querySelector('.overlay').classList.remove('active');
          document.querySelector('.mobile-nav').classList.remove('active');
      } else {
          document.querySelector('.overlay').classList.add('active');
          document.querySelector('.mobile-nav').classList.add('active');
      }
}) });


 