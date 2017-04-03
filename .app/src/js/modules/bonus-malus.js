var bonusMalus = (function($){

  var bonusMalusInit = (function(){
    $(function(e){
      bonusMalusClick();
      calculation();
    });
  })();

  var bonusMalusClick = function(){
      $('.open-bonus-malus').click(function(){
        $('.accordion-bonus-malus').slideToggle( "fast" );
        $('.glyphicon-minus-sign').toggleClass('collapse');
        $('.glyphicon-plus-sign').toggleClass('collapse');
      });
      $('.bonus-malus-checkbox .checkbox').click(function(){
        $('label').toggleClass('bold');
        $('.glyphicon-ok').toggleClass('collapse');
      });
  }

  var calculation = function(){
    var schadenhohe = '#edit-submitted-schadenhohe';
    var selbstbehalt = '#edit-submitted-selbstbehalt';
    var jahrespramie = '#edit-submitted-jahrespramie';
    var bonnusstufe = '#edit-submitted-bonnusstufe';

    $(schadenhohe).keyup(function() {
      var schade = $(this).val();
      if(schade){
        $('#schade-schade').text(schade);
      }
      else{
        $('#schade-schade').text('0');
      }
    });

    $(selbstbehalt).keyup(function() {
      var selbs = $(this).val();
      var total = $('#total-premie-schaden').val();
      if(selbs){
        $('#schade-selb').text(selbs);
      }
      else{
        $('#schade-selb').text('0');
      }
    });

    $(jahrespramie).keyup(function() {
      var jahres = $(this).val();
      if(jahres){
        $('#bonus-schade').text(jahres*5);
      }
      else{
        $('#bonus-schade').text('0');
      }
    });

    $(bonnusstufe).change(function() {
      var bonus = $(this).val();
      var jahres = $('#edit-submitted-jahrespramie').val();
      var schadenhohe = $('#edit-submitted-schadenhohe').val();
      var selbstbehalt = parseInt($('#edit-submitted-selbstbehalt').val());
      var premieSchade1, premieSchade2, premieSchade3, premieSchade4, premieSchade5, bonusTotal, premieSumme;
      if(bonus == 1){
        premieSchade1 = jahres * 0.6 / 0.4;
        premieSchade2 = jahres * 0.55 / 0.4;
        premieSchade3 = jahres * 0.5 / 0.4;
        premieSchade4 = jahres * 0.45 / 0.4;
        premieSchade5 = jahres * 0.4 / 0.4;
      }
      else if(bonus == 2){
        premieSchade1 = jahres * 0.65 / 0.45;
        premieSchade2 = jahres * 0.60 / 0.45;
        premieSchade3 = jahres * 0.55 / 0.45;
        premieSchade4 = jahres * 0.50 / 0.45;
        premieSchade5 = jahres * 0.45 / 0.45;
      }
      else if(bonus == 3){
        premieSchade1 = jahres * 0.7 / 0.5;
        premieSchade2 = jahres * 0.65 / 0.5;
        premieSchade3 = jahres * 0.6 / 0.5;
        premieSchade4 = jahres * 0.55 / 0.5;
        premieSchade5 = jahres * 0.5 / 0.5;
      }
      else if(bonus == 4){
        premieSchade1 = jahres * 0.75 / 0.55;
        premieSchade2 = jahres * 0.7 / 0.55;
        premieSchade3 = jahres * 0.65 / 0.55;
        premieSchade4 = jahres * 0.6 / 0.55;
        premieSchade5 = jahres * 0.55 / 0.55;
      }
      else if(bonus == 5){
        premieSchade1 = jahres * 0.8 / 0.6;
        premieSchade2 = jahres * 0.75 / 0.6;
        premieSchade3 = jahres * 0.7 / 0.6;
        premieSchade4 = jahres * 0.65/ 0.6;
        premieSchade5 = jahres * 0.6 / 0.6;
      }
      premieSumme = premieSchade1 + premieSchade2 + premieSchade3 + premieSchade4 + premieSchade5;
      bonusTotal = premieSumme - (jahres * 5 );
      if(!schadenhohe){
        schadenhohe = 0;
      }
      totalPremie = parseInt(bonusTotal) + parseInt(schadenhohe);
      $('#bonus-schade').text(bonusTotal.toFixed(2));
      $('#premie-schaden-1').text(premieSchade1.toFixed(2));
      $('#premie-schaden-2').text(premieSchade2.toFixed(2));
      $('#premie-schaden-3').text(premieSchade3.toFixed(2));
      $('#premie-schaden-4').text(premieSchade4.toFixed(2));
      $('#premie-schaden-5').text(premieSchade5.toFixed(2));
      $('#premie-schaden-summe').text(premieSumme.toFixed(2));
      $('#total-premie-schaden').text(totalPremie.toFixed(2));
    });
  }

  return{
    init: bonusMalusInit
  }

})(jQuery);
