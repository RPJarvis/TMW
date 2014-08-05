$(document).ready(function(){
  $('.headerLink').mouseover(function(){
    var width = $(window).width();
    if(width > 779)
    {
      $(this).animate({'padding-top': 0, 'padding-bottom': 8}, 300);
    }
  });

  $('.headerLink').mouseout(function(){
    var width = $(window).width();
      if (width > 779 && $(this).hasClass('headerLink')) {
          $(this).animate({'padding-top': 15, 'padding-bottom': 0}, 200);
      }
  });

  $('li a').click(function() {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

    if ($(window).width() <= 779) {
        $(".navbar-toggle").click();
    }

    return false;
  });

  $(window).resize(function(){
      $('body').scrollspy('refresh');
  });
});
