$(document).ready(function(){

  $('.headerLink').mouseover(function(){
    $(this).animate({'padding-top': 0, 'padding-bottom': 10}, 200);
  });

  $('headerLink').mouseout(function(){
    $(this).animate({'padding-top': 10, 'padding-bottom': 0}, 200);
  });
});
