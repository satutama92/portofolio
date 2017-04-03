var imageToggle = (function($){

  var imageToggleInit = (function(){
    $(function(e){
      imageToggleClick();
    });
  })();

  var imageToggleClick = function(){
    $('.modular .quicktabs-tabs li a').each(function(){
      $(this).closest('.modular').find('.tab-img').addClass('hidden');
      $(this).closest('.modular').find('.tab-img:first').removeClass('hidden');

      $(this).click(function(){
        var $name = $(this).text().toLowerCase().replace(/[^A-Z0-9]+/ig, '');
        $(this).closest('.modular').find('.tab-img').addClass('hidden');
        $(this).closest('.modular').find('.tab-img.'+$name).removeClass('hidden');
      });
    });
  }

  return{
    init: imageToggleInit
  }

})(jQuery);
