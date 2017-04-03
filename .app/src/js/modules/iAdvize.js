// var chat = (function($){
//
// 	var chatInit = (function(){
//
//   <!-- START IADVIZE JS CALLBACK -->
//
// 	iAdvizeCallbacks = {
// 		onStatusChanged: function(obj){ // chat callback
// 			if (obj.offline == 1 || obj.busy == 1){ // all agents are busy/offline
// 				$('#idzfoffline').show(); // show offline button
// 				$('#idzfonline').hide(); // hide online button
// 			} else { // at least one agent is avalaible
// 			$('#idzfoffline').hide(); // hide offline button
// 			$('#idzfonline').show(); // show online button
// 			}
// 		}
// 	};
//
// 	<!-- END IADVIZE JS CALLBACK -->
//
// 	var idzCustomData = {
// 	"env":"value",
// 	"page_name":"value",
// 	"scoringaffichage_de":0,
// 	"scoring_affichage_it":0,
// 	"scoring_affichage_fr":0
// 	};
//
// 	<!-- START IADVIZE LIVECHAT -->
//
// 	      (function() {
// 	          var idz = document.createElement('script');
// 	          idz.type = 'text/javascript';
// 	          idz.async = true;
// 	          idz.src = document.location.protocol + '//halc.iadvize.com/iadvize.js?sid=2145';
// 	          var s = document.getElementsByTagName('script')[0];
// 	          s.parentNode.insertBefore(idz, s);
// 	      })();
// 	  <!-- END IADVIZE LIVECHAT -->
//
//
// 		})();
//
//
// 	return{
// 		init: chatInit
// 	};
//
// })(jQuery);
