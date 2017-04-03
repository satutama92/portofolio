{
  componentDidMount: function(nextProps) {
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
