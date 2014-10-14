$( document ).ready(function() {

	var test = $('#welcome');
   var win = jQuery(window);
	var doc = jQuery(document);
	var win_w = win.width();
	var win_h = win.height();
	var scroll_pos = win.scrollTop();
	var show_nav = false;




	
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('#intro .bg').backstretch('/images/IP_home-bg.jpg');
		$('#outro .bg').backstretch('/images/IP_team-bg.jpg');
	}

	if( /Android|webOS|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('body').addClass('mobile');
	}

	$('.menu-toggle').click(function(){
		$('nav ul').slideToggle();
	})

	$('.mobile nav ul a').click(function(){
		$('nav ul').slideToggle();
	})


	$(function() {
	  $('#nav a[href*=#]:not([href=#])').click(function() {
	  	console.log('asdadfv');
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 100
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});


});