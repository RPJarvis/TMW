function scrollTo(id, speed){
	var targetOffset = $("#"+id).offset().top - 61;
 	$('html,body').animate({scrollTop: targetOffset}, speed);
}
function scrollBack(id, speed){
	var targetOffset = $("#"+id).offset().top;
 	$('html,body').animate({scrollTop: targetOffset}, speed);
}
function doSlide(type, curSlide){
	if(curSlide > 6){ 
		curSlide = 1;
		$('#slideshow').css({'left': 0});
	}
	if(type === 'next') curSlide++;
	else if (type === 'prev') curSlide--;
	if(curSlide < 1){
		$('#slideshow').css({'left': -6480});
		curSlide = 6;
	}
	var bc = '', bs = (curSlide !== 7) ? curSlide : 1;
	
	var leftVal = 1080 * (curSlide - 1);
	var left = leftVal - (leftVal * 2);
	$('#slideshow').animate({'left': left}, 1000);
	$('#bigSell').css({'background': "url('../_images/patterns/" + bs + ".jpg')"});
	
	return curSlide;
}
$(document).ready(function(){
	var $sections = $('.viewFinder');
	var $navs = $('#headerNav > li');
	var topsArray = $sections.map(function() {
	  return $(this).position().top - 300;
	}).get();                               
	var len = topsArray.length;
	var currentIndex = -1;
	var getCurrent = function( top ) { 
	  for( var i = 0; i < len; i++ ) { 
			if( top > topsArray[i] && ((topsArray[i+1] && top < topsArray[i+1]) || !topsArray[i+1]))
        return i;
    }
	};
	
	var scrollTop = $(this).scrollTop();
  var checkIndex = getCurrent( scrollTop );

  $sections.fadeTo(0, .3, function(){});
  $('#headerNav li').addClass('headerLink');
	$navs.eq(currentIndex).removeClass('headerLink').animate({'padding-top': 0, 'padding-bottom': 10}, 200);
	$('#headerNav li.headerLink').animate({'padding-top': 10, 'padding-bottom': 0}, 100);
	$sections.eq(currentIndex).fadeTo(300, 1, function(){});
	
	$('#bigSell, #services').fadeTo(300, 1, function(){});
	
	var curSlide = 1, cur = 1;
	window.slideshow = window.setInterval(function(){
		curSlide = doSlide('next', cur);
		cur = curSlide;
	}, 7500);
	
	$('.slideButton').live('click', function(){
		var type = $(this).attr('data-type');
		var cur = curSlide;
		window.clearInterval(window.slideshow);
		window.slideshow = '';
		curSlide = doSlide(type, cur);
		window.slideshow = window.setInterval(function(){
			curSlide = doSlide('next', cur);
			cur = curSlide;
		}, 7500);
	});

	$('.headerLink').live('mouseover', function(){
		$(this).animate({'padding-top': 0, 'padding-bottom': 10}, 200);
	});
	$('.headerLink').live('mouseout', function(){
		if($(this).hasClass('headerLink'))
			$(this).animate({'padding-top': 10, 'padding-bottom': 0}, 100);
	});
	
	$('.headerLink, .bigButton').live('click', function(){
		var id = $(this).attr('data-id');
		$('#headerNav li').addClass('headerLink');
		$(this).removeClass('headerLink');
		$('#headerNav li.headerLink').animate({'padding-top': 10, 'padding-bottom': 0}, 100);
		
		if(id !== 'login') {
			(id !== 'home') ? scrollTo(id, 700) : scrollBack('bigSell', 700);
		} else {
			window.open('http://proposals.thousandmileswest.com', '_blank');
			window.focus();
		}
	});
	
	var st;
	$(document).scroll(function(e) {
		st = window.clearTimeout(st);
		st = '';
    scrollTop = $(this).scrollTop();
    checkIndex = getCurrent( scrollTop );
    if( checkIndex !== currentIndex ) {
    	st = window.setTimeout(function(){
	      currentIndex = checkIndex;
	      $sections.fadeTo(200, .3, function(){});
	      $('#headerNav li').addClass('headerLink');
	    	$navs.eq(currentIndex).removeClass('headerLink');
	    	$('#headerNav li.headerLink').animate({'padding-top': 10, 'padding-bottom': 0}, 100);
	    	$navs.eq(currentIndex).animate({'padding-top': 0, 'padding-bottom': 10}, 200);
	    	$sections.eq(currentIndex).fadeTo(300, 1, function(){});
	    	if(currentIndex === 0)
	    		$('#services').fadeTo(300, 1);
    	}, 10);
    }
	});
	
	$(document).trigger('scroll');
	
	$('#contactForm input[type="text"], #contactForm textarea').each(function(){
		$(this).val($(this).attr('data-def'));
	});
	
	$('#contactForm input[type="text"], #contactForm textarea').focus(function(){
		var def = $(this).attr('data-def');
		if($(this).val() === def)
			$(this).val('');
	});
	$('#contactForm input[type="text"], #contactForm textarea').blur(function(){
		var def = $(this).attr('data-def');
		if($(this).val() === '')
			$(this).val(def);
	});
	
});