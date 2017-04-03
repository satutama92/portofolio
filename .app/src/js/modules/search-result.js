var search = (function($){

	var searchInit = (function(){

    $('.view-search-result .form-radio').each(function() {
      if($('#'+this.id).prop('checked')){
        $('#'+this.id).closest('div').addClass("active");
      }
    });

	})();

	return{
		init: searchInit
	};

})(jQuery);
