this["cfe"] = this["cfe"] || {};
this["cfe"]["options"] = this["cfe"]["options"] || {};
this["cfe"]["options"]["OB_1_AFMCC"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_1_AFMWE"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_1_BRANSTO_SELECTION"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_1_DATTOEL"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_1_EurotaxNumber"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_1_HorsePower"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_1_HorsePower_SELECTION"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_1_MERK"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_1_TRSOORT"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_1_TRSOORT_SELECTION"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_1_TYPE"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_1_TYPE_SELECTION"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_1_VWACA"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_1_ZITPLAA"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_2_AFMCC"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_2_AFMWE"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_2_BRANSTO_SELECTION"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_2_DATTOEL"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_2_EurotaxNumber"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_2_HorsePower"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_2_HorsePower_SELECTION"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_2_MERK"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_2_TRSOORT"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_2_TRSOORT_SELECTION"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_2_TYPE"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_2_TYPE_SELECTION"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_2_VWACA"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["OB_2_ZITPLAA"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  React.createElement(
    'label',
    { htmlFor: this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    )
  ),
  React.createElement(
    'div',
    { className: 'radio-vertical' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.helpText ? React.createElement(
    'span',
    { className: 'help-block' },
    React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
  ) : null,
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["Private_1_City"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
       'div',
       { className: 'form-group city' + (this.error ? ' has-error' : '') },
       React.createElement('input', { id: this.question.id,
              name: this.question.id,
              value: this.input.value,
              placeholder: this.question.questionText,
              disabled: this.disabled,
              onChange: this.props.onChange,
              onKeyUp: this.props.onKeyUp,
              onBlur: this.input.onBlur,
              onFocus: this.input.onFocus,
              className: 'form-control',
              type: 'text'
       }),
       this.error && React.createElement(
              'span',
              { className: 'help-block' },
              this.error
       )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["Private_1_FirstName"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
       'div',
       { className: 'form-group no-padding' + (this.error ? ' has-error' : '') },
       React.createElement('input', { id: this.question.id,
              name: this.question.id,
              value: this.input.value,
              placeholder: this.question.questionText,
              disabled: this.disabled,
              onChange: this.props.onChange,
              onKeyUp: this.props.onKeyUp,
              onBlur: this.input.onBlur,
              onFocus: this.input.onFocus,
              className: 'form-control',
              type: 'text'
       }),
       this.error && React.createElement(
              'span',
              { className: 'help-block' },
              this.error
       )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["Private_1_Gender"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group no-padding' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
  this.helpText ? React.createElement(
    'div',
    { className: 'modal fade', id: this.question.id, tabindex: '-1', role: 'dialog', 'aria-labelledby': this.question.id },
    React.createElement(
      'div',
      { className: 'modal-dialog', role: 'document' },
      React.createElement(
        'div',
        { className: 'modal-content' },
        React.createElement(
          'div',
          { className: 'modal-header' },
          React.createElement('button', { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' })
        ),
        React.createElement(
          'div',
          { className: 'modal-body' },
          React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
        ),
        React.createElement(
          'div',
          { className: 'modal-footer' },
          cfeOptions.defaultLocale === 'en_CH' ? React.createElement(
            'button',
            { type: 'button', className: 'btn-border', 'data-dismiss': 'modal' },
            ' Close '
          ) : React.createElement(
            'button',
            { type: 'button', className: 'btn-border', 'data-dismiss': 'modal' },
            ' Schliessen '
          )
        )
      )
    )
  ) : null,
  React.createElement(
    'label',
    { htmlFor: this.question.id, className: this.helpText ? 'btn-help' : null, 'data-toggle': this.helpText ? 'modal' : null, 'data-target': this.helpText ? '#' + this.question.id : null },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    ),
    this.helpText ? React.createElement('span', { className: 'glyphicon glyphicon-info-sign btn-help' }) : null
  ),
  React.createElement(
    'div',
    { className: 'radio-horizontal' },
    this.question.items.map(function (q, i) {
      if (q.key !== 'null' && q.key !== '') {
        var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;

        return React.createElement(
          'label',
          { className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
          q.value,
          React.createElement('input', {
            id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
            onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, defaultChecked: isDefaultChecked ? 'checked' : '',
            disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
          })
        );
      }
    }, this)
  ),
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["Private_1_HouseNumber"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
       'div',
       { className: 'form-group housenumber' + (this.error ? ' has-error' : '') },
       React.createElement('input', { id: this.question.id,
              name: this.question.id,
              value: this.input.value,
              placeholder: this.question.questionText,
              disabled: this.disabled,
              onChange: this.props.onChange,
              onKeyUp: this.props.onKeyUp,
              onBlur: this.input.onBlur,
              onFocus: this.input.onFocus,
              className: 'form-control',
              type: 'text'
       }),
       this.error && React.createElement(
              'span',
              { className: 'help-block' },
              this.error
       )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["Private_1_HouseNumberSuffix"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
       'div',
       { className: 'form-group housenumber-suffix' + (this.error ? ' has-error' : '') },
       React.createElement('input', { id: this.question.id,
              name: this.question.id,
              value: this.input.value,
              placeholder: this.question.questionText,
              disabled: this.disabled,
              onChange: this.props.onChange,
              onKeyUp: this.props.onKeyUp,
              onBlur: this.input.onBlur,
              onFocus: this.input.onFocus,
              className: 'form-control',
              type: 'text'
       }),
       this.error && React.createElement(
              'span',
              { className: 'help-block' },
              this.error
       )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["Private_1_Initials"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
       'div',
       { className: 'form-group no-padding' + (this.error ? ' has-error' : '') },
       React.createElement('input', { id: this.question.id,
              name: this.question.id,
              value: this.input.value,
              placeholder: this.question.questionText,
              disabled: this.disabled,
              onChange: this.props.onChange,
              onKeyUp: this.props.onKeyUp,
              onBlur: this.input.onBlur,
              onFocus: this.input.onFocus,
              className: 'form-control',
              type: 'text'
       }),
       this.error && React.createElement(
              'span',
              { className: 'help-block' },
              this.error
       )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["Private_1_LastName"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
       'div',
       { className: 'form-group spacer' + (this.error ? ' has-error' : '') },
       React.createElement('input', { id: this.question.id,
              name: this.question.id,
              value: this.input.value,
              placeholder: this.question.questionText,
              disabled: this.disabled,
              onChange: this.props.onChange,
              onKeyUp: this.props.onKeyUp,
              onBlur: this.input.onBlur,
              onFocus: this.input.onFocus,
              className: 'form-control',
              type: 'text'
       }),
       this.error && React.createElement(
              'span',
              { className: 'help-block' },
              this.error
       )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["Private_1_MiddleName"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
       'div',
       { className: 'form-group no-padding' + (this.error ? ' has-error' : '') },
       React.createElement('input', { id: this.question.id,
              name: this.question.id,
              value: this.input.value,
              placeholder: this.question.questionText,
              disabled: this.disabled,
              onChange: this.props.onChange,
              onKeyUp: this.props.onKeyUp,
              onBlur: this.input.onBlur,
              onFocus: this.input.onFocus,
              className: 'form-control',
              type: 'text'
       }),
       this.error && React.createElement(
              'span',
              { className: 'help-block' },
              this.error
       )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["Private_1_StreetName"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'form-group streetname' + (this.error ? ' has-error' : '') + (this.props.disabled ? ' disabled' : '') },
  this.helpText ? React.createElement(
    'div',
    { className: 'modal fade', id: this.question.id, tabindex: '-1', role: 'dialog', 'aria-labelledby': this.question.id },
    React.createElement(
      'div',
      { className: 'modal-dialog', role: 'document' },
      React.createElement(
        'div',
        { className: 'modal-content' },
        React.createElement(
          'div',
          { className: 'modal-header' },
          React.createElement('button', { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' })
        ),
        React.createElement(
          'div',
          { className: 'modal-body' },
          React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
        ),
        React.createElement(
          'div',
          { className: 'modal-footer' },
          cfeOptions.defaultLocale === 'en_CH' ? React.createElement(
            'button',
            { type: 'button', className: 'btn-border', 'data-dismiss': 'modal' },
            ' Close '
          ) : React.createElement(
            'button',
            { type: 'button', className: 'btn-border', 'data-dismiss': 'modal' },
            ' Schliessen '
          )
        )
      )
    )
  ) : null,
  React.createElement(
    'label',
    { htmlFor: this.question.id, className: this.helpText ? 'btn-help' : null, 'data-toggle': this.helpText ? 'modal' : null, 'data-target': '#' + this.question.id },
    this.question.questionText,
    this.question.isMandatory && React.createElement(
      'span',
      null,
      '*'
    ),
    this.helpText ? React.createElement('span', { className: 'glyphicon glyphicon-info-sign btn-help' }) : null
  ),
  React.createElement('input', { id: this.question.id,
    name: this.question.id,
    value: this.input.value,
    placeholder: this.question.questionText,
    disabled: this.disabled,
    onChange: this.props.onChange,
    onKeyUp: this.props.onKeyUp,
    onBlur: this.input.onBlur,
    onFocus: this.input.onFocus,
    className: 'form-control',
    type: 'text'
  }),
  this.error && React.createElement(
    'span',
    { className: 'help-block' },
    this.error
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["options"]["Private_1_ZipCode"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
       'div',
       { className: 'form-group zipcode' + (this.error ? ' has-error' : '') },
       React.createElement('input', { id: this.question.id,
              name: this.question.id,
              value: this.input.value,
              placeholder: this.question.questionText,
              disabled: this.disabled,
              onChange: this.props.onChange,
              onKeyUp: this.props.onKeyUp,
              onBlur: this.input.onBlur,
              onFocus: this.input.onFocus,
              className: 'form-control',
              type: 'text'
       }),
       this.error && React.createElement(
              'span',
              { className: 'help-block' },
              this.error
       )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["forms"] = this["cfe"]["forms"] || {};
this["cfe"]["forms"]["LoginForm"] = this["cfe"]["forms"]["LoginForm"] || {};
this["cfe"]["forms"]["LoginForm"]["index"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {
var _this = this;


with (data) return React.createElement(
  'div',
  null,
  !this.props.user && React.createElement(
    'div',
    null,
    React.createElement(
      'h3',
      null,
      language.get().account.login
    ),
    this.props.loginError && React.createElement(
      'span',
      null,
      this.props.loginError
    ),
    React.createElement(
      'form',
      { onSubmit: this.props.handleSubmit(function (input) {
          return _this.handleSubmit(input);
        }) },
      React.createElement(
        'div',
        { className: this.c('form-group', this.props.fields.email.error && 'has-error') },
        React.createElement(this.Field, { id: 'email-login', name: 'email', component: 'input', type: 'email', className: 'form-control',
          placeholder: this.props.intl.formatMessage(this.messages.emailAddress) }),
        this.props.fields.email.error && React.createElement(
          'p',
          { className: 'help-block' },
          this.props.fields.email.error
        )
      ),
      React.createElement(
        'div',
        { className: this.c('form-group', this.props.fields.password.error && 'has-error') },
        React.createElement(this.Field, { id: 'password-login', name: 'password', component: 'input', type: 'password', className: 'form-control',
          placeholder: this.props.intl.formatMessage(this.messages.password) }),
        this.props.fields.password.error && React.createElement(
          'p',
          { className: 'help-block' },
          this.props.fields.password.error
        )
      ),
      React.createElement(
        'div',
        { className: this.c('form-group', this.props.userHasSmsAuthenticationForLogin ? 'show' : 'hidden', this.props.fields.smsCode.error && 'has-error') },
        React.createElement(this.Field, { id: 'sms-code-login', name: 'smsCode', component: 'input', type: 'text', className: 'form-control',
          placeholder: this.props.intl.formatMessage(this.messages.smsCode) }),
        this.props.fields.smsCode.error && React.createElement(
          'p',
          { className: 'help-block' },
          this.props.fields.smsCode.error
        )
      ),
      React.createElement(
        this.LoadingButton,
        { className: 'btn btn-primary', message: this.props.userHasSmsAuthenticationForLogin ? this.messages.submitSmsCode : this.messages.submitLogin,
          isLoading: this.props.isLoginLoading, disabled: this.props.invalid },
        React.createElement('i', { className: 'glyphicon glyphicon-send' })
      ),
      this.props.stsSettings && this.props.stsSettings.ExternalProviders && this.props.stsSettings.ExternalProviders.map(function (s, i) {
        return React.createElement(
          'button',
          { key: i, className: 'btn btn-default',
            onClick: function onClick() {
              _this.openIdProvider(s);
            } },
          s.Caption
        );
      })
    )
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"] = this["cfe"]["components"] || {};
this["cfe"]["components"]["Calculation"] = this["cfe"]["components"]["Calculation"] || {};
this["cfe"]["components"]["Calculation"]["list"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {
var _this = this;


with (data) return React.createElement(
  "div",
  { className: "dossier-overview" },
  this.state && this.state.sortedCalculations && this.state.sortedCalculations.map(function (calculations, i) {
    return React.createElement(
      "div",
      { className: "space--xl", key: i },
      React.createElement(
        "div",
        { className: "m-contract m-contract--bg-blue m-contract--line-blue", "data-t-name": "Payment" },
        React.createElement(
          "div",
          { className: "m-contract__container" },
          React.createElement(
            "div",
            { className: "m-contract-headline", "data-t-name": "ContractHeadline" },
            React.createElement(
              "h3",
              { className: "m-contract-headline__title" },
              Object.keys(calculations)[i]
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "m-contract m-contract--box m-contract--bg-blue m-contract--line-orange-light", "data-t-name": "Contract" },
        React.createElement(
          "div",
          { className: "m-contract__container" },
          calculations[Object.keys(calculations)[i]].map(function (calculation, j) {
            return React.createElement(
              "div",
              { key: j, className: "m-contract-headline m-contract-headline--line-grey", "data-t-name": "ContractHeadline" },
              React.createElement(
                "p",
                { className: "m-contract-headline__date action", onClick: function onClick() {
                    return _this.props.handleResumeCalculation(calculation);
                  } },
                React.createElement(
                  "span",
                  { className: "m-contract-headline__date-title" },
                  React.createElement(_this.FormattedMessage, _this.messages.dateCreated),
                  "\xA0"
                ),
                _this.util.formatDate(calculation.dateCreated)
              ),
              React.createElement(
                "p",
                { className: "m-contract-headline__police" },
                React.createElement("span", { onClick: function onClick() {
                    return _this.props.handleResumeCalculation(calculation);
                  }, className: "glyphicon calc-open glyphicon-eye-open" }),
                React.createElement("span", { onClick: function onClick() {
                    return _this.props.handleClickRemove(calculation);
                  }, className: "glyphicon calc-delete glyphicon-remove" })
              )
            );
          })
        )
      )
    );
  })
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["CalculationResult"] = this["cfe"]["components"]["CalculationResult"] || {};
this["cfe"]["components"]["CalculationResult"]["index"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
	"div",
	{ className: "footer-quote" },
	React.createElement(
		"div",
		{ className: "progress" },
		React.createElement("div", { className: "progress-bar done", role: "progressbar", "aria-valuenow": "0", "aria-valuemin": "0", "aria-valuemax": "100", style: { width: '0%' } }),
		React.createElement("div", { className: "progress-bar next progress-bar-warning", role: "progressbar", "aria-valuenow": "40", "aria-valuemin": "0", "aria-valuemax": "100", style: { width: '20%' } })
	),
	this.props.calculation.paymentIntervalPremium ? React.createElement(
		"div",
		{ className: "cfe-tax-wrapper" },
		React.createElement(
			"div",
			{ className: "cfe-premium-before" },
			React.createElement(this.FormattedMessage, this.messages.amountBeforeTax),
			":\xA0",
			React.createElement(this.FormattedNumber, {
				value: Math.round(this.props.calculation.paymentIntervalPremium.amountBeforeTax * 100) / 100,
				style: "currency",
				currency: "EUR" })
		),
		React.createElement(
			"div",
			{ className: "cfe-premium-tax" },
			React.createElement(this.FormattedMessage, this.messages.tax),
			":\xA0",
			React.createElement(this.FormattedNumber, {
				value: Math.round(this.props.calculation.paymentIntervalPremium.tax * 100) / 100,
				style: "currency",
				currency: "EUR" })
		)
	) : null,
	React.createElement(
		"div",
		{ className: "cfe-premium-wrapper" },
		this.props.calculation.paymentIntervalPremium ? React.createElement(
			"div",
			{ className: "cfe-premium" },
			React.createElement(
				"span",
				{ className: "total-price" },
				React.createElement(
					"span",
					{ className: "currency" },
					language.get().currency,
					" "
				),
				parseFloat(Math.round(this.props.calculation.paymentIntervalPremium.amountAfterTax * 100) / 100).toFixed(2)
			)
		) : React.createElement(this.FormattedMessage, this.messages.yourPremium)
	)
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["Contract"] = this["cfe"]["components"]["Contract"] || {};
this["cfe"]["components"]["Contract"]["details"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


with (data) return React.createElement(
  'div',
  null,
  !(this.props.isLoadingContractDetails || this.props.isLoadingContractEditDetails) && this.contractDetails ? React.createElement(
    'div',
    null,
    !this.contractDetails.isEditAllowed && React.createElement(
      'p',
      null,
      this.formatMessage(this.messages.editNotAllowed)
    ),
    React.createElement(
      'button',
      { onClick: this.handleClickEdit, className: 'btn btn-primary', disabled: !this.contractDetails.isEditAllowed },
      !this.state.isEditingContract ? this.formatMessage(this.messages.edit) : this.formatMessage(this.messages.cancelEdit)
    ),
    this.contractDetails.conversionMessage && this.state.isEditingContract && React.createElement(
      'p',
      null,
      this.contractDetails.conversionMessage
    ),
    this.props.validation && React.createElement(
      'div',
      null,
      this.props.validation.map(function (e, i) {
        return React.createElement(
          'div',
          { key: i },
          ' ',
          e.message,
          ' '
        );
      })
    ),
    React.createElement(this.PaymentMethod, _extends({}, this.props.paymentMethodDetails, {
      readOnly: !this.isEditingContract,
      formName: 'contractPaymentDetails'
    })),
    React.createElement(this.Contract, this.formParams),
    this.state.isEditingContract ? this.props.isLoadingCalculation ? React.createElement(this.Loader, null) : React.createElement(this.CalculationResult, { calculation: this.props.calculation }) : React.createElement(this.CalculationResult, { calculation: this.contractDetails })
  ) : React.createElement(this.Loader, null)
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["Contract"]["details_BAK"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  "div",
  null,
  !(this.props.isLoadingContractDetails || this.props.isLoadingContractEditDetails) && this.contractDetails && this.props.contractToLoad ? React.createElement(
    "div",
    { className: "contract-detail-list" },
    !this.contractDetails.isEditAllowed && React.createElement(
      "p",
      null,
      this.formatMessage(this.messages.editNotAllowed)
    ),
    this.contractDetails.conversionMessage && this.state.isEditingContract && React.createElement(
      "p",
      null,
      this.contractDetails.conversionMessage
    ),
    this.props.validation && React.createElement(
      "div",
      null,
      this.props.validation.map(function (e, i) {
        return React.createElement(
          "div",
          { key: i },
          " ",
          e.message,
          " "
        );
      })
    ),
    React.createElement(
      "div",
      { className: "m-contract-headline space--l", "data-t-name": "ContractHeadline" },
      React.createElement(
        "h3",
        { className: "m-contract-headline__title" },
        this.props.contractToLoad.productName
      ),
      React.createElement(
        "p",
        { className: "m-contract-headline__police" },
        React.createElement(
          "span",
          { className: "m-contract-headline__police-number" },
          "# "
        ),
        this.props.contractToLoad.currentActiveContractId
      )
    ),
    this.state.customer && React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        { className: "title-section highlight" },
        " ",
        language.get().menu.contractDetails.content.customer,
        " "
      ),
      React.createElement(
        "ul",
        { className: "m-personal-data list-unstyled", "data-t-name": "PersonalData" },
        React.createElement(
          "li",
          { className: "m-personal-data__group-item" },
          React.createElement(
            "ul",
            { className: "list-unstyled" },
            React.createElement(
              "li",
              { className: "m-personal-data__item" },
              React.createElement(
                "p",
                { className: "m-personal-data__value" },
                this.state.customer.name()
              )
            ),
            React.createElement(
              "li",
              { className: "m-personal-data__item" },
              React.createElement(
                "p",
                { className: "m-personal-data__value" },
                this.state.customer.street()
              )
            ),
            React.createElement(
              "li",
              { className: "m-personal-data__item" },
              React.createElement(
                "p",
                { className: "m-personal-data__value" },
                this.state.customer.address()
              )
            ),
            React.createElement(
              "li",
              { className: "m-personal-data__item" },
              React.createElement(
                "p",
                { className: "m-personal-data__value" },
                this.state.customer.TelephoneNumber
              )
            ),
            React.createElement(
              "li",
              { className: "m-personal-data__item" },
              React.createElement(
                "p",
                { className: "m-personal-data__value" },
                this.state.customer.Email
              )
            )
          )
        )
      ),
      React.createElement("hr", null),
      React.createElement(
        "div",
        { className: "lead" },
        React.createElement(
          "a",
          { href: language.get().menu.customer.link, className: "tertiary", "data-t-name": "Link" },
          language.get().buttons.edit
        )
      )
    ),
    this.props.contractDetails && React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        { className: "title-section highlight" },
        " ",
        language.get().menu.contractDetails.content.contract,
        " "
      ),
      React.createElement(
        "ul",
        { className: "m-personal-data list-unstyled", "data-t-name": "PersonalData" },
        React.createElement(
          "li",
          { className: "m-personal-data__group-item" },
          React.createElement(
            "ul",
            { className: "list-unstyled" },
            this.props.contractDetails.options && this.props.contractDetails.options.map(function (q, i) {
              return React.createElement(
                "li",
                { className: "m-personal-data__item", key: i },
                q.isMandatory && q.isRelevant && q.optionUses[0] === 'Calculation' && q.questionText && q.value !== "" && q.value !== null && q.value !== '-' && q.id !== "Contract_1_PaymentInterval" && React.createElement(
                  "p",
                  { className: "m-personal-data__value" },
                  q.questionText,
                  "\xA0",
                  React.createElement(
                    "span",
                    { className: "value" },
                    q.value
                  )
                )
              );
            })
          )
        )
      ),
      React.createElement("hr", null),
      React.createElement(
        "div",
        { className: "lead" },
        React.createElement(
          "a",
          { href: "#", className: "tertiary", "data-t-name": "Link", onClick: this.handleClickEdit, disabled: !this.contractDetails.isEditAllowed },
          !this.state.isEditingContract ? this.formatMessage(this.messages.edit) : this.formatMessage(this.messages.cancelEdit)
        )
      )
    ),
    this.props.contractDetails && this.props.paymentMethodDetails && this.props.contractDetails.paymentIntervalPremium && React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        { className: "title-section highlight" },
        " ",
        language.get().menu.contractDetails.content.payment,
        " "
      ),
      React.createElement(
        "div",
        { className: "m-payment-detail", "data-t-name": "ListPaymentDetail" },
        React.createElement(
          "div",
          { className: "lead" },

          // Really, really stupid work around to get the right value fot the payment interval...
          _.find(this.props.contractDetails.options, { id: 'Contract_1_PaymentInterval' }).items[parseInt(_.find(this.props.contractDetails.options, { id: 'Contract_1_PaymentInterval' }).value) - 1].value,
          ": ",
          React.createElement(
            "strong",
            null,
            "CHF ",
            this.props.contractDetails.paymentIntervalPremium.amountAfterTax
          )
        ),
        React.createElement(
          "div",
          { className: "list" },
          React.createElement(
            "ul",
            { className: "list-unstyled" },
            React.createElement(
              "li",
              null,
              this.props.paymentMethodDetails.type.name
            ),
            React.createElement(
              "li",
              null,
              this.props.paymentMethodDetails.options[0].value
            )
          )
        )
      ),
      React.createElement("hr", null),
      React.createElement(
        "div",
        { className: "lead" },
        React.createElement(
          "a",
          { href: language.get().menu.payment.link, className: "tertiary", "data-t-name": "Link" },
          language.get().buttons.edit
        )
      )
    )
  ) : React.createElement(this.Loader, null)
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["Contract"]["list"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {
var _this = this;


with (data) return React.createElement(
  "div",
  { className: "dossier-overview" },
  React.createElement("div", { className: "clearfix" }),
  React.createElement(
    "div",
    { className: "checkbox" },
    React.createElement("input", { id: "contract-visibility", onChange: this.changeContractTypeVisiblity, type: "checkbox" }),
    React.createElement(
      "label",
      { htmlFor: "contract-visibility" },
      this.formatMessage(this.messages.inactiveContractsSwitchMessage)
    )
  ),
  this.contractsToDisplay.length > 0 ? React.createElement(
    "div",
    { className: "cfe-contracts" },
    this.contractsToDisplay.map(function (contract) {
      var isCurrentRowExpanded = _this.state.openedContractNumber === contract.contractNr;

      return [React.createElement(
        "div",
        { className: "space--xl" },
        React.createElement(
          "div",
          { className: contract.isActive ? "m-contract m-contract--bg-blue m-contract--line-blue" : "m-contract m-contract--bg-grey m-contract--line-grey", "data-t-name": "Contract" },
          React.createElement(
            "div",
            { className: "m-contract__container" },
            React.createElement(
              "div",
              { className: "m-contract-headline", "data-t-name": "ContractHeadline" },
              React.createElement(
                "h3",
                { className: "m-contract-headline__title" },
                contract.productName
              ),
              React.createElement(
                "p",
                { className: "m-contract-headline__police" },
                React.createElement(
                  "span",
                  { className: "m-contract-headline__police-number" },
                  _this.formatMessage(_this.messages.contractNumber)
                ),
                " ",
                contract.contractNr
              )
            ),
            React.createElement(
              "p",
              { className: "small" },
              _this.formatMessage(_this.messages.contractStartDate),
              ": \xA0",
              _this.util.formatDate(contract.dateStart),
              contract.isTerminationDateInTheFuture && React.createElement(
                _this.Tooltip,
                { id: contract.contractNr + 'futureTermination', title: _this.formatMessage(_this.messages.contractHasTerminationDateInTheFutureMessage) },
                React.createElement("span", { className: "glyphicon glyphicon-alert" })
              ),
              ".\xA0",
              !contract.isTerminationDateNotSpecified && _this.formatMessage(_this.messages.contractTerminationDate) + ': ',
              !contract.isTerminationDateNotSpecified && _this.util.formatDate(contract.dateTerminated)
            ),
            React.createElement(
              "div",
              { className: "m-contract__button-container" },
              React.createElement(
                "div",
                { className: "m-calltoaction", "data-t-name": "Calltoaction" },
                React.createElement(
                  "div",
                  { className: "m-calltoaction__primary" },
                  React.createElement(
                    "div",
                    { className: "a-button", "data-t-name": "Button" },
                    contract.isActive && React.createElement(
                      "button",
                      { onClick: function onClick() {
                          return _this.props.handleClickView(contract);
                        },
                        className: "btn btn-primary", "data-t-name": "Button" },
                      language.get().menu.contractDetails.title
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "m-calltoaction__primary" },
                  contract.isActive && React.createElement(
                    "a",
                    { href: "#", className: "link a-link link--option tertiary", onClick: function onClick() {
                        return _this.props.handleClickRemove(contract);
                      }, "data-t-name": "Link", "data-t-id": "15" },
                    language.get().buttons.cancelContract
                  )
                )
              )
            )
          )
        ),
        React.createElement(_this.ContractVersionsList, { contractVersions: contract.contractVersions })
      )];
    })
  ) : React.createElement(
    "div",
    { className: "message" },
    " ",
    this.formatMessage(this.messages.noContractsMessage),
    " "
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["Contract"]["versionsList"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {
var _this = this;


with (data) return React.createElement(
  "div",
  { className: "m-contract m-contract--box m-contract--bg-blue m-contract--line-orange-light", "data-t-name": "Contract" },
  React.createElement(
    "div",
    { className: "m-contract__container" },
    this.props.contractVersions && this.props.contractVersions.map(function (contract) {
      return React.createElement(
        "div",
        { key: contract.contractId },
        React.createElement(
          "div",
          { className: "m-contract-headline m-contract-headline--line-grey", "data-t-name": "ContractHeadline" },
          React.createElement(
            "p",
            { className: "m-contract-headline__date" },
            React.createElement(
              "span",
              { className: "m-contract-headline__date-title" },
              React.createElement(_this.FormattedMessage, _this.messages.contractActivationDate),
              " \xA0"
            ),
            _this.util.formatDate(contract.dateActive)
          ),
          React.createElement(
            "p",
            { className: "m-contract-headline__police" },
            React.createElement(
              "span",
              { className: "m-contract-headline__police-number" },
              React.createElement(_this.FormattedMessage, _this.messages.contractVersionNumber),
              " #"
            ),
            contract.contractId
          )
        ),
        React.createElement(
          "div",
          { className: "m-contract__link-container" },
          contract.dateInactive === _this.constants.noEndDateValue ? null : React.createElement(
            "span",
            null,
            React.createElement(_this.FormattedMessage, _this.messages.contractDateInactive),
            " ",
            _this.util.formatDate(contract.dateTerminated),
            " "
          )
        )
      );
    })
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["Document"] = this["cfe"]["components"]["Document"] || {};
this["cfe"]["components"]["Document"]["list"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {
var _this = this;


with (data) return React.createElement(
  "div",
  { className: "m-list-documents", "data-t-name": "ListDocuments" },
  React.createElement(
    "ul",
    { className: "list-unstyled" },
    this.sortedDocuments.map(function (document) {
      return React.createElement(
        "li",
        { className: "m-list-documents__item", key: document.id, onClick: function onClick() {
            return _this.props.handleOpenDocument(document);
          } },
        React.createElement(
          "div",
          { className: "m-list-documents__date date" },
          document.type,
          ": \xA0",
          _this.util.formatDate(document.dateCreated)
        ),
        React.createElement(
          "a",
          { className: "m-list-documents__link m-list-documents__link--new", href: "#detail", onClick: function onClick() {
              return _this.props.handleOpenDocument(document);
            } },
          React.createElement("span", { className: "glyphicon glyphicon-file" }),
          " ",
          document.name
        )
      );
    })
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["FNOL"] = this["cfe"]["components"]["FNOL"] || {};
this["cfe"]["components"]["FNOL"]["details"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {
var _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


with (data) return React.createElement(
  'div',
  null,
  this.props.form,
  this.state.files.length !== Number(this.config.maxFnolFiles) && React.createElement(
    this.Dropzone,
    { onDrop: this.handleDrop, className: 'dropzone', activeClassName: 'dropzone-active' },
    React.createElement(
      'div',
      null,
      React.createElement(this.FormattedMessage, this.messages.fnolDropFile)
    ),
    this.state.maxFilesError ? React.createElement(
      'span',
      { className: 'error-message' },
      React.createElement(this.FormattedMessage, _extends({}, this.messages.maxFileAmount, {
        values: { maxFiles: this.config.maxFnolFiles } }))
    ) : null,
    this.state.filesWithErrors.map(function (f) {
      return React.createElement(
        'div',
        { className: 'error-message' },
        React.createElement(_this.FormattedMessage, _extends({}, _this.messages.maxFileSizeAmount, {
          values: { fileName: f.name, maxFileSizeMB: _this.config.maxFileSize / 1024 / 1024 } }))
      );
    }),
    this.state.filesWithFailedUploadErrors.map(function (f) {
      return React.createElement(
        'div',
        { className: 'error-message' },
        React.createElement(_this.FormattedMessage, _this.messages.fileUploadError)
      );
    })
  ),
  this.state.files.length > 0 && React.createElement(
    'div',
    { className: 'm-list-documents dropzone-list', 'data-t-name': 'ListDocuments' },
    React.createElement(
      'ul',
      { className: 'list-unstyled' },
      this.state.files.map(function (f) {
        return React.createElement(
          'li',
          { className: 'm-list-documents__item' },
          ' ',
          React.createElement('span', { className: 'glyphicon glyphicon-file' }),
          ' ',
          f.name,
          ' ',
          React.createElement('span', { onClick: function onClick() {
              return _this.removeFile(f.preview);
            }, className: 'glyphicon glyphicon-remove' })
        );
      })
    )
  ),
  React.createElement(this.BooleanInput, {
    name: 'confirmationForFnol',
    callback: this.handleChangeConfirmation,
    label: this.props.intl.formatMessage(this.messages.confirm) }),
  React.createElement(
    this.LoadingButton,
    { className: 'btn btn-primary', onClick: this.props.submit, message: this.messages.submitButtonLabel, isLoading: this.props.isSavingFnol, disabled: this.state.isSubmitDisabled || this.props.isSavingFnol },
    React.createElement('i', { className: 'glyphicon glyphicon-send' })
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["Incident"] = this["cfe"]["components"]["Incident"] || {};
this["cfe"]["components"]["Incident"]["list"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {
var _this = this;


with (data) return React.createElement(
  "div",
  { className: "dossier-overview" },
  React.createElement(
    "div",
    { className: "cfe-contracts" },
    this.state && this.state.sortedIncidents && this.state.sortedIncidents.map(function (contract, i) {
      return React.createElement(
        "div",
        { className: "space--xl", key: i },
        React.createElement(
          "div",
          { className: contract.active ? "m-contract m-contract--bg-blue m-contract--line-blue" : "m-contract m-contract--bg-grey m-contract--line-grey", "data-t-name": "Contract" },
          React.createElement(
            "div",
            { className: "m-contract__container" },
            React.createElement(
              "div",
              { className: "m-contract-headline", "data-t-name": "ContractHeadline" },
              React.createElement(
                "h3",
                { className: "m-contract-headline__title" },
                contract[0].insuranceDescription
              ),
              React.createElement(
                "p",
                { className: "m-contract-headline__police" },
                React.createElement(
                  "span",
                  { className: "m-contract-headline__police-number" },
                  React.createElement(_this.FormattedMessage, _this.messages.contractNumber)
                ),
                " ",
                contract[0].contractId
              )
            )
          )
        ),
        contract.map(function (incident, j) {
          return React.createElement(
            "div",
            { className: contract.active ? 'm-contract m-contract--box m-contract--bg-blue m-contract--line-orange' : 'm-contract m-contract--box m-contract--bg-grey m-contract--line-grey',
              onClick: function onClick() {
                return _this.props.handleClickRow(incident);
              }, key: j },
            React.createElement(
              "div",
              { className: "m-contract__container" },
              React.createElement(
                "div",
                { className: "m-contract-headline m-contract-headline--line-grey", "data-t-name": "ContractHeadline" },
                React.createElement(
                  "p",
                  { className: "m-contract-headline__date" },
                  React.createElement(
                    "span",
                    { className: "m-contract-headline__date-title" },
                    React.createElement(_this.FormattedMessage, _this.messages.incidentDate),
                    " \xA0"
                  ),
                  _this.util.formatDate(incident.dateIncident)
                ),
                React.createElement(
                  "p",
                  { className: "m-contract-headline__police" },
                  React.createElement(
                    "span",
                    { className: "m-contract-headline__police-number" },
                    React.createElement(_this.FormattedMessage, _this.messages.incidentReportDate),
                    " \xA0"
                  ),
                  _this.util.formatDate(incident.dateNotification)
                )
              ),
              React.createElement(
                "ul",
                { className: "m-tracking-icons", "data-t-name": "TrackingIcons" },
                React.createElement(
                  "li",
                  { className: "m-tracking-icons__item m-tracking-icons__item--active\n                 " + (incident.state === 'InProgressAtExpert' ? 'm-tracking-icons__item--text' : '') },
                  React.createElement("span", { className: "m-tracking-icons__arrow glyphicon glyphicon-chevron-right" }),
                  React.createElement("span", { className: "m-tracking-icons__icon glyphicon glyphicon-comment" }),
                  incident.state === 'InProgressAtExpert' ? React.createElement(
                    "p",
                    { className: "m-tracking-icons__text" },
                    language.get().incident.state.InProgressAtExpert
                  ) : null
                ),
                React.createElement(
                  "li",
                  { className: "m-tracking-icons__item\n                " + (incident.state === 'ForControlAtDIV' ? 'm-tracking-icons__item--text ' : '') + "\n                " + (incident.state === 'ForControlAtDIV' || incident.state === 'Finished' ? 'm-tracking-icons__item--active' : '') },
                  React.createElement("span", { className: "m-tracking-icons__arrow glyphicon glyphicon-chevron-right" }),
                  React.createElement("span", { className: "m-tracking-icons__icon glyphicon glyphicon-hourglass" }),
                  incident.state === 'ForControlAtDIV' ? React.createElement(
                    "p",
                    { className: "m-tracking-icons__text" },
                    language.get().incident.state.ForControlAtDIV
                  ) : null
                ),
                React.createElement(
                  "li",
                  { className: "m-tracking-icons__item\n                " + (incident.state === 'Finished' ? 'm-tracking-icons__item--text m-tracking-icons__item--active' : '') },
                  React.createElement("span", { className: "m-tracking-icons__arrow glyphicon glyphicon-chevron-right" }),
                  React.createElement("span", { className: "m-tracking-icons__icon glyphicon glyphicon-flag" }),
                  incident.state === 'Finished' ? React.createElement(
                    "p",
                    { className: "m-tracking-icons__text" },
                    language.get().incident.state.Finished
                  ) : null
                )
              )
            )
          );
        })
      );
    })
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["Navbar"] = this["cfe"]["components"]["Navbar"] || {};
this["cfe"]["components"]["Navbar"]["index"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
	"div",
	{ className: "cfe-account" },
	this.props.user ? React.createElement(
		"div",
		{ className: "logged-in-list" },
		React.createElement(
			"div",
			{ className: "col-sm-4 col-sm-offset-2" },
			React.createElement(
				"h3",
				null,
				language.get().menu.welcome.title,
				' ' + this.props.customer.getFullName()
			),
			React.createElement(
				"ul",
				null,
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: language.get().menu.customer.link },
						language.get().menu.customer.title
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: language.get().menu.incidents.link },
						language.get().menu.incidents.title
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: language.get().menu.payment.link },
						language.get().menu.payment.title
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: language.get().menu.contracts.link },
						language.get().menu.contracts.title
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: language.get().menu.calculations.link },
						language.get().menu.calculations.title
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: language.get().menu.documents.link },
						language.get().menu.documents.title
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "/", onClick: this.logout.bind(this) },
						"Logout"
					)
				)
			)
		),
		React.createElement(
			"div",
			{ className: "col-sm-4" },
			cfeOptions.locale === "en_CH" ? React.createElement(
				"form",
				null,
				React.createElement(
					"h3",
					{ className: "title-section" },
					"Report damage"
				),
				React.createElement(
					"p",
					null,
					"When did the incident take place?"
				),
				React.createElement(
					"div",
					{ className: "form-group datepicker" },
					React.createElement("input", { type: "text", placeholder: "Select date" }),
					React.createElement("span", { className: "glyphicon glyphicon-calendar" })
				),
				React.createElement(
					"div",
					{ className: "form-group" },
					React.createElement(
						"select",
						{ disabled: "disabled" },
						React.createElement(
							"option",
							null,
							"Select insurance"
						)
					),
					React.createElement("span", { className: "select-chevron" })
				),
				React.createElement(
					"div",
					{ className: "btn" },
					"Continue"
				)
			) : React.createElement(
				"form",
				null,
				React.createElement(
					"h3",
					{ className: "title-section" },
					"Schaden melden"
				),
				React.createElement(
					"p",
					null,
					"Wann ist Ihr Schaden eingetreten?"
				),
				React.createElement(
					"div",
					{ className: "form-group datepicker" },
					React.createElement("input", { type: "text", placeholder: "Datum w\xE4hlen" }),
					React.createElement("span", { className: "glyphicon glyphicon-calendar" })
				),
				React.createElement(
					"div",
					{ className: "form-group" },
					React.createElement(
						"select",
						{ disabled: "disabled" },
						React.createElement(
							"option",
							null,
							"Versicherung w\xE4hlen"
						)
					),
					React.createElement("span", { className: "select-chevron" })
				),
				React.createElement(
					"div",
					{ className: "btn" },
					"Meldung aufnehmen"
				)
			)
		)
	) : null
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["PaymentMethod"] = this["cfe"]["components"]["PaymentMethod"] || {};
this["cfe"]["components"]["PaymentMethod"]["PaymentMethodPicker"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {
var _this = this;


with (data) return React.createElement(
  'div',
  null,
  React.createElement(
    'div',
    { className: 'form-group no-padding' },
    React.createElement(
      'select',
      { value: this.props.selectedPaymentMethodId, className: 'form-control payment-method-picker-payment-methods',
        onChange: this.selectedPaymentMethodChanged },
      React.createElement(
        'option',
        { value: '0' },
        this.formatMessage(this.messages.selectPaymentMethodLabel)
      ),
      (this.props.customerPaymentMethods || []).map(function (m, i) {
        return React.createElement(
          'option',
          { key: i, value: m.id },
          m.type.name,
          ' ',
          m.options[0] ? m.options[0].value : ''
        );
      })
    )
  ),
  React.createElement(
    'div',
    { className: 'form-group' },
    React.createElement(
      'a',
      { href: '#', className: 'tertiary', onClick: this.handleAddPaymentMethod },
      React.createElement(this.FormattedMessage, this.messages.createNewPaymentMethodMessage)
    )
  ),
  React.createElement(
    this.LoadingButton,
    { disabled: !this.props.selectedPaymentMethodId || this.props.selectedPaymentMethodId === '0',
      className: 'btn btn-primary',
      isLoading: this.props.isSavingAndSigningContract, message: this.localMessages.submitButtonLabel,
      onClick: function onClick() {
        return _this.props.handleSubmit(_this.props.selectedPaymentMethodId);
      } },
    React.createElement('i', { className: 'glyphicon glyphicon-send' })
  ),
  React.createElement(
    this.Modal,
    {
      title: this.formatMessage(this.messages.addPaymentMethodModalTitle),
      open: this.state.isAddPaymentMethodModalOpen,
      closeCallback: this.closeModals,
      id: 'payment-method-picker-add-payment-method-modal' },
    React.createElement(
      'div',
      { className: 'modal-body' },
      React.createElement(this.PaymentMethodCreator, {
        paymentMethodTemplates: this.props.paymentMethodTemplates,
        handleSubmit: this.handleCreatePaymentMethodWrapper })
    )
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["PaymentMethod"]["list"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _this = this;


with (data) return React.createElement(
  "div",
  { className: "dossier-overview" },
  React.createElement(
    "div",
    { className: "cfe-payments" },
    this.props.customerPaymentMethods && this.props.customerPaymentMethods.length > 0 && this.props.customerPaymentMethods.map(function (paymentMethod, i) {
      return React.createElement(
        "div",
        { className: "space--xl", key: i },
        React.createElement(
          "div",
          { className: "m-contract m-contract--bg-blue m-contract--line-blue", "data-t-name": "Payment" },
          React.createElement(
            "div",
            { className: "m-contract__container" },
            React.createElement(
              "div",
              { className: "m-contract-headline", "data-t-name": "ContractHeadline" },
              React.createElement(
                "h3",
                { className: "m-contract-headline__title" },
                paymentMethod.type.name
              ),
              React.createElement(
                "p",
                { className: "m-contract-headline__police" },
                React.createElement(
                  "span",
                  { className: "m-contract-headline__police-number" },
                  paymentMethod.options[0].value
                )
              )
            ),
            React.createElement(
              "p",
              { className: "small" },
              React.createElement(_this.FormattedMessage, _this.messages.number),
              ": \xA0",
              paymentMethod.options[0].value
            ),
            React.createElement(
              "div",
              { className: "m-contract__button-container" },
              React.createElement(
                "div",
                { className: "m-calltoaction", "data-t-name": "Calltoaction" },
                React.createElement(
                  "div",
                  { className: "m-calltoaction__primary" },
                  React.createElement(
                    "div",
                    { className: "a-button", "data-t-name": "Button" },
                    React.createElement(
                      "a",
                      { href: "#", onClick: function onClick() {
                          return _this.handleClickRow(paymentMethod);
                        }, className: "btn btn-primary", "data-t-name": "Button", role: "button" },
                      React.createElement(
                        "span",
                        null,
                        language.get().buttons.edit
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }),
    React.createElement(
      "h2",
      null,
      " ",
      React.createElement(this.FormattedMessage, this.messages.addPaymentMethod),
      " "
    ),
    React.createElement(
      "div",
      { className: "space--xl" },
      React.createElement(this.PaymentMethodCreator, {
        paymentMethodTemplates: this.props.paymentMethodTemplates,
        handleSubmit: this.handleCreatePaymentMethod })
    ),
    React.createElement(
      this.Modal,
      {
        title: this.state.activePaymentMethod.type.name,
        open: this.state.isDetailsModalOpen,
        closeCallback: this.closeModals,
        id: "create-payment-detail-modal" },
      React.createElement(
        "div",
        { className: "modal-body" },
        React.createElement(this.PaymentMethod, _extends({}, this.state.activePaymentMethod, {
          handleSubmit: this.handleEditPaymentMethod,
          enableReinitialize: true,
          formName: "payment-method-edit" }))
      )
    )
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["Summary"] = this["cfe"]["components"]["Summary"] || {};
this["cfe"]["components"]["Summary"]["index"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


with (data) return React.createElement(
  "div",
  null,
  this.summaryLists.map(function (list, i) {
    return React.createElement(
      "div",
      { className: "table", key: i },
      React.createElement(
        "table",
        null,
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              null,
              list.heading
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          list.summary.map(function (item, j) {
            return React.createElement(
              "tr",
              { key: j },
              React.createElement(
                "td",
                null,
                item.key,
                " \xA0"
              ),
              React.createElement(
                "td",
                null,
                item.value
              )
            );
          })
        )
      )
    );
  }),
  React.createElement(
    "div",
    { className: "checkbox" },
    React.createElement("input", { id: "check-confirmation-statement", type: "checkbox", onChange: this.handleChange }),
    React.createElement(
      "label",
      { htmlFor: "check-confirmation-statement" },
      React.createElement(this.FormattedHTMLMessage, _extends({}, this.messages.confirmationStatement, { values: {
          link: this.confirmationStatementUrl
        } }))
    )
  ),
  React.createElement(
    this.LoadingButton,
    { className: "btn btn-primary", onClick: this.props.handleSubmit, disabled: this.state.disabled, message: this.localMessages.submitButtonLabel },
    React.createElement("i", { className: "glyphicon glyphicon-send" })
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["buttons"] = this["cfe"]["components"]["buttons"] || {};
this["cfe"]["components"]["buttons"]["LoadingButton"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'stepper-nav' },
  React.createElement(
    'button',
    { className: this.props.className + ' next', type: 'submit', onClick: this.props.onClick,
      disabled: this.props.disabled || this.props.isLoading },
    React.createElement(this.FormattedMessage, this.props.message),
    this.props.isLoading && React.createElement('i', { className: 'fa fa-spinner fa-spin', 'aria-hidden': 'true' })
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["buttons"]["SubmitButton"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


with (data) return React.createElement(
	'div',
	{ className: 'stepper-nav' },
	React.createElement(
		'button',
		_extends({}, this.props, { className: 'btn btn-primary next', type: 'button' }),
		React.createElement(this.FormattedMessage, this.messages.submitButtonLabel)
	)
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["views"] = this["cfe"]["views"] || {};
this["cfe"]["views"]["DossierCustomerDetailsView"] = this["cfe"]["views"]["DossierCustomerDetailsView"] || {};
this["cfe"]["views"]["DossierCustomerDetailsView"]["DossierCustomerDetailsView"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


with (data) return React.createElement(
  'div',
  null,
  React.createElement(this.Customer, _extends({}, this.props.customer, {
    readOnly: this.state.readOnly,
    formName: this.dynamicFormTypes.customerEdit,
    handleSubmit: this.handleSubmitCustomer })),
  React.createElement(
    'button',
    { onClick: this.handleClickEditCustomer, className: 'btn edit btn-primary' },
    this.state.readOnly ? this.formatMessage(this.messages.edit) : this.formatMessage(this.messages.cancelEdit)
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["views"]["ProductView"] = this["cfe"]["views"]["ProductView"] || {};
this["cfe"]["views"]["ProductView"]["CalculationStep"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _this = this;


with (data) return React.createElement(
  "div",
  null,
  {
    eurotax: React.createElement(
      "div",
      { className: "eurotax-step" },
      React.createElement(
        "div",
        { id: 'eurotax-modal-' + this.props.step.stepIndex, className: "modal fade eurotax-modal",
          "data-stepIndex": this.props.step.stepIndex, tabIndex: "-1", role: "dialog" },
        React.createElement(
          "div",
          { className: "modal-dialog", role: "document" },
          React.createElement(
            "div",
            { className: "modal-content" },
            React.createElement(
              "div",
              { className: "modal-header" },
              React.createElement(
                "div",
                { className: "button-previous",
                  disabled: !this.props.step.activeQuestionIndex,
                  onClick: function onClick() {
                    return _this.props.goToPreviousQuestion(_this.stepKey);
                  } },
                React.createElement("span", { className: "glyphicon glyphicon-chevron-left" })
              ),
              React.createElement(
                "h3",
                { id: "eurotax-back" },
                language.get().menu.contractDetails.content.car
              ),
              React.createElement("button", {
                type: "button",
                className: "close",
                "data-dismiss": "modal",
                "aria-label": "Close" })
            ),
            React.createElement(
              "div",
              { className: "modal-body" },
              React.createElement(this.Product, _extends({}, this.props.product, {
                hideSubmitButton: true,
                shouldSubmitWhenValid: this.props.step.shouldSubmitWhenValid,
                formName: this.dynamicFormTypes.calculation,
                formComponent: this.props.step.formComponent,
                stepKey: this.props.step.stepKey,
                options: this.options,
                answers: this.props.calculationAnswers,
                handleSubmit: this.handleCalculation }))
            )
          )
        )
      ),
      _.isEmpty(this.state.eurotaxData) ? React.createElement(
        "div",
        { className: "eurotax-open" },
        React.createElement(
          "p",
          null,
          "W\xE4hlen sie bitte Ihr Fahrzeug"
        ),
        React.createElement(
          "div",
          { className: "form-group form-group-select", "data-toggle": "modal", "data-target": '#eurotax-modal-' + this.props.step.stepIndex },
          React.createElement("input", { type: "text", className: "eurotax-start form-control form-select", placeholder: "W\xE4hle eins" }),
          React.createElement("div", { className: "select-chevron" })
        )
      ) : React.createElement(
        "div",
        { className: "eurotax-card form-group" },
        React.createElement(
          "div",
          { className: "euro-class" },
          this.state.eurotaxData && this.state.eurotaxData.map(function (d, i) {
            return React.createElement(
              "div",
              { className: "euro-group", key: i },
              React.createElement(
                "span",
                { className: "euro-value" },
                d.value
              ),
              React.createElement(
                "span",
                { className: "euro-label" },
                d.label
              )
            );
          })
        ),
        React.createElement(
          "a",
          { className: "eurotax-reset tertiary" },
          "Auswahl \xE4ndern"
        )
      )
    ),
    default: React.createElement(
      "div",
      null,
      React.createElement(this.Product, _extends({}, this.props.product, {
        hideSubmitButton: true,
        shouldSubmitWhenValid: this.props.step.shouldSubmitWhenValid,
        formName: "productCalculation",
        options: this.options,
        answers: this.props.calculationAnswers,
        handleSubmit: this.handleCalculation,
        stepKey: this.props.step.stepKey,
        formComponent: this.props.step.formComponent })),
      this.props.step.isLastStepOfType ? React.createElement(
        "div",
        { className: "stepper-nav" },
        React.createElement(
          this.LoadingButton,
          { className: "btn btn-primary", onClick: this.handleGoToCustomerDataStep, message: this.localMessages.submitButtonLabel, isLoading: this.props.isLoading, disabled: !this.canContinueAfterCalculationStep },
          React.createElement("i", { className: "glyphicon glyphicon-send" })
        )
      ) : React.createElement(
        "div",
        { className: "stepper-nav" },
        React.createElement(
          "button",
          { className: this.props.step.stepIndex === 0 && cfeOptions.productConfig.id === 104571 ? 'hidden' : 'btn btn-primary',
            type: "submit", disabled: !this.props.step.isValid,
            onClick: this.nextStep },
          language.get().buttons.next
        )
      )
    )
  }[this.props.step.stepKey]
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["views"]["ProductView"]["CustomerStep"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  null,
  this.user ? React.createElement(this.Customer, this.customerProps) : React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'section-login' },
      React.createElement(this.LoginForm, null)
    ),
    React.createElement(
      'div',
      { className: 'section-register' },
      React.createElement(this.RegisterForm, null)
    )
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["InputTypes"] = this["cfe"]["components"]["InputTypes"] || {};
this["cfe"]["components"]["InputTypes"]["Boolean"] = this["cfe"]["components"]["InputTypes"]["Boolean"] || {};
this["cfe"]["components"]["InputTypes"]["Boolean"]["index"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
	"div",
	{ className: "checkbox" },
	this.field,
	React.createElement(
		"label",
		{ htmlFor: this.question.id },
		this.question.questionText,
		this.question.isMandatory && React.createElement(
			"span",
			null,
			"*"
		)
	)
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["InputTypes"]["Boolean"]["input"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
  'div',
  { className: 'checkbox' },
  React.createElement('input', { id: this.props.name, type: 'checkbox', checked: this.state.isChecked, name: this.props.name, onChange: this.handleChange }),
  React.createElement(
    'label',
    { htmlFor: this.props.name },
    this.props.label
  )
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["InputTypes"]["Currency"] = this["cfe"]["components"]["InputTypes"]["Currency"] || {};
this["cfe"]["components"]["InputTypes"]["Currency"]["index"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
	'div',
	{ className: 'form-group ' + (this.error ? ' has-error' : '') + (this.disabled ? ' disabled' : '') },
	this.helpText ? React.createElement(
		'div',
		{ className: 'modal fade', id: this.question.id, tabindex: '-1', role: 'dialog', 'aria-labelledby': this.question.id },
		React.createElement(
			'div',
			{ className: 'modal-dialog', role: 'document' },
			React.createElement(
				'div',
				{ className: 'modal-content' },
				React.createElement(
					'div',
					{ className: 'modal-header' },
					React.createElement('button', { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' })
				),
				React.createElement(
					'div',
					{ className: 'modal-body' },
					React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
				),
				React.createElement(
					'div',
					{ className: 'modal-footer' },
					React.createElement(
						'button',
						{ type: 'button', className: 'btn-border', 'data-dismiss': 'modal' },
						' ',
						language.get().buttons.close,
						' '
					)
				)
			)
		)
	) : null,
	React.createElement(
		'label',
		{ htmlFor: this.question.id, className: this.helpText ? 'btn-help' : null, 'data-toggle': this.helpText ? 'modal' : null, 'data-target': '#' + this.question.id },
		this.question.questionText,
		this.question.isMandatory && React.createElement(
			'span',
			null,
			'*'
		),
		this.helpText ? React.createElement('span', { className: 'glyphicon glyphicon-info-sign btn-help' }) : null
	),
	React.createElement(
		'div',
		{ className: 'input-group' },
		React.createElement(
			'span',
			{ className: 'input-group-addon' },
			language.get().currency
		),
		this.field
	),
	this.error && React.createElement(
		'span',
		{ className: 'help-block' },
		this.error
	)
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["InputTypes"]["Date"] = this["cfe"]["components"]["InputTypes"]["Date"] || {};
this["cfe"]["components"]["InputTypes"]["Date"]["index"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
	'div',
	{ className: 'form-group datepicker' + (this.error ? ' has-error' : '') + (this.disabled ? ' disabled' : '') },
	this.helpText ? React.createElement(
		'div',
		{ className: 'modal fade', id: this.question.id, tabindex: '-1', role: 'dialog', 'aria-labelledby': this.question.id },
		React.createElement(
			'div',
			{ className: 'modal-dialog', role: 'document' },
			React.createElement(
				'div',
				{ className: 'modal-content' },
				React.createElement(
					'div',
					{ className: 'modal-header' },
					React.createElement('button', { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' })
				),
				React.createElement(
					'div',
					{ className: 'modal-body' },
					React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
				),
				React.createElement(
					'div',
					{ className: 'modal-footer' },
					React.createElement(
						'button',
						{ type: 'button', className: 'btn-border', 'data-dismiss': 'modal' },
						' ',
						language.get().buttons.close,
						' '
					)
				)
			)
		)
	) : null,
	React.createElement(
		'label',
		{ htmlFor: this.question.id, className: this.helpText ? 'btn-help' : null, 'data-toggle': this.helpText ? 'modal' : null, 'data-target': '#' + this.question.id },
		this.question.questionText,
		this.question.isMandatory && React.createElement(
			'span',
			null,
			'*'
		),
		this.helpText ? React.createElement('span', { className: 'glyphicon glyphicon-info-sign btn-help' }) : null
	),
	this.field,
	React.createElement(
		'div',
		{ className: 'modal-calendar' },
		React.createElement('span', { className: 'glyphicon glyphicon-calendar' })
	),
	this.error && React.createElement(
		'span',
		{ className: 'help-block' },
		this.error
	)
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["InputTypes"]["Integer"] = this["cfe"]["components"]["InputTypes"]["Integer"] || {};
this["cfe"]["components"]["InputTypes"]["Integer"]["index"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
	'div',
	{ className: 'form-group' + (this.error ? ' has-error' : '') + (this.disabled ? ' disabled' : '') },
	this.helpText ? React.createElement(
		'div',
		{ className: 'modal fade', id: this.question.id, tabindex: '-1', role: 'dialog', 'aria-labelledby': this.question.id },
		React.createElement(
			'div',
			{ className: 'modal-dialog', role: 'document' },
			React.createElement(
				'div',
				{ className: 'modal-content' },
				React.createElement(
					'div',
					{ className: 'modal-header' },
					React.createElement('button', { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' })
				),
				React.createElement(
					'div',
					{ className: 'modal-body' },
					React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
				),
				React.createElement(
					'div',
					{ className: 'modal-footer' },
					React.createElement(
						'button',
						{ type: 'button', className: 'btn-border', 'data-dismiss': 'modal' },
						' ',
						language.get().buttons.close,
						' '
					)
				)
			)
		)
	) : null,
	React.createElement(
		'label',
		{ htmlFor: this.question.id, className: this.helpText ? 'btn-help' : null, 'data-toggle': this.helpText ? 'modal' : null, 'data-target': '#' + this.question.id },
		this.question.questionText,
		this.question.isMandatory && React.createElement(
			'span',
			null,
			'*'
		),
		this.helpText ? React.createElement('span', { className: 'glyphicon glyphicon-info-sign btn-help' }) : null
	),
	this.field,
	this.error && React.createElement(
		'span',
		{ className: 'help-block' },
		this.error
	)
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["InputTypes"]["Selection"] = this["cfe"]["components"]["InputTypes"]["Selection"] || {};
this["cfe"]["components"]["InputTypes"]["Selection"]["index"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
	'div',
	{ className: 'form-group' + (this.error ? ' has-error' : '') + (this.props.meta.active ? ' select-show' : '') + (this.props.disabled ? ' disabled' : '') },
	this.helpText ? React.createElement(
		'div',
		{ className: 'modal fade', id: this.question.id, tabindex: '-1', role: 'dialog', 'aria-labelledby': this.question.id },
		React.createElement(
			'div',
			{ className: 'modal-dialog', role: 'document' },
			React.createElement(
				'div',
				{ className: 'modal-content' },
				React.createElement(
					'div',
					{ className: 'modal-header' },
					React.createElement('button', { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' })
				),
				React.createElement(
					'div',
					{ className: 'modal-body' },
					React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
				),
				React.createElement(
					'div',
					{ className: 'modal-footer' },
					React.createElement(
						'button',
						{ type: 'button', className: 'btn-border', 'data-dismiss': 'modal' },
						' ',
						language.get().buttons.close,
						' '
					)
				)
			)
		)
	) : null,
	React.createElement(
		'label',
		{ htmlFor: this.question.id, className: this.helpText ? 'btn-help' : null, 'data-toggle': this.helpText ? 'modal' : null, 'data-target': this.helpText ? '#' + this.question.id : null },
		this.question.questionText,
		this.question.isMandatory && React.createElement(
			'span',
			null,
			'*'
		),
		this.helpText ? React.createElement('span', { className: 'glyphicon glyphicon-info-sign btn-help' }) : null
	),
	React.createElement(
		'div',
		{ className: this.state.dropdown },
		this.state.dropdown === 'select-dropdown' ? React.createElement(
			'div',
			null,
			React.createElement(
				'select',
				{ className: 'form-control', id: this.question.id, onFocus: this.input.onFocus, onChange: this.input.onChange, name: this.input.name, disabled: this.props.disabled, value: this.input.value },
				this.options
			),
			React.createElement('span', { className: 'select-chevron' })
		) : this.question.items.map(function (q, i) {
			// UGLY CODE THAT NEEDS TO BE REMOVED. Gr, Maikel
			if (q.key !== 'null' && q.key !== '') {
				var isDefaultChecked = q.key === this.input.value || this.question.isMandatory && this.props.disabled;
				return React.createElement(
					'label',
					{ className: 'btn-radio' + (q.key === this.input.value ? ' active' : '') + (this.props.disabled || q.key === '_' ? ' disabled' : ''), htmlFor: this.question.id + '_' + q.value.replace(/ /g, "_") },
					q.value,
					React.createElement('input', {
						id: this.question.id + '_' + q.value.replace(/ /g, "_"), type: 'radio', name: this.input.name, value: q.key,
						onChange: this.onChange, onBlur: this.input.onBlur, onFocus: this.input.onFocus, checked: isDefaultChecked ? 'checked' : '',
						disabled: this.props.disabled || q.key === '_' ? 'disabled' : null
					})
				);
			}
		}, this)
	),
	this.error && React.createElement(
		'span',
		{ className: 'help-block' },
		this.error
	)
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"]["components"]["InputTypes"]["String"] = this["cfe"]["components"]["InputTypes"]["String"] || {};
this["cfe"]["components"]["InputTypes"]["String"]["index"] = function anonymous(data,config
/**/) {
data = data || {};
var nodes = (function jsx() {

with (data) return React.createElement(
	'div',
	{ className: 'form-group' + (this.error ? ' has-error' : '') + (this.disabled ? ' disabled' : '') },
	this.helpText ? React.createElement(
		'div',
		{ className: 'modal fade', id: this.question.id, tabindex: '-1', role: 'dialog', 'aria-labelledby': this.question.id },
		React.createElement(
			'div',
			{ className: 'modal-dialog', role: 'document' },
			React.createElement(
				'div',
				{ className: 'modal-content' },
				React.createElement(
					'div',
					{ className: 'modal-header' },
					React.createElement('button', { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' })
				),
				React.createElement(
					'div',
					{ className: 'modal-body' },
					React.createElement('div', { dangerouslySetInnerHTML: this.helpText })
				),
				React.createElement(
					'div',
					{ className: 'modal-footer' },
					React.createElement(
						'button',
						{ type: 'button', className: 'btn-border', 'data-dismiss': 'modal' },
						' ',
						language.get().buttons.close,
						' '
					)
				)
			)
		)
	) : null,
	React.createElement(
		'label',
		{ htmlFor: this.question.id, className: this.helpText ? 'btn-help' : null, 'data-toggle': this.helpText ? 'modal' : null, 'data-target': '#' + this.question.id },
		this.question.questionText,
		this.question.isMandatory && React.createElement(
			'span',
			null,
			'*'
		),
		this.helpText ? React.createElement('span', { className: 'glyphicon glyphicon-info-sign btn-help' }) : null
	),
	this.field,
	this.error && React.createElement(
		'span',
		{ className: 'help-block' },
		this.error
	)
);
}).call(this.props ? this : data),
options = {"render":"renderToString"};
if ("DOM" === options.render || !(config || {}).html) return nodes;
return ReactDOM[options.render](nodes);
};
this["cfe"] = this["cfe"] || {};
this["cfe"]["components"] = this["cfe"]["components"] || {};
this["cfe"]["components"]["Calculation"] = this["cfe"]["components"]["Calculation"] || {};
this["cfe"]["components"]["Calculation"]["list"] = this["cfe"]["components"]["Calculation"]["list"] || {};
this["cfe"]["components"]["Calculation"]["list"]["callbacks"] = {
  componentDidMount: function () {
    var sortedCalculations = [];
    var products = _.groupBy(this.props.calculations, 'productName');

    for (product in products) {
      sortedCalculations.push(products)
    }

    this.setState({sortedCalculations: sortedCalculations});
  }
}
;
this["cfe"]["components"]["Contract"] = this["cfe"]["components"]["Contract"] || {};
this["cfe"]["components"]["Contract"]["details_BAK"] = this["cfe"]["components"]["Contract"]["details_BAK"] || {};
this["cfe"]["components"]["Contract"]["details_BAK"]["callbacks"] = {
  componentWillMount: function () {
    var contractToLoad     = this.props.contractToLoad;

    if (contractToLoad && contractToLoad.customer) {
      var customerToLoad = contractToLoad.customer.options;
      var customer = {
        FirstName:        _.find(customerToLoad, {id: 'Private_1_FirstName'}).value+' ',
        MiddleName:       _.find(customerToLoad, {id: 'Private_1_MiddleName'}).value+' ',
        LastName:         _.find(customerToLoad, {id: 'Private_1_LastName'}).value,
        StreetName:       _.find(customerToLoad, {id: 'Private_1_StreetName'}).value+' ',
        HouseNumber:      _.find(customerToLoad, {id: 'Private_1_HouseNumber'}).value,
        HouseNumberSuffix:_.find(customerToLoad, {id: 'Private_1_HouseNumberSuffix'}).value,
        ZipCode:          _.find(customerToLoad, {id: 'Private_1_ZipCode'}).value+' ',
        City:             _.find(customerToLoad, {id: 'Private_1_City'}).value,
        TelephoneNumber:  _.find(customerToLoad, {id: 'Private_1_TelephoneNumber'}).value,
        Email:            _.find(customerToLoad, {id: 'Private_1_Email'}).value,
        name: function () {
          return this.FirstName+this.MiddleName+this.LastName;
        },
        street: function () {
          return this.StreetName+this.HouseNumber+this.HouseNumberSuffix;
        },
        address: function () {
          return this.ZipCode+this.City;
        }
      };
      this.setState({customer: customer});
    }
  }
}
;
this["cfe"]["components"]["Incident"] = this["cfe"]["components"]["Incident"] || {};
this["cfe"]["components"]["Incident"]["list"] = this["cfe"]["components"]["Incident"]["list"] || {};
this["cfe"]["components"]["Incident"]["list"]["callbacks"] = {
  componentWillMount: function () {
    this.setState({incidentLength: 0});
  },

  componentDidUpdate: function () {
    if (this.props.incidents.length > this.state.incidentLength) {
      var sortedIncidents = [];
      var contracts = _.groupBy(this.props.incidents, 'contractId');

      for (contract in contracts) {
        var singleContract = contracts[contract];
        sortedIncidents.push(singleContract);

        for (incident in singleContract) {
          if (singleContract[incident].state !== 'Finished') {
            singleContract['active'] = true;
          }
        }
      }

      this.setState({incidentLength: this.props.incidents.length, sortedIncidents: sortedIncidents});
    }
  }
}
;
this["cfe"]["components"]["Navbar"] = this["cfe"]["components"]["Navbar"] || {};
this["cfe"]["components"]["Navbar"]["index"] = this["cfe"]["components"]["Navbar"]["index"] || {};
this["cfe"]["components"]["Navbar"]["index"]["callbacks"] = {
  componentDidMount: function (nextProps) {
		var options = {
			weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
			showMonthsShort: false,
			format: 'dd-mm-yyyy',
			formatSubmit: 'dd-mm-yyyy',
			selectMonths: false,
			selectYears: false,
			max: true
		};

		jQuery( '.datepicker input' ).pickadate( options );
  },

  componentWillMount: function(nextProps){
    var navbar 	= this;
    if (this.props.user!== null) {
      jQuery('.login-btn a').addClass('logged-in').addClass('logged-in');
      jQuery('.login-btn [class^="icon-smile-"]').text(language.get().menu.login.title);
      jQuery('.login-btn .login-claim').text(language.get().menu.fnol.title).attr('href', language.get().menu.incidents.link).unbind('click');
    }else {
      jQuery('.login-btn .login-claim').text('Login').on('click', function (e) {
        e.preventDefault();
        iconMenu.toggle( jQuery('.icon-menu .login-btn') );
      });
    }
  },

  componentWillReceiveProps: function (nextProps) {
    var navbar 	= this;
    if (this.props.user!== null) {
      jQuery('.login-btn a').addClass('logged-in').addClass('logged-in');
      jQuery('.login-btn [class^="icon-smile-"]').text(language.get().menu.login.title);
      jQuery('.login-btn .login-claim').text(language.get().menu.fnol.title).attr('href', language.get().menu.incidents.link).unbind('click');
    }else {
      jQuery('.login-btn .login-claim').text('Login').on('click', function (e) {
        e.preventDefault();
        iconMenu.toggle( jQuery('.icon-menu .login-btn') );
      });
    }
  }
}
;
this["cfe"]["components"]["buttons"] = this["cfe"]["components"]["buttons"] || {};
this["cfe"]["components"]["buttons"]["LoadingButton"] = this["cfe"]["components"]["buttons"]["LoadingButton"] || {};
this["cfe"]["components"]["buttons"]["LoadingButton"]["callbacks"] = {
  componentDidMount: function(){
    jQuery( '.stepper-nav .next' ).click(function(){
      jQuery('html, body').scrollTop(0);
    });
  }
}
;
this["cfe"]["components"]["buttons"]["SubmitButton"] = this["cfe"]["components"]["buttons"]["SubmitButton"] || {};
this["cfe"]["components"]["buttons"]["SubmitButton"]["callbacks"] = {
	componentDidMount: function(){
    jQuery( '.stepper-nav .next' ).click(function(){
      jQuery('html, body').scrollTop(0);
    });
	}
}
;
this["cfe"]["views"] = this["cfe"]["views"] || {};
this["cfe"]["views"]["ProductView"] = this["cfe"]["views"]["ProductView"] || {};
this["cfe"]["views"]["ProductView"]["CalculationStep"] = this["cfe"]["views"]["ProductView"]["CalculationStep"] || {};
this["cfe"]["views"]["ProductView"]["CalculationStep"]["callbacks"] = {
    componentDidMount: function () {
      this.setState({eurotaxData: {}});
    },

    componentDidUpdate: function (prevProps, prevState) {
      var self = this;

      if (self.props.step.stepKey === 'eurotax' &&
          prevState.isStepByStepQuestionsFormCompleted &&
          _.isEmpty(prevState.eurotaxData)) {

          var stepQuestions = self.props.step.questions.map(function (q) { return q.id });
          var eurotaxData = stepQuestions.reduce(function (acc, q) {
            var label = self.props.calculateable.options.find(function (o) { return o.id === q }).questionText;
            var answer = self.props.calculationAnswers[q];

            if (label && answer) {
              if (q === "OB_1_TYPE_SELECTION" || q === "OB_2_TYPE_SELECTION") {
                acc.unshift({label: label , value: answer});
              }else {
                acc.push({label: label , value: answer});
              }
            }

            return acc;
          }, [])

          this.setState({eurotaxData: eurotaxData});
      }
    }
}
;
this["cfe"]["components"]["InputTypes"] = this["cfe"]["components"]["InputTypes"] || {};
this["cfe"]["components"]["InputTypes"]["Currency"] = this["cfe"]["components"]["InputTypes"]["Currency"] || {};
this["cfe"]["components"]["InputTypes"]["Currency"]["index"] = this["cfe"]["components"]["InputTypes"]["Currency"]["index"] || {};
this["cfe"]["components"]["InputTypes"]["Currency"]["index"]["callbacks"] = {
	componentDidMount: function(nextProps) {
    jQuery('#'+this.props.question.id).on('hidden.bs.modal', function (e) {
			e.stopPropagation();
			if (jQuery('.modal.in').length > 0) {
				jQuery('body').addClass('modal-open');
			}
		});

		jQuery('#'+this.props.question.id).on('click', '[data-dismiss="modal"]', function(e) {
			e.stopPropagation();
		});
  }
}
;
this["cfe"]["components"]["InputTypes"]["Date"] = this["cfe"]["components"]["InputTypes"]["Date"] || {};
this["cfe"]["components"]["InputTypes"]["Date"]["index"] = this["cfe"]["components"]["InputTypes"]["Date"]["index"] || {};
this["cfe"]["components"]["InputTypes"]["Date"]["index"]["callbacks"] = {
	componentDidMount: function(nextProps){
    var props			 = this.props;
    var datepicker = jQuery( '[name="'+props.input.name+'"].form-control' );
    var today 	= new Date();
    var oneDay 	= 24*60*60*1000;
		var maxDate = function(){
			if( props.question.maxValue ){
				var thisDate = new Date( props.question.maxValue )
				var days		 = Math.round(Math.abs((today.getTime() - thisDate.getTime())/(oneDay)));
				if( today.toDateString() === thisDate.toDateString() ){ return true; }
				else{ return days; }
			}else{
				return false;
			}
		};
		var minDate = function(){
			if( props.question.minValue ){
				var thisDate = new Date( props.question.minValue );
				var days		 = Math.round(Math.abs((today.getTime() - thisDate.getTime())/(oneDay)));
				if( today.toDateString() === thisDate.toDateString() ){ return true; }
				else{ return -days; }
			}else{
				return false;
			}
		};
		var options = {
			monthsFull: language.get().datepicker.monthsFull,
			monthsShort: language.get().datepicker.monthsShort,
			weekdaysFull: language.get().datepicker.weekdaysFull,
			weekdaysShort: language.get().datepicker.weekdaysShort,
			today: language.get().datepicker.today,
			clear: language.get().datepicker.clear,
			close: language.get().datepicker.close,
			showMonthsShort: true,
			format: language.get().datepicker.format,
			formatSubmit: language.get().datepicker.formatSubmit,
			selectMonths: true,
			selectYears: 300,
			min: minDate(),
			max: maxDate()
		};
		var options1 = {
			editable: true,
			format: language.get().datepicker.format,
			formatSubmit: language.get().datepicker.formatSubmit,
      min: minDate(),
      max: maxDate()
		};
    datepicker.pickadate( options1 ).on('change', function () {
      var self 				= jQuery(this);
      var removedText = self.val().replace(/[a-zA-Z, ]/g, '');

      self.val(removedText);
      props.onChange();
		}).on('blur', props.onBlur).on('keydown', props.onKeyUp);
		var calendar = datepicker.siblings('.modal-calendar').pickadate( options ).on('change', props.onChange).on('change', props.onKeyUp).on('blur', props.onBlur);

		jQuery('#'+this.props.question.id).on('hidden.bs.modal', function (e) {
			e.stopPropagation();
			if (jQuery('.modal.in').length > 0) {
				jQuery('body').addClass('modal-open');
			}
		});

		jQuery('#'+this.props.question.id).on('click', '[data-dismiss="modal"]', function(e) {
			e.stopPropagation();
		});
	}
}
;
this["cfe"]["components"]["InputTypes"]["Integer"] = this["cfe"]["components"]["InputTypes"]["Integer"] || {};
this["cfe"]["components"]["InputTypes"]["Integer"]["index"] = this["cfe"]["components"]["InputTypes"]["Integer"]["index"] || {};
this["cfe"]["components"]["InputTypes"]["Integer"]["index"]["callbacks"] = {
	componentDidMount: function(nextProps) {
    jQuery('#'+this.props.question.id).on('hidden.bs.modal', function (e) {
			e.stopPropagation();
			if (jQuery('.modal.in').length > 0) {
				jQuery('body').addClass('modal-open');
			}
		});

		jQuery('#'+this.props.question.id).on('click', '[data-dismiss="modal"]', function(e) {
			e.stopPropagation();
		});
  }
}
;
this["cfe"]["components"]["InputTypes"]["Selection"] = this["cfe"]["components"]["InputTypes"]["Selection"] || {};
this["cfe"]["components"]["InputTypes"]["Selection"]["index"] = this["cfe"]["components"]["InputTypes"]["Selection"]["index"] || {};
this["cfe"]["components"]["InputTypes"]["Selection"]["index"]["callbacks"] = {
  componentWillMount: function() {
    var items = this.props.question.items;
    var longItems = _.findIndex(items, function(item) { return item.value.length > 30; });

    if (items.length < 4 && longItems === -1 ) {
      this.setState({dropdown: 'radio-horizontal'});
    }else if (items.length < 5 && longItems === -1 ) {
      this.setState({dropdown: 'radio-vertical'});
    }else {
      this.setState({dropdown: 'select-dropdown'});
    }
	},
  componentWillReceiveProps: function (nextProps) {
    if (nextProps !== undefined && nextProps.question.items != this.props.question.items) {
      var items = nextProps.question.items;
      var longItems = _.findIndex(items, function(item) { return item.value.length > 30; });

      if (items.length < 4 && longItems === -1 ) {
        this.setState({dropdown: 'radio-horizontal'});
      }else if (items.length < 5 && longItems === -1 ) {
        this.setState({dropdown: 'radio-vertical'});
      }else {
        this.setState({dropdown: 'select-dropdown'});
      }
    }
  },
	componentDidMount: function() {
    var temp = this;
    jQuery('#'+this.props.question.id).on('hidden.bs.modal', function (e) {
			e.stopPropagation();
			if (jQuery('.modal.in').length > 0) {
				jQuery('body').addClass('modal-open');
			}
		});

		jQuery('#'+this.props.question.id).on('click', '[data-dismiss="modal"]', function(e) {
			e.stopPropagation();
		});

  }
}
;
this["cfe"]["components"]["InputTypes"]["String"] = this["cfe"]["components"]["InputTypes"]["String"] || {};
this["cfe"]["components"]["InputTypes"]["String"]["index"] = this["cfe"]["components"]["InputTypes"]["String"]["index"] || {};
this["cfe"]["components"]["InputTypes"]["String"]["index"]["callbacks"] = {
  componentDidMount: function(nextProps) {
    jQuery('#'+this.props.question.id).on('hidden.bs.modal', function (e) {
			e.stopPropagation();
			if (jQuery('.modal.in').length > 0) {
				jQuery('body').addClass('modal-open');
			}
		});

		jQuery('#'+this.props.question.id).on('click', '[data-dismiss="modal"]', function(e) {
			e.stopPropagation();
		});
  }
}
;