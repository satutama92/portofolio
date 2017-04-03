{
  componentWillMount: function() {
    var items = this.props.question.items;
    var longItems = _.findIndex(items, function(item) { return item.value.length > 30; });

    if (items.length < 4 && longItems === -1 ) {
      this.setState({dropdown: 'radio-horizontal'});
    }else if (items.length < 5 && longItems === -1 ) {
      this.setState({dropdown: 'radio-vertical'});
    }else {
      this.setState({dropdown: 'select-dropdown'});
    }
	},
  componentWillReceiveProps: function (nextProps) {
    if (nextProps !== undefined && nextProps.question.items != this.props.question.items) {
      var items = nextProps.question.items;
      var longItems = _.findIndex(items, function(item) { return item.value.length > 30; });

      if (items.length < 4 && longItems === -1 ) {
        this.setState({dropdown: 'radio-horizontal'});
      }else if (items.length < 5 && longItems === -1 ) {
        this.setState({dropdown: 'radio-vertical'});
      }else {
        this.setState({dropdown: 'select-dropdown'});
      }
    }
  },
	componentDidMount: function() {
    var temp = this;
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
