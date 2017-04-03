var cooperation = (function($){

	var cooperationInit = (function(){
    var clipboard = new Clipboard('.copy-button');

    $(function() {
      clipboard.on('success', function(e) {
          $(".copy-message").fadeIn('slow').delay(3000).fadeOut();
          e.clearSelection();
      });
      clipboard.on('error', function(e) {
      });
    });
	})();

	return{
		init: cooperationInit
	};

})(jQuery);
