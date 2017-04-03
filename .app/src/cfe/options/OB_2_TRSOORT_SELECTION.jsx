<div className={'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '')}>
	<label htmlFor={this.question.id}>
		{this.question.questionText}
		{this.question.isMandatory && <span>*</span>}
	</label>

	<div className="radio-vertical">
  	{this.question.items.map(function(q, i){
  			if(q.key !== 'null' && q.key !== ''){
  				var isDefaultChecked = ( q.key === this.input.value ) || (this.question.isMandatory && this.props.disabled )
  				return 	<label className={'btn-radio'+(q.key === this.input.value ? ' active': '')+(this.props.disabled||q.key === '_' ? ' disabled': '')} htmlFor={this.question.id+'_'+q.value.replace(/ /g, "_")}>
  									{q.value}
  									<input
  										id={this.question.id+'_'+q.value.replace(/ /g, "_")} type="radio" name={this.input.name} value={q.key}
  										onChange={this.onChange} onBlur={this.input.onBlur} onFocus={this.input.onFocus} checked={ isDefaultChecked ? 'checked' : ''}
  										disabled={this.props.disabled || q.key === '_' ? 'disabled' : null}
  									/>
  								</label>
  			}
    	}, this)}
	</div>

  {this.helpText
	? <span className="help-block">
		  <div dangerouslySetInnerHTML={this.helpText}/>
    </span>
	: null }

	{this.error && <span className='help-block'>{this.error}</span>}
</div>
