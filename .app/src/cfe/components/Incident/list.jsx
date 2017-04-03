<div className="dossier-overview">
  <div className="cfe-contracts">
    {this.state && this.state.sortedIncidents && this.state.sortedIncidents.map((contract, i) =>
      <div className="space--xl" key={i}>
        <div className={contract.active ? "m-contract m-contract--bg-blue m-contract--line-blue" : "m-contract m-contract--bg-grey m-contract--line-grey"} data-t-name="Contract">
          <div className="m-contract__container">
            <div className="m-contract-headline" data-t-name="ContractHeadline">
              <h3 className="m-contract-headline__title">{contract[0].insuranceDescription}</h3>
              <p className="m-contract-headline__police"><span className="m-contract-headline__police-number"><this.FormattedMessage {...this.messages.contractNumber}/></span> {contract[0].contractId}</p>
            </div>
          </div>
        </div>

        {contract.map((incident, j) =>
        <div className={contract.active ? 'm-contract m-contract--box m-contract--bg-blue m-contract--line-orange' : 'm-contract m-contract--box m-contract--bg-grey m-contract--line-grey'}
             onClick={() => this.props.handleClickRow(incident)} key={j}>
          <div className="m-contract__container">
            <div className="m-contract-headline m-contract-headline--line-grey" data-t-name="ContractHeadline">
              <p className="m-contract-headline__date">
                <span className="m-contract-headline__date-title">
                  <this.FormattedMessage {...this.messages.incidentDate} /> &nbsp;
                </span>
                {this.util.formatDate(incident.dateIncident)}
              </p>
              <p className="m-contract-headline__police">
                <span className="m-contract-headline__police-number">
                  <this.FormattedMessage {...this.messages.incidentReportDate}/> &nbsp;
                </span>
                {this.util.formatDate(incident.dateNotification)}
              </p>
            </div>

            <ul className="m-tracking-icons" data-t-name="TrackingIcons">
              <li className={
                `m-tracking-icons__item m-tracking-icons__item--active
                 ${incident.state === 'InProgressAtExpert' ? 'm-tracking-icons__item--text' : ''}`
              }>
                <span className="m-tracking-icons__arrow glyphicon glyphicon-chevron-right"></span>
                <span className="m-tracking-icons__icon glyphicon glyphicon-comment"></span>
                {incident.state === 'InProgressAtExpert'
                  ? <p className="m-tracking-icons__text">{language.get().incident.state.InProgressAtExpert}</p>
                  : null}
              </li>
              <li className={
                `m-tracking-icons__item
                ${incident.state === 'ForControlAtDIV' ? 'm-tracking-icons__item--text ' : ''}
                ${incident.state === 'ForControlAtDIV' || incident.state === 'Finished' ? 'm-tracking-icons__item--active' : ''}`
              }>
                <span className="m-tracking-icons__arrow glyphicon glyphicon-chevron-right"></span>
                <span className="m-tracking-icons__icon glyphicon glyphicon-hourglass"></span>
                {incident.state === 'ForControlAtDIV'
                  ? <p className="m-tracking-icons__text">{language.get().incident.state.ForControlAtDIV}</p>
                  : null}
              </li>
              <li className={
                `m-tracking-icons__item
                ${incident.state === 'Finished' ? 'm-tracking-icons__item--text m-tracking-icons__item--active' : ''}`
              }>
                <span className="m-tracking-icons__arrow glyphicon glyphicon-chevron-right"></span>
                <span className="m-tracking-icons__icon glyphicon glyphicon-flag"></span>
                {incident.state === 'Finished'
                  ? <p className="m-tracking-icons__text">{language.get().incident.state.Finished}</p>
                  : null}
              </li>
            </ul>
          </div>
        </div>)}
      </div>
    )}
  </div>
</div>
