$(document).ready(function(){
  //TODO: photoshop backgrounds on to pictures
  $('.headerLink').mouseover(function(){
    var width = $(window).width();
    if(width > 779)
    {
      $(this).animate({'padding-top': 0, 'padding-bottom': 8}, 300);
    }
  });

  $('.headerLink').mouseout(function(){
    var width = $(window).width();
    if(width > 779)
 	 {
      if($(this).hasClass('headerLink'))
      {
   		 $(this).animate({'padding-top': 15, 'padding-bottom': 0}, 200);
      }
    }
  });

  //TODO: make link padding stick
  $('li a').click(function() {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

    $(this).closest('ul').find('.selected').removeClass('selected');
    $(this).addClass('selected');
    //Modify css here??

    return false;
  });
});
