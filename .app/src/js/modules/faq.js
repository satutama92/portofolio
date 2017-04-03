var faqIcon = (function($){

  var faqIconInit = (function(){

    $(document).ready(function(e){
      addSpan();
      askQuestion();

      $('.ui-accordion-header, #block-afb-1 h2').click(function() {
          if($(this).hasClass('ui-accordion-header-active')) {
              $('.header-icon').removeClass('glyphicon-minus-sign');
              $(this).children('.header-icon').toggleClass('glyphicon-minus-sign');
          }
          else {
              $(this).children('.header-icon').toggleClass('glyphicon-minus-sign');
          }
          if($('#question-node-form').hasClass('in')){
            $('#question-node-form').children().slideUp();
          }
          else{
            if($('#question-node-form').hasClass('collapse')){
              $('#question-node-form').children().slideDown();
            }
            else{
              $('#question-node-form').children().slideUp();
              setTimeout(function(){
                $('#question-node-form').removeClass('in');
              }, 800);
            }
          }
        });

      $('.group-answer').addClass('toggle').each(function() {
        addMore(this);
      });

      $('#block-views-faq1-block-1').bind("DOMSubtreeModified", function(){

        $('.group-answer').not('.toggle').addClass('toggle').each(function() {
          addMore(this);
          if ($('#edit-combine').val().length == 0 ){
            $(".filter-keyword").text(':');
            $(".hidden-for").css('display','none');
          }
          else{
            var value = $('#edit-combine').val();
            $(".filter-keyword").text(' ');
            $(".hidden-for").css('display','inline');
            $(".filter-keyword").append('<strong>'+value+'</strong> :');
          }
          if($('.pager').hasClass('pager-load-more-empty')) {
              $('.pager-more-text').text(' ');
          }

        })
      });

    });
  })();


  var addSpan = function(){
    $('.ui-accordion-header').append( "<span class='header-icon glyphicon glyphicon-plus-sign'></span>" );
  }

  var addMore = function( group ){
    var total = +($('.view-footer').find('.total').text());
    var end = +($('.views-row').length) - 1;
    var numberLeft = total - end;
    var lang = $('html').attr('lang');
    var deTekst1 = "Antwort ausblenden";
    var deTekst2 = "Weiterlesen";
    var frTekst1 = "Masquer la réponse";
    var frTekst2 = "Continuer la lecture";
    var itTekst1 = "Nascondi risposta";
    var itTekst2 = "Più";
    var enTekst1 = "Hide answer";
    var enTekst2 = "Continue reading";
    $(".content-left").text(numberLeft);

    var thisGroup = $(group);
    thisGroup.children().wrapAll('<div class="wrapper"></div>');

    var toggleBtn     = thisGroup.closest('.views-row').find('.views-field-nothing a');
    var expandedHeight = thisGroup.find('.wrapper').height();
    var collapsedHeight = thisGroup.height();

    toggleBtn.click(function () {
    if (toggleBtn.hasClass("expand")) {
        $(thisGroup).animate({
            height: expandedHeight
        }, 'fast', function(){
              switch (lang) {
              	case 'de':
              		toggleBtn.removeClass("expand").text(deTekst1);
              		break;
              	case 'it':
              		toggleBtn.removeClass("expand").text(itTekst1);
              		break;
              	case 'fr':
              		toggleBtn.removeClass("expand").text(frTekst1);
              		break;
              	case 'en':
              		toggleBtn.removeClass("expand").text(enTekst1);
              		break;
              	}
        });
      }
      else {
        $(thisGroup).height(collapsedHeight);
        switch (lang) {
          case 'de':
            toggleBtn.addClass("expand").text(deTekst2);
            break;
          case 'it':
            toggleBtn.addClass("expand").text(itTekst2);
            break;
          case 'fr':
            toggleBtn.addClass("expand").text(frTekst2);
            break;
          case 'en':
            toggleBtn.addClass("expand").text(enTekst2);
            break;
        }
     }
    });
  }

  var askQuestion = function(){
    $('.block-afb h2').attr('data-toggle','collapse');
    $('.block-afb h2').attr('data-target','#question-node-form');
    $('#question-node-form').addClass('collapse');
    $('.block-afb h2').prepend( "<span class='header-icon glyphicon glyphicon-plus-sign'></span>" );
    var frage = $('.form-item-field-question-und-0-value label').text().slice(0,-2);
    var names = $('.form-item-field-questioner-name-und-0-value label').text().slice(0,-2);
    var email = $('.field-name-field-questioner-email-und-0-email label').text().slice(0,-2);
    $('#edit-field-question-und-0-value').attr("placeholder", frage);
    $('#edit-field-questioner-name-und-0-value').attr("placeholder", names);
    $('#edit-field-questioner-email-und-0-value').attr("placeholder", email);
  }

  return{
    init: faqIconInit
  }


})(jQuery);
