<div>
  <this.Customer {...this.props.customer}
    readOnly={this.state.readOnly}
    formName={this.dynamicFormTypes.customerEdit}
    handleSubmit={this.handleSubmitCustomer}/>
    <button onClick={this.handleClickEditCustomer} className='btn edit btn-primary'>
      {this.state.readOnly ? this.formatMessage(this.messages.edit) : this.formatMessage(this.messages.cancelEdit) }
    </button>
</div>
