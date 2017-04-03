<div className="dossier-overview">
  {this.state && this.state.sortedCalculations && this.state.sortedCalculations.map((calculations, i) =>
  <div className="space--xl" key={i}>
    <div className="m-contract m-contract--bg-blue m-contract--line-blue" data-t-name="Payment">
      <div className="m-contract__container">
        <div className="m-contract-headline" data-t-name="ContractHeadline">
          <h3 className="m-contract-headline__title">{Object.keys(calculations)[i]}</h3>
        </div>
      </div>
    </div>

    <div className="m-contract m-contract--box m-contract--bg-blue m-contract--line-orange-light" data-t-name="Contract">
      <div className="m-contract__container">
        {calculations[Object.keys(calculations)[i]].map((calculation, j) =>
        <div key={j} className="m-contract-headline m-contract-headline--line-grey" data-t-name="ContractHeadline">
          <p className="m-contract-headline__date action" onClick={() => this.props.handleResumeCalculation(calculation)}>
            <span className="m-contract-headline__date-title">
              <this.FormattedMessage {...this.messages.dateCreated}/>&nbsp;
            </span>
            {this.util.formatDate(calculation.dateCreated)}
          </p>
          <p className="m-contract-headline__police">
            <span onClick={() => this.props.handleResumeCalculation(calculation)} className='glyphicon calc-open glyphicon-eye-open' />
            <span onClick={() => this.props.handleClickRemove(calculation)} className='glyphicon calc-delete glyphicon-remove'/>
          </p>
        </div>)}
      </div>
    </div>
  </div>)}
</div>
