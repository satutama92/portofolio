var dropdown = (function($){

	var dropdownInit = function(){
		dropdownHeader( $('.cfe-account .nav') );
	};

	$(function () {
		dropdownSearchFilters( $('.page-search-result .views-widget-filter-type') );
	});

	var dropdownHeader = function( menu ){
		var dropdownTrigger = $( menu ).find('.dropdown > a');
		var dropdownMenu 		= $( menu ).find('.dropdown-menu');

		$( dropdownTrigger ).each(function(){
			var header 				 = $('header');
			var dropdownHeight = $(this).next('.dropdown-menu').outerHeight(true);

			$( this ).on('click blur', function(){
				if( !$( this ).parent().hasClass('open') ){
					header.css( 'padding-bottom', dropdownHeight+'px' );
				}else{
					header.css( 'padding-bottom', '' );
				}
			});
		});
	};

	var dropdownSearchFilters = function( filter ) {
		var searchFilter = filter;
		var filterToggle = filter.find( '.form-item:nth-child(2)' );

		filterToggle.click(function(e) {
			e.preventDefault;
			$(this).closest('.form-radios').toggleClass('open');
		});
	};

	return{
		init: dropdownInit
	};

})(jQuery);
