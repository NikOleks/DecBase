$(document).ready(function(){
  $('.service__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: '.service__navigation',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.response__list').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendArrows: '.response__navigation',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});