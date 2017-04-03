{
	componentDidMount: function(nextProps){
    var props			 = this.props;
    var datepicker = jQuery( '[name="'+props.input.name+'"].form-control' );
    var today 	= new Date();
    var oneDay 	= 24*60*60*1000;
		var maxDate = function(){
			if( props.question.maxValue ){
				var thisDate = new Date( props.question.maxValue )
				var days		 = Math.round(Math.abs((today.getTime() - thisDate.getTime())/(oneDay)));
				if( today.toDateString() === thisDate.toDateString() ){ return true; }
				else{ return days; }
			}else{
				return false;
			}
		};
		var minDate = function(){
			if( props.question.minValue ){
				var thisDate = new Date( props.question.minValue );
				var days		 = Math.round(Math.abs((today.getTime() - thisDate.getTime())/(oneDay)));
				if( today.toDateString() === thisDate.toDateString() ){ return true; }
				else{ return -days; }
			}else{
				return false;
			}
		};
		var options = {
			monthsFull: language.get().datepicker.monthsFull,
			monthsShort: language.get().datepicker.monthsShort,
			weekdaysFull: language.get().datepicker.weekdaysFull,
			weekdaysShort: language.get().datepicker.weekdaysShort,
			today: language.get().datepicker.today,
			clear: language.get().datepicker.clear,
			close: language.get().datepicker.close,
			showMonthsShort: true,
			format: language.get().datepicker.format,
			formatSubmit: language.get().datepicker.formatSubmit,
			selectMonths: true,
			selectYears: 300,
			min: minDate(),
			max: maxDate()
		};
		var options1 = {
			editable: true,
			format: language.get().datepicker.format,
			formatSubmit: language.get().datepicker.formatSubmit,
      min: minDate(),
      max: maxDate()
		};
    datepicker.pickadate( options1 ).on('change', function () {
      var self 				= jQuery(this);
      var removedText = self.val().replace(/[a-zA-Z, ]/g, '');

      self.val(removedText);
      props.onChange();
		}).on('blur', props.onBlur).on('keydown', props.onKeyUp);
		var calendar = datepicker.siblings('.modal-calendar').pickadate( options ).on('change', props.onChange).on('change', props.onKeyUp).on('blur', props.onBlur);

		jQuery('#'+this.props.question.id).on('hidden.bs.modal', function (e) {
			e.stopPropagation();
			if (jQuery('.modal.in').length > 0) {
				jQuery('body').addClass('modal-open');
			}
		});

		jQuery('#'+this.props.question.id).on('click', '[data-dismiss="modal"]', function(e) {
			e.stopPropagation();
		});
	}
}
