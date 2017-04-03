<div className="m-contract m-contract--box m-contract--bg-blue m-contract--line-orange-light" data-t-name="Contract">
  <div className="m-contract__container">

    {this.props.contractVersions && this.props.contractVersions.map((contract) => {
      return <div key={contract.contractId}>
        <div className="m-contract-headline m-contract-headline--line-grey" data-t-name="ContractHeadline">
          <p className="m-contract-headline__date">
            <span className="m-contract-headline__date-title">
              <this.FormattedMessage {...this.messages.contractActivationDate} /> &nbsp;
            </span>
            {this.util.formatDate(contract.dateActive)}
          </p>
          <p className="m-contract-headline__police">
            <span className="m-contract-headline__police-number">
              <this.FormattedMessage {...this.messages.contractVersionNumber} /> #
            </span>
            {contract.contractId}
          </p>
        </div>

        <div className="m-contract__link-container">
          {contract.dateInactive === this.constants.noEndDateValue
            ? null
            : <span><this.FormattedMessage {...this.messages.contractDateInactive} /> {this.util.formatDate(contract.dateTerminated)} </span> }
        </div>
      </div>;
    })}

  </div>
</div>