$(document).ready(function(){
  //TODO: maybe think about creating array of image and array of background pics,
  //correlate and change background of carousel container for each image change
  //TODO: onclick event for nav links to scroll using animate with speed and id - 60px??
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
});
