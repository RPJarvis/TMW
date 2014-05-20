$(document).ready(function(){
  //TODO: consider expanding size opf list item erather than bumping
  //padding for smoother effect

  //TODO: maybe think about creating array of image and array of background pics,
  //correlate and change background of carousel container for each image change
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
