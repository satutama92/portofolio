{
  componentDidMount: function (nextProps) {
		var options = {
			weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
			showMonthsShort: false,
			format: 'dd-mm-yyyy',
			formatSubmit: 'dd-mm-yyyy',
			selectMonths: false,
			selectYears: false,
			max: true
		};

		jQuery( '.datepicker input' ).pickadate( options );
  },

  componentWillMount: function(nextProps){
    var navbar 	= this;
    if (this.props.user!== null) {
      jQuery('.login-btn a').addClass('logged-in').addClass('logged-in');
      jQuery('.login-btn [class^="icon-smile-"]').text(language.get().menu.login.title);
      jQuery('.login-btn .login-claim').text(language.get().menu.fnol.title).attr('href', language.get().menu.incidents.link).unbind('click');
    }else {
      jQuery('.login-btn .login-claim').text('Login').on('click', function (e) {
        e.preventDefault();
        iconMenu.toggle( jQuery('.icon-menu .login-btn') );
      });
    }
  },

  componentWillReceiveProps: function (nextProps) {
    var navbar 	= this;
    if (this.props.user!== null) {
      jQuery('.login-btn a').addClass('logged-in').addClass('logged-in');
      jQuery('.login-btn [class^="icon-smile-"]').text(language.get().menu.login.title);
      jQuery('.login-btn .login-claim').text(language.get().menu.fnol.title).attr('href', language.get().menu.incidents.link).unbind('click');
    }else {
      jQuery('.login-btn .login-claim').text('Login').on('click', function (e) {
        e.preventDefault();
        iconMenu.toggle( jQuery('.icon-menu .login-btn') );
      });
    }
  }
}
