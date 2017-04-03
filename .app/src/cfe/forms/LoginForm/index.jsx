<div>
  {!this.props.user &&
  <div>
    <h3>{language.get().account.login}</h3>
    {this.props.loginError && <span>{this.props.loginError}</span>}
    <form onSubmit={this.props.handleSubmit(input => this.handleSubmit(input))}>
      <div className={this.c('form-group', this.props.fields.email.error && 'has-error')}>
        <this.Field id='email-login' name='email' component='input' type='email' className='form-control'
                    placeholder={this.props.intl.formatMessage(this.messages.emailAddress)}/>
        {this.props.fields.email.error && <p className='help-block'>{this.props.fields.email.error}</p>}
      </div>
      <div className={this.c('form-group', this.props.fields.password.error && 'has-error')}>
        <this.Field id='password-login' name='password' component='input' type='password' className='form-control'
                    placeholder={this.props.intl.formatMessage(this.messages.password)}/>
        {this.props.fields.password.error && <p className='help-block'>{this.props.fields.password.error}</p>}
      </div>
      <div className={this.c('form-group', this.props.userHasSmsAuthenticationForLogin ? 'show' : 'hidden', this.props.fields.smsCode.error && 'has-error')}>
        <this.Field id='sms-code-login' name='smsCode' component='input' type='text' className='form-control'
                    placeholder={this.props.intl.formatMessage(this.messages.smsCode)}/>
        {this.props.fields.smsCode.error && <p className='help-block'>{this.props.fields.smsCode.error}</p>}
      </div>
      <this.LoadingButton className='btn btn-primary' message={this.props.userHasSmsAuthenticationForLogin ? this.messages.submitSmsCode : this.messages.submitLogin}
                          isLoading={this.props.isLoginLoading} disabled={this.props.invalid}>
        <i className='glyphicon glyphicon-send'/>
      </this.LoadingButton>
      {this.props.stsSettings && this.props.stsSettings.ExternalProviders && this.props.stsSettings.ExternalProviders
        .map((s, i) => <button key={i} className='btn btn-default'
                               onClick={() => {
                                 this.openIdProvider(s)
                               }}>
          {s.Caption}
        </button>)
      }
    </form>
  </div>
  }
</div>
