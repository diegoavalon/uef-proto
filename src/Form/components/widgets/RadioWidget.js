import React from "react";
import PropTypes from "prop-types";

function RadioWidget(props) {
  const {
    options,
    value,
    required,
    disabled,
    readonly,
    autofocus,
    onChange,
  } = props;
  // Generating a unique field name to identify this set of radio buttons
  const name = Math.random().toString();
  const { enumOptions, enumDisabled } = options;
  // checked={checked} has been moved above name={name}, As mentioned in #349;
  // this is a temporary fix for radio button rendering bug in React, facebook/react#7630.
  const radioButtonElements = (
    <div className={options.inline ? `eh-radio-group eh-radio-group--inline` : 'eh-radio-group'}>
      {enumOptions.map((option, i) => {
        const checked = option.value === value;
        const itemDisabled =
          enumDisabled && enumDisabled.indexOf(option.value) !== -1;
        const disabledCls =
          disabled || itemDisabled || readonly ? "disabled" : "";
        const radio = (
          <input
            id={i + name}
            className="eh-radio__input"
            type="radio"
            checked={checked}
            name={name}
            required={required}
            value={option.value}
            disabled={disabled || itemDisabled || readonly}
            autoFocus={autofocus && i === 0}
            onChange={_ => onChange(option.value)}
          />
        );

        const selectableCard = (
          <div key={i} className="selectable-card">
            {radio}
            <label className="eh-radio__label capitalize bodyLarge" htmlFor={i + name}>
              {option.label}
            </label>
          </div>
        );

        if (options.selectableCard) return selectableCard;

        if (options.inline) {
          return (
            <div key={i} className={`eh-radio__wrapper--inline ${disabledCls}`}>
              {radio}
              <label className="eh-radio__label capitalize bodyLarge" htmlFor={i + name}>
                {option.label}
              </label>
            </div>
          )
        }
        
        return (
          <div key={i} className={`eh-radio__wrapper ${disabledCls}`}>
            {radio}
            <label className="eh-radio__label capitalize bodyLarge" htmlFor={i + name}>
              {option.label}
            </label>
          </div>
        );
      })}
    </div>
  );
  
  if (options.questionFancy) {
    return (
      <div className="question-fancy w-full flex flex-col sm:flex-row items-center">
        <div className="question-fancy__icon-col self-start">
          <h1 className="mb-sm">
            <i className="material-icons text-4xl">{options.icon}</i>
          </h1>
        </div>
        <div className="question-fancy__text-col mb-md sm:mx-md">
          <div  className="h2 mb-xs">{options.title}</div>
          <div  className="bodyLarge">{options.description}</div>
        </div>
        <div className="question-fancy__actions ml-auto">
          {radioButtonElements}
        </div>
      </div>
    )
  } else {
    return {radioButtonElements};
  }
}

RadioWidget.defaultProps = {
  autofocus: false,
};

if (process.env.NODE_ENV !== "production") {
  RadioWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.shape({
      enumOptions: PropTypes.array,
      inline: PropTypes.bool,
    }).isRequired,
    value: PropTypes.any,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
  };
}
export default RadioWidget;
