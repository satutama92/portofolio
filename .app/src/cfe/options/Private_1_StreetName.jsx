<div className={'form-group streetname' + (this.error ? ' has-error' : '') + (this.props.disabled ? ' disabled' : '')}>
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

  <label htmlFor={this.question.id} className={this.helpText ? 'btn-help' : null} data-toggle={this.helpText ? 'modal' : null} data-target={'#'+this.question.id}>
    {this.question.questionText}
    {this.question.isMandatory && <span>*</span>}
    {this.helpText
      ? <span className='glyphicon glyphicon-info-sign btn-help'/>
      : null}
  </label>

  <input id={this.question.id}
         name={this.question.id}
         value={this.input.value}
         placeholder={this.question.questionText}
         disabled={this.disabled}
         onChange={this.props.onChange}
         onKeyUp={this.props.onKeyUp}
         onBlur={this.input.onBlur}
         onFocus={this.input.onFocus}
         className="form-control"
         type="text"
  />
  {this.error && <span className='help-block'>{this.error}</span>}
</div>
