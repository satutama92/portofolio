var iconMenu = (function($){
	var scrollDist = 0;
	var isOpen		 = false;

	var iconMenuInit = (function(){
		// Trigger toggle on click
		$('.icon-menu').find('li').click(function(e){
			e.preventDefault();
			// Give click target to toggle
			var item = this;
			iconMenuToggle(item);
		});

		// Toggle NON ICON menu
		$( '.menu-toggle' ).on('click', function(){
			$('html').toggleClass('showing-overlay');
			$('.header-wrapper').toggleClass('in');
			$( '.navbar-collapse' ).collapse('toggle');
		});
	})();

	var iconMenuToggle = function(btn){
		// Trigger open if the btn isn't opened yet
		if( $('.menu-flyout').hasClass('open') && $(btn).hasClass('open') ){
			iconMenuClose(btn);
		}else{
			iconMenuOpen(btn);
		}
	}

	var iconMenuOpen = function(btn){
		// Reset flyout items and openen the target
		$('.menu-flyout').show().addClass('open').find('.flyout').hide();
		$('.icon-menu').find('li').removeClass('open');
		$(btn).addClass('open');

		// If/switch to open the right target
		if( $(btn).hasClass('login-btn') ){
			$('.login-flyout').show();
		}else if( $(btn).hasClass('calculator-btn') ){
			$('.calculator-flyout').show();
		}else if( $(btn).hasClass('contact-btn') ){
			$('.contact-flyout').show();
		}
		isOpen = true;
		scrollDist = $(window).scrollTop();
	}

	var iconMenuClose = function(btn){
		// Hide and close flyout
		$('.menu-flyout').hide().removeClass('open').find('.flyout').hide();
		if( btn ){
			$(btn).removeClass('open');
		}else{
			$('.icon-menu').find('li').removeClass('open');
		}
		isOpen = false;
		scrollDist = $(window).scrollTop();
	}

	$(document).mouseup(function(e){
	    var container = $('.menu-flyout');
			var menu 			=	$('.region-icon-nav');
			// Close on click outside of menu and flyout
	    if( (!container.is(e.target) && container.has(e.target).length === 0) && (!menu.is(e.target) && menu.has(e.target).length === 0) ){
	      iconMenuClose();
	    }
	});

	$(window).resize(function(e){
		if( $(window).width() < 753 && isOpen ){
			iconMenuClose();
		}
		if( $(window).width() > 753 ){
			$('html').removeClass('showing-overlay');
		}else if( $(window).width() < 753 && $('.header-wrapper.in').length > 0 ) {
			$('html').addClass('showing-overlay');
		}
	});

	$(window).scroll(function(e){
		var y = $(window).scrollTop();
		if( (y-scrollDist > 500 || y-scrollDist < -500 ) && isOpen ){
			iconMenuClose();
		}
	});

	return{
		init: iconMenuInit,
		toggle: iconMenuToggle
	}

})(jQuery);
