<div className="m-list-documents" data-t-name="ListDocuments">
  <ul className='list-unstyled'>
    {this.sortedDocuments.map(document => {
      return (
        <li className="m-list-documents__item" key={document.id} onClick={() => this.props.handleOpenDocument(document)}>
          <div className="m-list-documents__date date">
            {document.type}: &nbsp;
            {this.util.formatDate(document.dateCreated)}
          </div>
          <a className="m-list-documents__link m-list-documents__link--new" href="#detail" onClick={() => this.props.handleOpenDocument(document)}>
            <span className="glyphicon glyphicon-file"></span> {document.name}
          </a>
        </li>);
    })}
  </ul>
</div>
