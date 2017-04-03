{
  componentDidMount: function(){
    jQuery( '.stepper-nav .next' ).click(function(){
      jQuery('html, body').scrollTop(0);
    });
  }
}
