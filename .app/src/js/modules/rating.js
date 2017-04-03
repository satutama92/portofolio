var rating = (function($){

  var ratingInit = (function(){

    $(document).ready(function(e){
      if($('#rating1').length ==1){
        var cw = window.rating1.clientWidth; // save original 100% pixel width

        function rating( stars ) {
          window.rating1.style.width = Math.round(cw * (stars / 5)) + 'px';
        }

        var rateValue = $('#ratingVal').text();
        rating(rateValue);
      };

      // var jqxhr  = $.getJSON( "http://api.ekomi.de/v3/getProductfeedback?auth=665%7CFMJuyuC8uEbo3WxRa5aG&version=cust-1.0.0&type=json&charset=utf-8?callback", function() {
      //     console.log( "success" );
      //   }).done(function() {
      //       console.log( "second success" );
      //     })
      //     .fail(function() {
      //       console.log( "error" );
      //     })
      //     .always(function() {
      //       console.log( "complete" );
      //     });
      //
      //   // Perform other work here ...
      //
      //   // Set another completion function for the request above
      //   jqxhr.complete(function() {
      //     console.log( "second complete" );
      //   });

    });
  })();

  return{
    init: ratingInit
  }

})(jQuery);
