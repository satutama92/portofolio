<div className='checkbox'>
	<input id={this.props.name} type='checkbox' checked={this.state.isChecked} name={this.props.name} onChange={this.handleChange} />
  <label htmlFor={this.props.name}>
    {this.props.label}
  </label>
</div>
