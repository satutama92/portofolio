<div>
  {!(this.props.isLoadingContractDetails || this.props.isLoadingContractEditDetails) && this.contractDetails && this.props.contractToLoad
    ?<div className="contract-detail-list">

      {!this.contractDetails.isEditAllowed && <p>{this.formatMessage(this.messages.editNotAllowed)}</p>}
      {this.contractDetails.conversionMessage && this.state.isEditingContract &&
      <p>{this.contractDetails.conversionMessage}</p>}
      {this.props.validation && <div>{this.props.validation.map((e, i) => <div key={i}> { e.message } </div>)}</div>}

      <div className="m-contract-headline space--l" data-t-name="ContractHeadline">
        <h3 className="m-contract-headline__title">{this.props.contractToLoad.productName}</h3>
        <p className="m-contract-headline__police">
          <span className="m-contract-headline__police-number"># </span>
          {this.props.contractToLoad.currentActiveContractId}
        </p>
      </div>

      {this.state.customer && <div>
        <h2 className="title-section highlight"> {language.get().menu.contractDetails.content.customer} </h2>
        <ul className="m-personal-data list-unstyled" data-t-name="PersonalData">
          <li className="m-personal-data__group-item">
            <ul className="list-unstyled">
              <li className="m-personal-data__item">
                <p className="m-personal-data__value">
                  { this.state.customer.name() }
                </p>
              </li>
              <li className="m-personal-data__item">
                <p className="m-personal-data__value">
                  { this.state.customer.street() }
                </p>
              </li>
              <li className="m-personal-data__item">
                <p className="m-personal-data__value">
                  { this.state.customer.address() }
                </p>
              </li>
              <li className="m-personal-data__item">
                <p className="m-personal-data__value">
                  { this.state.customer.TelephoneNumber }
                </p>
              </li>
              <li className="m-personal-data__item">
                <p className="m-personal-data__value">
                  { this.state.customer.Email }
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <hr />
        <div className="lead">
          <a href={language.get().menu.customer.link} className="tertiary" data-t-name="Link">
            {language.get().buttons.edit}
          </a>
        </div>
      </div>}

      {this.props.contractDetails && <div>
        <h2 className="title-section highlight"> {language.get().menu.contractDetails.content.contract} </h2>
        <ul className="m-personal-data list-unstyled" data-t-name="PersonalData">
          <li className="m-personal-data__group-item">
            <ul className="list-unstyled">
              {this.props.contractDetails.options && this.props.contractDetails.options.map((q, i) =>
                <li className="m-personal-data__item" key={i}>
                  {q.isMandatory && q.isRelevant && q.optionUses[0] === 'Calculation' &&
                   q.questionText && (q.value !== "" && q.value !== null && q.value !== '-')
                   && q.id !== "Contract_1_PaymentInterval" &&
                    <p className="m-personal-data__value">
                      {q.questionText}&nbsp;
                      <span className="value">{q.value}</span>
                    </p>
                  }
                </li>
              )}
            </ul>
          </li>
        </ul>
        <hr />
        <div className="lead">
          <a href="#" className="tertiary" data-t-name="Link" onClick={this.handleClickEdit} disabled={!this.contractDetails.isEditAllowed}>
            {!this.state.isEditingContract ? this.formatMessage(this.messages.edit) : this.formatMessage(this.messages.cancelEdit)}
          </a>
        </div>
      </div>}

      {this.props.contractDetails && this.props.paymentMethodDetails && this.props.contractDetails.paymentIntervalPremium && <div>
        <h2 className="title-section highlight"> {language.get().menu.contractDetails.content.payment} </h2>
        <div className="m-payment-detail" data-t-name="ListPaymentDetail">
          <div className="lead">
            {
              // Really, really stupid work around to get the right value fot the payment interval...
              _.find(this.props.contractDetails.options, {id: 'Contract_1_PaymentInterval'}).items[parseInt(_.find(this.props.contractDetails.options, {id: 'Contract_1_PaymentInterval'}).value)-1].value
            }: <strong>CHF {this.props.contractDetails.paymentIntervalPremium.amountAfterTax}</strong>
          </div>
          <div className="list">
        		<ul className="list-unstyled">
        			<li>{this.props.paymentMethodDetails.type.name}</li>
              <li>{this.props.paymentMethodDetails.options[0].value}</li>
        		</ul>
        	</div>
        </div>
        <hr />
        <div className="lead">
          <a href={language.get().menu.payment.link} className="tertiary" data-t-name="Link">
            {language.get().buttons.edit}
          </a>
        </div>
      </div>}
  </div>
:<this.Loader />}
</div>
