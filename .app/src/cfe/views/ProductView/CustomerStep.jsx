<div>
  {this.user
    ? <this.Customer {...this.customerProps} />
    : <div>
      <div className='section-login'>
        <this.LoginForm />
      </div>
      <div className='section-register'>
        <this.RegisterForm />
      </div>
    </div>
  }
</div>
