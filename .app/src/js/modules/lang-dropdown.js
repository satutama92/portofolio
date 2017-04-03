var languageToggle = (function($){

  var languageToggleInit = (function(){

    $(window).click(function() {
      $('.language-switcher-locale-url').find('li.active').removeClass('colored');
      $('.language-switcher-locale-url').find('li.active').siblings().hide();
      $('.language-switcher-locale-url').find('li.active').siblings().removeClass('options');
    });
    $('.language-switcher-locale-url').find('li.active').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $(this).toggleClass('colored');
      $(this).prependTo('.language-switcher-locale-url');
      $(this).siblings().toggle();
      $(this).siblings().toggleClass('options');

    });
  })();

  return{
    init: languageToggleInit
  }

})(jQuery);
