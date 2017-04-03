<div>
  {this.summaryLists.map((list, i) =>
    <div className="table" key={i}>
      <table>
        <thead>
          <tr>
            <th>{list.heading}</th>
          </tr>
        </thead>
        <tbody>
        {list.summary.map((item, j) =>
          <tr key={j}>
            <td>{item.key} &nbsp;</td>
            <td>{item.value}</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )}
  <div className='checkbox'>
    <input id="check-confirmation-statement" type='checkbox' onChange={this.handleChange}/>
    <label htmlFor="check-confirmation-statement">
      <this.FormattedHTMLMessage {...this.messages.confirmationStatement} values={{
          link: this.confirmationStatementUrl
        }} />
    </label>
  </div>
  <this.LoadingButton className="btn btn-primary" onClick={this.props.handleSubmit} disabled={this.state.disabled} message={this.localMessages.submitButtonLabel} >
    <i className='glyphicon glyphicon-send'/>
  </this.LoadingButton>
</div>
