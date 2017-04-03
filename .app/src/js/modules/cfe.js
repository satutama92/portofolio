var cfeOptions;
var carProduct = 104571;

(function ($, window) {
  $(function () {
    var valuesStep;
    Object.defineProperties(window.cfe, {
      'store': {
        get: function () {
          return this.store;
        },
        set: function (store) {
          new CfeEvents(store, {events: {
            'INITIALIZE_STEPS': function (action) {
              if (Drupal.settings.cfe.productFlow && Drupal.settings.cfe.productID === carProduct) {
                this.dispatch({ type: 'SHOW_STEP', stepIndex: 1 });
                this.dispatch({ type: 'SHOW_STEP', stepIndex: 3 });
              }
            },
            'SET_ACTIVE_STEP': function(action){
              quoteStepper( this.getState() );
            },
            'SHOW_STEP': function(action){
              $('.eurotax-step').find('.eurotax-modal').on('shown.bs.modal', function () {
                store.dispatch({ type: 'SET_ACTIVE_STEP', stepIndex: $(this).data('stepindex'), shouldHideOtherSteps: false });
              });
            },
            '@@redux-form/CHANGE': function(action) {
              if (Drupal.settings.cfe.productFlow && Drupal.settings.cfe.productID === carProduct) {
                if (action.meta.field === 'XO_19_VERZEKERDESOM') {
                  this.dispatch({ type: action.payload === 'ja' ? 'SHOW_STEP' : 'HIDE_STEP', stepIndex: 2 });
                }
                if (action.meta.field === 'Contract_1_PaymentInterval' || action.meta.field === 'Contract_1_DateStart') {
                  this.dispatch({ type: 'SET_ACTIVE_STEP', stepIndex: 3, shouldHideOtherSteps: false });
                }
              }
            },
            'RECEIVE_LOOKUP_DATA': function (action) {
              var state = this.getState();
              var activeStep = state.stepper.steps.length && state.stepper.steps[state.stepper.activeStepIndex];

              if (activeStep && activeStep.activeQuestionIndex === activeStep.questions.length - 1) {
                $('.eurotax-modal').modal('hide');
              }
            },
            'PRODUCT_DETAILS_RECEIVE': function (action) {
              if ($('#cfe-dossier-calculations')) {
                $('.node-type-dossier .footer-top, .node-type-dossier .footer-bottom').hide();
                $('body.node-type-dossier main.main-container').css({paddingBottom: '18rem'});
              }
            },
            // Showing and hiding the Calculation Save Button and Informative list
            'ITS/CUSTOMER/CUSTOMER_SAVE_RECEIVE': function (action) {
              var state = this.getState();
              valuesStep = state.stepper.activeStepIndex;

              $('#cfe-calculation-save-button').show();
              $('#cfe-product-informative-values-list').show();
              $('.stepper-section.open+.stepper-section .section-title').hide();
            },
            'WINDOW_ON_POP_STATE': function(action) {
              quoteStepper( this.getState() );

              if(this.getState().stepper.activeStepIndex-1 === valuesStep ) {
                $('#cfe-product-informative-values-list').show();
              }else if (Drupal.settings.cfe.productFlow && Drupal.settings.cfe.productID === carProduct && this.getState().stepper.activeStepIndex === 3) {
                store.dispatch({ type: 'SET_ACTIVE_STEP', stepIndex: 3, shouldHideOtherSteps: true });
                store.dispatch({ type: 'SHOW_STEP', stepIndex: 0 });
                store.dispatch({ type: 'SHOW_STEP', stepIndex: 1 });
                console.log("Log");
              }else {
                $('#cfe-product-informative-values-list').hide();
              }
            },
            '@@redux-form/SET_SUBMIT_SUCCEEDED': function(action) {
              $('#cfe-product-informative-values-list').hide();
            },
            'CUSTOMER_PAYMENT_METHODS_RECEIVE': function (action) {
              $('#cfe-calculation-save-button').hide();
            },
            '@@redux-form/TOUCH': function (action) {
              if( action.meta.form === 'productSave' ) {
                $('#cfe-product-informative-values-list').hide();
              }
            }
          }});
          return store;
        }
      }
    });



    var quoteStepper = function( thisStore ) {
      var state       = thisStore;
      var step        = state.stepper.activeStepIndex;
      var totalSteps  = state.stepper.steps.length - 1;
      var stepSize    = 100/totalSteps;

      // Change progress bar width based on total steps
      $('.footer-quote .progress .progress-bar.done').css('width', (step*stepSize)+'%').attr('aria-valuenow', (step*stepSize));
      $('.footer-quote .progress .progress-bar.next').css('width', stepSize+'%').attr('aria-valuenow', stepSize);

      // Add tax block if step is total steps - 2 steps
      if( step >= (totalSteps-2) ){ $('.cfe-tax-wrapper').show(); }
      else{ $('.cfe-tax-wrapper').hide(); }

      // Change next step size to 0 when on the last step
      if( step === totalSteps ){ $('.footer-quote .progress .progress-bar.next').css('width', '0%').attr('aria-valuenow', '0'); }
    };

    cfeOptions = Drupal.settings.cfeOptions;
    cfeOptions.clientId = 'cfe_web';
    cfeOptions.clientSecret = 'cfe_web_1234';
    cfeOptions.locale = 'de_CH';

    if (window.cfe.productConfig) {
      cfeOptions.productConfig = window.cfe.productConfig;
    }

    if( Drupal.settings.cfe ){
      var drupalData = Drupal.settings.cfe;
      if( drupalData.productID ){
        if (drupalData.productFlow) {
          var drupalConf  = { "id": drupalData.productID, "flow": JSON.parse(drupalData.productFlow) };
        }else {
          var drupalConf  = { "id": drupalData.productID };
        }
        cfeOptions.productConfig = drupalConf;
      }
      if( drupalData.langString ){
        cfeOptions.locale = drupalData.langString;
      }
    }

    window.cfe.initApp( cfeOptions );
  });
})(jQuery, window);
