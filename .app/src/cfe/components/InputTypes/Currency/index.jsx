<div className={'form-group ' + (this.error ? ' has-error' : '') + (this.disabled ? ' disabled' : '')}>
	{this.helpText
	? <div className="modal fade" id={this.question.id} tabindex="-1" role="dialog" aria-labelledby={this.question.id}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<div dangerouslySetInnerHTML={this.helpText}/>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn-border" data-dismiss="modal"> {language.get().buttons.close} </button>
					</div>
				</div>
			</div>
		</div>
	: null }

	<label htmlFor={this.question.id} className={this.helpText ? 'btn-help' : null} data-toggle={this.helpText ? 'modal' : null} data-target={'#'+this.question.id}>
		{this.question.questionText}
		{this.question.isMandatory && <span>*</span>}
		{this.helpText
		? <span className='glyphicon glyphicon-info-sign btn-help'/>
		: null}
	</label>

  <div className='input-group'>
    <span className='input-group-addon'>
      {language.get().currency}
    </span>
  	{this.field}
  </div>
	{this.error && <span className='help-block'>{this.error}</span>}
</div>
