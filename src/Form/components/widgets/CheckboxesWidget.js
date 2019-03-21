import React from "react";
import PropTypes from "prop-types";

function selectValue(value, selected, all) {
  const at = all.indexOf(value);
  const updated = selected.slice(0, at).concat(value, selected.slice(at));
  // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order
  return updated.sort((a, b) => all.indexOf(a) > all.indexOf(b));
}

function deselectValue(value, selected) {
  return selected.filter(v => v !== value);
}

function CheckboxesWidget(props) {
  const { id, disabled, options, value, autofocus, readonly, onChange } = props;
  const { enumOptions, inline, toggle, toggleFancy } = options;

  return (
    <div className={`checkboxes flex flex-wrap items-start${inline ? '' : ' flex-col'}`} id={id}>
      {enumOptions.map((option, index) => {
        const checked = value.indexOf(option.value) !== -1;
        const disabledCls = disabled || readonly ? "disabled" : "";
        const checkbox = (
          <input
            className="eh-check__input"
            type="checkbox"
            id={`${id}_${index}`}
            checked={checked}
            disabled={disabled || readonly}
            autoFocus={autofocus && index === 0}
            onChange={event => {
              const all = enumOptions.map(({ value }) => value);
              if (event.target.checked) {
                onChange(selectValue(option.value, value, all));
              } else {
                onChange(deselectValue(option.value, value));
              }
            }}
          />
        );
        const toggleEl = (
          <span key={index} className={`eh-toggle__group my-sm ${disabledCls}`}>
            <label className="eh-toggle">
                {checkbox}
                <span className="eh-toggle__inner" role="presentation">
                    <span className="eh-toggle__label eh-toggle__label--checked">Yes</span>
                    <span className="eh-toggle__handle shadow-8dp">
                        <svg role="presentation" viewBox="0 0 15 15.343" xmlns="http://www.w3.org/2000/svg">                         
                            <path fill="#46b7b8" stroke="#ffffff" strokeWidth="2" className="eh-toggle__icon" d="M1.013 8.11c0-.223.078-.412.234-.568l1.14-1.14c.155-.155.345-.233.568-.233s.413.077.57.233l2.46 2.47 5.492-5.5c.156-.156.346-.234.568-.234.224 0 .413.077.57.233l1.138 1.14c.156.155.234.345.234.568 0 .224-.078.414-.234.57l-6.06 6.06-1.14 1.14c-.155.155-.345.233-.568.233s-.413-.078-.57-.234l-1.138-1.14-3.03-3.03c-.156-.156-.234-.346-.234-.57z"></path>
                        </svg>
                    </span>
                    <span className="eh-toggle__label eh-toggle__label--unchecked">No</span>
                </span>
            </label>
            <label className="eh-toggle__description bodyLarge" htmlFor={`${id}_${index}`}>{option.label}</label>
          </span>
        );
        
        // options passed into one string as "<title>:<subtitle>:<icon-name>"
        const toggleFancyOptions = option.label.split(':');
        const toggleFancyTitle = toggleFancyOptions[0];
        const toggleFancySubtitle = toggleFancyOptions[1];
        const toggleFancyEl = (
          <div key={index} className="toggle-fancy w-full flex items-center py-lg">
            <div className="toggle-fancy__icon-col self-start">
              <h1 className="text-display">{index + 1}</h1>
            </div>
            <div className="toggle-fancy__text-col mx-md">
              <label htmlFor={`${id}_${index}`} className="h2 mb-xs font-normal">{toggleFancyTitle}</label>
              <label htmlFor={`${id}_${index}`} className="bodyLarge">{toggleFancySubtitle}</label>
            </div>
            <div className="toggle-fancy__toggle-col ml-auto">
              <label className="eh-toggle">
                {checkbox}
                <span className="eh-toggle__inner" role="presentation">
                    <span className="eh-toggle__label eh-toggle__label--checked">Yes</span>
                    <span className="eh-toggle__handle shadow-8dp">
                        <svg role="presentation" viewBox="0 0 15 15.343" xmlns="http://www.w3.org/2000/svg">                         
                            <path fill="#46b7b8" stroke="#ffffff" strokeWidth="2" className="eh-toggle__icon" d="M1.013 8.11c0-.223.078-.412.234-.568l1.14-1.14c.155-.155.345-.233.568-.233s.413.077.57.233l2.46 2.47 5.492-5.5c.156-.156.346-.234.568-.234.224 0 .413.077.57.233l1.138 1.14c.156.155.234.345.234.568 0 .224-.078.414-.234.57l-6.06 6.06-1.14 1.14c-.155.155-.345.233-.568.233s-.413-.078-.57-.234l-1.138-1.14-3.03-3.03c-.156-.156-.234-.346-.234-.57z"></path>
                        </svg>
                    </span>
                    <span className="eh-toggle__label eh-toggle__label--unchecked">No</span>
                </span>
              </label>
            </div>
          </div>
        );

        if (toggle) return toggleEl;
        if (toggleFancy) return toggleFancyEl;
        
        return (
          <div key={index} className={`eh-check-group my-xs ${disabledCls}`}>
            {checkbox}
            <label className="eh-check__label" htmlFor={`${id}_${index}`}>
              <svg width="22px" height="22px" viewBox="0 0 18 18">
                <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                <polyline points="1 9 7 14 15 4"></polyline>
              </svg>
            </label>
            <label className="bodyLarge ml-sm mr-lg" htmlFor={`${id}_${index}`}>
              {option.label}
            </label>
          </div>
        );

      })}
    </div>
  );
}

CheckboxesWidget.defaultProps = {
  autofocus: false,
  options: {
    inline: false,
  },
};

if (process.env.NODE_ENV !== "production") {
  CheckboxesWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.shape({
      enumOptions: PropTypes.array,
      inline: PropTypes.bool,
    }).isRequired,
    value: PropTypes.any,
    required: PropTypes.bool,
    readonly: PropTypes.bool,
    disabled: PropTypes.bool,
    multiple: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
  };
}

export default CheckboxesWidget;
