<div className={'form-group no-padding' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '')}>
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
            { cfeOptions.defaultLocale === 'en_CH'
              ? <button type="button" className="btn-border" data-dismiss="modal"> Close </button>
              : <button type="button" className="btn-border" data-dismiss="modal"> Schliessen </button>
            }
          </div>
        </div>
      </div>
    </div>
    : null }

  <label htmlFor={this.question.id} className={this.helpText ? 'btn-help' : null} data-toggle={this.helpText ? 'modal' : null} data-target={this.helpText ? '#'+this.question.id : null}>
    {this.question.questionText}
    {this.question.isMandatory && <span>*</span>}
    {this.helpText
      ? <span className='glyphicon glyphicon-info-sign btn-help'/>
      : null}
  </label>

  <div className='radio-horizontal'>
    { this.question.items.map(function(q, i) {
        if(q.key !== 'null' && q.key !== '') {
          var isDefaultChecked = ( q.key === this.input.value ) || (this.question.isMandatory && this.props.disabled )

          return 	<label className={'btn-radio'+(q.key === this.input.value? ' active': '')+(this.props.disabled||q.key === '_' ? ' disabled': '')} htmlFor={this.question.id+'_'+q.value.replace(/ /g, "_")}>
            {q.value}
            <input
              id={this.question.id+'_'+q.value.replace(/ /g, "_")} type="radio" name={this.input.name} value={q.key}
              onChange={this.onChange} onBlur={this.input.onBlur} onFocus={this.input.onFocus} defaultChecked={ isDefaultChecked ? 'checked' : ''}
              disabled={this.props.disabled || q.key === '_' ? 'disabled' : null}
            />
          </label>
        }
      }, this)
    }
  </div>
  {this.error && <span className='help-block'>{this.error}</span>}
</div>
