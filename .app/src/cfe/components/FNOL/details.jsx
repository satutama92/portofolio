<div>
  {this.props.form}
  {(this.state.files.length !== Number(this.config.maxFnolFiles)) &&
    <this.Dropzone onDrop={this.handleDrop} className='dropzone' activeClassName='dropzone-active'>
      <div><this.FormattedMessage {...this.messages.fnolDropFile} /></div>
      { this.state.maxFilesError ? <span className='error-message'><this.FormattedMessage {...this.messages.maxFileAmount}
        values={{maxFiles: this.config.maxFnolFiles}}/></span> : null }
        { this.state.filesWithErrors.map(f => <div className='error-message'><this.FormattedMessage {...this.messages.maxFileSizeAmount}
          values={{fileName: f.name, maxFileSizeMB: this.config.maxFileSize / 1024 / 1024}}/></div>) }
        { this.state.filesWithFailedUploadErrors.map(f => <div className='error-message'><this.FormattedMessage {...this.messages.fileUploadError}/></div>) }
    </this.Dropzone>
  }
  { this.state.files.length > 0 &&
    <div className="m-list-documents dropzone-list" data-t-name="ListDocuments">
      <ul className="list-unstyled">
        {this.state.files.map(f => <li className="m-list-documents__item"> <span className="glyphicon glyphicon-file"></span> {f.name} <span onClick={() => this.removeFile(f.preview)} className='glyphicon glyphicon-remove'></span></li>)}
      </ul>
    </div>
  }
  <this.BooleanInput
    name='confirmationForFnol'
    callback={this.handleChangeConfirmation}
    label={this.props.intl.formatMessage(this.messages.confirm)}/>
  <this.LoadingButton className='btn btn-primary' onClick={this.props.submit} message={this.messages.submitButtonLabel} isLoading={this.props.isSavingFnol} disabled={this.state.isSubmitDisabled || this.props.isSavingFnol}>
    <i className='glyphicon glyphicon-send'/>
  </this.LoadingButton>

</div>
