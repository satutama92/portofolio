<div className={'form-group no-padding' + (this.error ? ' has-error' : '')}>
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
