<div className="checkbox">
	{this.field}
	<label htmlFor={this.question.id}>
		{this.question.questionText}{this.question.isMandatory && <span>*</span>}
	</label>
</div>