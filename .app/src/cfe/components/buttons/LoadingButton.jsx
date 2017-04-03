<div className='stepper-nav'>
  <button className={this.props.className+' next'} type='submit' onClick={this.props.onClick}
          disabled={this.props.disabled || this.props.isLoading}>
    <this.FormattedMessage {...this.props.message}/>
    {this.props.isLoading &&
      <i className="fa fa-spinner fa-spin" aria-hidden="true"/>
    }
  </button>
</div>
