<div>
    {{
        eurotax: (
<div className="eurotax-step">
  <div id={'eurotax-modal-'+this.props.step.stepIndex} className="modal fade eurotax-modal"
       data-stepIndex={this.props.step.stepIndex} tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <div className="button-previous"
            disabled={!this.props.step.activeQuestionIndex}
            onClick={() => this.props.goToPreviousQuestion(this.stepKey)}>
            <span className="glyphicon glyphicon-chevron-left"></span>
          </div>
          <h3 id="eurotax-back">{language.get().menu.contractDetails.content.car}</h3>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close">
          </button>
        </div>
        <div className="modal-body">
          <this.Product
            {...this.props.product}
            hideSubmitButton
            shouldSubmitWhenValid={this.props.step.shouldSubmitWhenValid}
            formName={this.dynamicFormTypes.calculation}
            formComponent={this.props.step.formComponent}
            stepKey={this.props.step.stepKey}
            options={this.options}
            answers={this.props.calculationAnswers}
            handleSubmit={this.handleCalculation}/>
        </div>
      </div>
    </div>
  </div>
  { _.isEmpty(this.state.eurotaxData)
    ? <div className="eurotax-open">
        <p>Wählen sie bitte Ihr Fahrzeug</p>
        <div className="form-group form-group-select" data-toggle="modal" data-target={'#eurotax-modal-'+this.props.step.stepIndex}>
          <input type="text" className="eurotax-start form-control form-select" placeholder="Wähle eins"/>
          <div className="select-chevron"></div>
        </div>
      </div>
    : <div className="eurotax-card form-group">
        <div className="euro-class">
          {this.state.eurotaxData && this.state.eurotaxData.map((d, i) =>
            <div className="euro-group" key={i}>
              <span className="euro-value">{d.value}</span>
              <span className="euro-label">{d.label}</span>
            </div>
          )}
        </div>
        <a className="eurotax-reset tertiary">Auswahl ändern</a>
    </div>}
</div>
),
default: (
    <div>
        <this.Product
            {...this.props.product}
            hideSubmitButton
            shouldSubmitWhenValid={this.props.step.shouldSubmitWhenValid}
            formName='productCalculation'
            options={this.options}
            answers={this.props.calculationAnswers}
            handleSubmit={this.handleCalculation}
            stepKey={this.props.step.stepKey}
            formComponent={this.props.step.formComponent}/>
        {this.props.step.isLastStepOfType
            ? <div className="stepper-nav">
                <this.LoadingButton className="btn btn-primary" onClick={this.handleGoToCustomerDataStep} message={this.localMessages.submitButtonLabel} isLoading={this.props.isLoading} disabled={!this.canContinueAfterCalculationStep}>
                  <i className='glyphicon glyphicon-send'/>
                </this.LoadingButton>
              </div>
            : <div className="stepper-nav">
                <button className={this.props.step.stepIndex === 0 && cfeOptions.productConfig.id === 104571 ? 'hidden' : 'btn btn-primary'}
                        type='submit' disabled={!this.props.step.isValid}
                        onClick={this.nextStep}>{language.get().buttons.next}</button>
              </div>}
    </div>
)
}[this.props.step.stepKey]}
</div>
