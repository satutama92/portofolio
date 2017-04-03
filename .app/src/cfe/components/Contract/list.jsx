<div className="dossier-overview">
  <div className='clearfix'></div>
  <div className="checkbox">
    <input id="contract-visibility" onChange={this.changeContractTypeVisiblity} type='checkbox'></input>
    <label htmlFor="contract-visibility">{this.formatMessage(this.messages.inactiveContractsSwitchMessage)}</label>
  </div>
  { this.contractsToDisplay.length > 0
    ? <div className="cfe-contracts">
        {this.contractsToDisplay.map((contract) => {
          const isCurrentRowExpanded = this.state.openedContractNumber === contract.contractNr;

          return [
            <div className="space--xl">
              <div className={contract.isActive ? "m-contract m-contract--bg-blue m-contract--line-blue" : "m-contract m-contract--bg-grey m-contract--line-grey"}  data-t-name="Contract">
                <div className="m-contract__container">
                  <div className="m-contract-headline" data-t-name="ContractHeadline">
                    <h3 className="m-contract-headline__title">{contract.productName}</h3>
                    <p className="m-contract-headline__police"><span className="m-contract-headline__police-number">{this.formatMessage(this.messages.contractNumber)}</span> {contract.contractNr}</p>
                  </div>

                  <p className="small">
                    {this.formatMessage(this.messages.contractStartDate)}: &nbsp;
                    {this.util.formatDate(contract.dateStart)}
                    {contract.isTerminationDateInTheFuture &&
                      <this.Tooltip  id={contract.contractNr + 'futureTermination'} title={this.formatMessage(this.messages.contractHasTerminationDateInTheFutureMessage)}>
                        <span className='glyphicon glyphicon-alert'/>
                      </this.Tooltip >
                    }.&nbsp;

                    {!contract.isTerminationDateNotSpecified && this.formatMessage(this.messages.contractTerminationDate)+': '}
                    {!contract.isTerminationDateNotSpecified && this.util.formatDate(contract.dateTerminated)}
                  </p>

                  <div className="m-contract__button-container">
                    <div className="m-calltoaction" data-t-name="Calltoaction">

                      <div className="m-calltoaction__primary">
                        <div className="a-button" data-t-name="Button">
                          {contract.isActive &&
                            <button onClick={() => this.props.handleClickView(contract)}
                              className="btn btn-primary" data-t-name="Button">
                            {language.get().menu.contractDetails.title}
                          </button>}
                        </div>
                      </div>

                      <div className="m-calltoaction__primary">
                        {contract.isActive && <a href="#" className="link a-link link--option tertiary" onClick={() => this.props.handleClickRemove(contract)} data-t-name="Link" data-t-id="15">
                          {language.get().buttons.cancelContract}
                        </a>}
                      </div>

                    </div>
                  </div>

                </div>
              </div>
              <this.ContractVersionsList contractVersions={contract.contractVersions}/>
            </div>];
        })}
    </div>
    : <div className="message"> {this.formatMessage(this.messages.noContractsMessage)} </div>
  }
</div>
