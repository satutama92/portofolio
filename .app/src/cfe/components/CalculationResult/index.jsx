<div className="footer-quote">
	<div className="progress">
		<div className="progress-bar done" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '0%'}}></div>
		<div className="progress-bar next progress-bar-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}></div>
	</div>

	{this.props.calculation.paymentIntervalPremium
		? <div className="cfe-tax-wrapper">
				<div className='cfe-premium-before'>
					<this.FormattedMessage {...this.messages.amountBeforeTax} />:&nbsp;
					<this.FormattedNumber
						value={Math.round(this.props.calculation.paymentIntervalPremium.amountBeforeTax * 100) / 100}
						style='currency'
						currency='EUR'/>
				</div>
				<div className='cfe-premium-tax'>
					<this.FormattedMessage {...this.messages.tax} />:&nbsp;
					<this.FormattedNumber
						value={Math.round(this.props.calculation.paymentIntervalPremium.tax * 100) / 100}
						style='currency'
						currency='EUR'/>
				</div>
			</div>
		: null}

	<div className='cfe-premium-wrapper'>
		{this.props.calculation.paymentIntervalPremium
			? <div className='cfe-premium'>
					<span className="total-price">
						<span className="currency">{language.get().currency} </span>
						{ parseFloat(Math.round(this.props.calculation.paymentIntervalPremium.amountAfterTax * 100) / 100).toFixed(2) }
					</span>
				</div>
			: <this.FormattedMessage {...this.messages.yourPremium} />}
	</div>
</div>
