<div>
  {!(this.props.isLoadingContractDetails || this.props.isLoadingContractEditDetails) && this.contractDetails
    ? <div>
      {!this.contractDetails.isEditAllowed && <p>{this.formatMessage(this.messages.editNotAllowed)}</p>}
      <button onClick={this.handleClickEdit} className='btn btn-primary' disabled={!this.contractDetails.isEditAllowed}>
        {!this.state.isEditingContract ? this.formatMessage(this.messages.edit) : this.formatMessage(this.messages.cancelEdit)}
      </button>
      {this.contractDetails.conversionMessage && this.state.isEditingContract &&
      <p>{this.contractDetails.conversionMessage}</p>}
      {this.props.validation && <div>{this.props.validation.map((e, i) => <div key={i}> { e.message } </div>)}</div>}
      <this.PaymentMethod {...this.props.paymentMethodDetails}
                          readOnly={!this.isEditingContract}
                          formName={'contractPaymentDetails'}
      />
      <this.Contract {...this.formParams}/>
      {this.state.isEditingContract ?
        this.props.isLoadingCalculation
          ? <this.Loader />
          : <this.CalculationResult calculation={this.props.calculation}/>
        : <this.CalculationResult calculation={this.contractDetails}/>
      }
    </div>
    : <this.Loader />
  }
</div>
