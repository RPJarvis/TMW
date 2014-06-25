var width = $(window).width();

$(document).ready(function(){
  $('.headerLink').mouseover(function(){
    if(width > 779)
    {
      $(this).animate({'padding-top': 0, 'padding-bottom': 8}, 300);
    }
  });

  $('.headerLink').mouseout(function(){
    if(width > 779)
 	 {
      if($(this).hasClass('headerLink'))
      {
   		 $(this).animate({'padding-top': 15, 'padding-bottom': 0}, 200);
      }
    }
  });

  //Listen for resize event here and reinitialize scroll spy??
  $('#navbar').on('activate.bs.scrollspy', function(){
    //$(this).closest('ul').find('.selected').removeClass('selected');
    //$(this).addClass('selected');
  });

  $('li a').click(function() {

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

    if ($(window).width() <= 779) {
        $(".navbar-toggle").click();
    }

    //$(this).closest('ul').find('.selected').removeClass('selected');
    //$(this).addClass('selected');
    return false;
  });
});
