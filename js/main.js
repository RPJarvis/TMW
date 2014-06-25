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
    if(width > 779)
 	 {
      if($(this).hasClass('headerLink'))
      {
   		 $(this).animate({'padding-top': 15, 'padding-bottom': 0}, 200);
      }
    }
  });

  //TODO:this is focusing in li item rather than link item maybe use li a active insterad of javascrizipt q
  $('#navbar').on('activate.bs.scrollspy', function(){
    //should the ul below be a li
    $(this).closest('ul').find('.selected').removeClass('selected');
    $(this).addClass('selected');
  });

  //TODO: make link padding stick, link scrolling with links without clicks
  $('li a').click(function() {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

    $(this).closest('ul').find('.selected').removeClass('selected');
    $(this).addClass('selected');

    return false;
  });
});
