<div className='cfe-account'>
	{this.props.user
		? <div className="logged-in-list">
				<div className="col-sm-4 col-sm-offset-2">
					<h3>
						{ language.get().menu.welcome.title }
						{ ' '+this.props.customer.getFullName() }
					</h3>
					<ul>
						<li>
							<a href={ language.get().menu.customer.link }>
                { language.get().menu.customer.title }
							</a>
						</li>
						<li>
							<a href={ language.get().menu.incidents.link }>
                { language.get().menu.incidents.title }
							</a>
						</li>
						<li>
							<a href={ language.get().menu.payment.link }>
                { language.get().menu.payment.title }
							</a>
						</li>
						<li>
							<a href={ language.get().menu.contracts.link }>
                { language.get().menu.contracts.title }
							</a>
						</li>
            <li>
              <a href={ language.get().menu.calculations.link }>
                { language.get().menu.calculations.title }
              </a>
            </li>
            {/*<li>
              <a href={ language.get().menu.emails.link }>
                { language.get().menu.emails.title }
              </a>
            </li>*/}
						<li>
							<a href={ language.get().menu.documents.link }>
                { language.get().menu.documents.title }
							</a>
						</li>
						<li>
							<a href="/" onClick={this.logout.bind(this)}>
								Logout
							</a>
						</li>
					</ul>
				</div>
				<div className="col-sm-4">
					{ cfeOptions.locale === "en_CH"
						?	<form>
								<h3 className="title-section">Report damage</h3>
								<p>When did the incident take place?</p>
								<div className="form-group datepicker">
									<input type="text" placeholder="Select date" />
									<span className='glyphicon glyphicon-calendar'></span>
								</div>
								<div className="form-group">
									<select disabled="disabled">
										<option>Select insurance</option>
									</select>
									<span className='select-chevron'></span>
								</div>
								<div className="btn">Continue</div>
							</form>
						: <form>
								<h3 className="title-section">Schaden melden</h3>
								<p>Wann ist Ihr Schaden eingetreten?</p>
								<div className="form-group datepicker">
									<input type="text" placeholder="Datum wählen" />
									<span className='glyphicon glyphicon-calendar'></span>
								</div>
								<div className="form-group">
									<select disabled="disabled">
										<option>Versicherung wählen</option>
									</select>
									<span className='select-chevron'></span>
								</div>
								<div className="btn">Meldung aufnehmen</div>
							</form>
					}
				</div>
			</div>
		: null
	}
</div>
