<div className="dossier-overview">
  <div className="cfe-payments">
    { this.props.customerPaymentMethods && this.props.customerPaymentMethods.length > 0 && this.props.customerPaymentMethods.map((paymentMethod, i) =>
      <div className="space--xl" key={i}>
        <div className="m-contract m-contract--bg-blue m-contract--line-blue" data-t-name="Payment">
          <div className="m-contract__container">
            <div className="m-contract-headline" data-t-name="ContractHeadline">
              <h3 className="m-contract-headline__title">{paymentMethod.type.name}</h3>
              <p className="m-contract-headline__police"><span className="m-contract-headline__police-number">{paymentMethod.options[0].value}</span></p>
            </div>

            <p className="small">
              <this.FormattedMessage {...this.messages.number} />: &nbsp;
              {paymentMethod.options[0].value}
            </p>

            <div className="m-contract__button-container">
              <div className="m-calltoaction" data-t-name="Calltoaction">

                <div className="m-calltoaction__primary">
                  <div className="a-button" data-t-name="Button">
                    <a href="#" onClick={() => this.handleClickRow(paymentMethod)} className="btn btn-primary" data-t-name="Button" role="button">
                      <span>{language.get().buttons.edit}</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>)
    }

    <h2> <this.FormattedMessage {...this.messages.addPaymentMethod} /> </h2>

    <div className="space--xl">
      <this.PaymentMethodCreator
        paymentMethodTemplates={this.props.paymentMethodTemplates}
        handleSubmit={this.handleCreatePaymentMethod} />
    </div>

    <this.Modal
      title={this.state.activePaymentMethod.type.name}
      open={this.state.isDetailsModalOpen}
      closeCallback={this.closeModals}
      id='create-payment-detail-modal'>
      <div className='modal-body'>
        <this.PaymentMethod {...this.state.activePaymentMethod}
                            handleSubmit={this.handleEditPaymentMethod}
                            enableReinitialize
                            formName='payment-method-edit' />
      </div>
    </this.Modal>
  </div>
</div>
