$(document).ready(function() {
  $(window).on('scroll', function() {
    const sectionList = $('.section_anim');

    if (sectionList.length) {
      sectionList.each(function() {
        const pos = $(this).offset().top,
          winTop = $(window).scrollTop();

        if (pos < winTop + 300) {
          $(this).addClass('section_show').removeClass('section_anim');
        }
      });
    }
    else {
      $(window).off('scroll');
    }
  });
});
