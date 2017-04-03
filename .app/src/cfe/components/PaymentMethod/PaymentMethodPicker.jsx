<div>
  <div className='form-group no-padding'>
    <select value={this.props.selectedPaymentMethodId} className='form-control payment-method-picker-payment-methods'
            onChange={this.selectedPaymentMethodChanged}>
      <option value='0'>{this.formatMessage(this.messages.selectPaymentMethodLabel)}</option>
      {(this.props.customerPaymentMethods || []).map((m, i) => {
        return <option key={i} value={m.id}>{m.type.name} {m.options[0] ? m.options[0].value : ''}</option>;
      })}
    </select>
  </div>
  <div className='form-group'>
    <a href="#" className='tertiary' onClick={this.handleAddPaymentMethod}>
      <this.FormattedMessage {...this.messages.createNewPaymentMethodMessage}/>
    </a>
  </div>
  <this.LoadingButton disabled={!this.props.selectedPaymentMethodId || this.props.selectedPaymentMethodId === '0'}
                      className="btn btn-primary"
                      isLoading={this.props.isSavingAndSigningContract} message={this.localMessages.submitButtonLabel}
                      onClick={() => this.props.handleSubmit(this.props.selectedPaymentMethodId)} >
    <i className='glyphicon glyphicon-send'/>
  </this.LoadingButton>
    <this.Modal
      title={this.formatMessage(this.messages.addPaymentMethodModalTitle)}
      open={this.state.isAddPaymentMethodModalOpen}
      closeCallback={this.closeModals}
      id='payment-method-picker-add-payment-method-modal'>
      <div className='modal-body'>
        <this.PaymentMethodCreator
          paymentMethodTemplates={this.props.paymentMethodTemplates}
          handleSubmit={this.handleCreatePaymentMethodWrapper}/>
      </div>
    </this.Modal>
</div>
