var language = (function($) {

  var l = {
    default: 'de_CH'
  };

  l.set = function(langCode) {
    switch(langCode) {
      case 'de_CH':
        l.translation = de;
        break;
      case 'en_CH':
        l.translation = en;
        break;
      case 'fr_CH':
        l.translation = fr;
        break;
      case 'it_CH':
        l.translation = it;
        break;
      default:
        l.translation = de;
    }
    return l;
  };

  l.get = function() {
    return l.translation;
  }

  l.set(Drupal.settings.cfe.langString);

  return {
    set: l.set,
    get: l.get
  }

})(jQuery);
