(function (_, $) {
    var EuroTaxHandler = function (el, options) {
        // console.log('EuroTaxHandler', el, options);
        this.options = options;
        this.$container = $(el);
        this.store = options.store;
        this.activeQuestionIndex = 0;
        this.actions = {
            focus:         '@@redux-form/FOCUS',
            change:        '@@redux-form/CHANGE',
            blur:          '@@redux-form/BLUR',
            setActiveStep: 'SET_ACTIVE_STEP'
        };

        this.actionHandlers = {};
        this.actionHandlers[this.actions.focus] =   'onFocusAction';
        this.actionHandlers[this.actions.change] =  'onChangeAction';
        this.actionHandlers[this.actions.blur] =    'onBlurAction';

        this.init();
    };

    Object.assign(EuroTaxHandler.prototype, {
        init: function () {
            this.store.subscribe(this.handleSubscribeStore.bind(this));
            this.addEventListeners = _.debounce(this.addEventListeners, 200);
        },

        // ACTIONS
        onChangeAction: function (action) {
            if (action.payload == null || action.payload == '') return;
            this.watchGoToNextQuestion(action);
        },

        watchGoToNextQuestion: function(action) {
            var changedQuestionIndex = _.findIndex(this.questions, {id: action.meta.field});
            var nextQuestion = this.questions[changedQuestionIndex + 1];

            if (nextQuestion) {
                this.activeQuestionIndex = changedQuestionIndex + 1;
                this.focusInput(nextQuestion.id);
            } else {
                this.$container.find('.eurotax-modal').modal('hide');
            }
        },

        // DISPATCHERS
        focusInput: function (fieldName) {
            this.store.dispatch({type: this.actions.focus, meta: {form: 'productCalculation', field: fieldName}});
        },

        setActiveStep: function (action) {
            this.store.dispatch({type: this.actions.setActiveStep, stepIndex: action.stepIndex, closeOtherSteps: action.closeOtherSteps});
        },

        // EVENTS
        handleStart: function() {
            this.setActiveStep({stepIndex: this.options.stepIndex, closeOtherSteps: false});
            this.$container.find('.eurotax-modal').modal('show');
            this.focusInput(this.questions[0].id);
            this.activeQuestionIndex = 0;
        },

        handleReset: function () {
            this.$container.find('.eurotax-modal').modal('show');
            this.focusInput(this.questions[0].id);
            this.activeQuestionIndex = 0;
        },

        handleBack: function () {
            if (this.questions[this.activeQuestionIndex - 1]) {
                this.focusInput(this.questions[this.activeQuestionIndex - 1].id);
                this.activeQuestionIndex = this.activeQuestionIndex - 1;
            }
        },

        addEventListeners: function () {
            this.$container.find('.eurotax-start').off('click').on('click', this.handleStart.bind(this));
            this.$container.find('.eurotax-reset').off('click').on('click', this.handleReset.bind(this));
            this.$container.find('.eurotax-back').off('click').on('click', this.handleBack.bind(this));
        },

        handleSubscribeStore: function () {
            this.state = this.store.getState();
            this.questions = this.state.stepper.steps[this.options.stepIndex].questions;

            //console.log('this.state.lastAction', this.state.lastAction)

            var method = this.actionHandlers[this.state.lastAction.type];

            if (this[method]) {
                this[method].call(this, this.state.lastAction);
            }

            this.addEventListeners();
        }
    });

    $.fn.EuroTaxHandler = function (options) {
        return this.each(function () {
            $(this).data('EuroTaxHandler') || $(this).data('EuroTaxHandler', new EuroTaxHandler(this, options));
        });
    };
})(_, jQuery);
