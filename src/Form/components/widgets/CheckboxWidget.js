import React from "react";
import PropTypes from "prop-types";
import DescriptionField from "../fields/DescriptionField.js";

function CheckboxWidget(props) {
  const {
    schema,
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    autofocus,
    onChange,
  } = props;

  if (props.options.toggleFancy) {
    return (
      <div className="toggle-fancy flex items-center">
        <div className="toggle-fancy__icon-col self-start">
          <svg width="53" height="71" viewBox="0 0 82 109" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fill="#FFFFFE" d="M48.916 108.857h32.965V75.891H48.916z"/>
              <path d="M34.359 29.517l-11.19 11.189L8.09 25.628c-3.077-3.077-3.077-8.113 0-11.19s8.113-3.077 11.19 0l15.079 15.079M45.549 40.706l-11.19-11.189 15.079-15.079c3.077-3.077 8.113-3.077 11.189 0 3.079 3.077 3.079 8.113 0 11.19L45.549 40.706" fill="#DE492A"/>
              <path d="M42.272 29.517H26.446V8.192c0-4.352 3.561-7.913 7.913-7.913s7.913 3.561 7.913 7.913v21.325M22.074 52.537l-2.204 6.916L.465 45.649 19.87 31.846l2.204 6.915v13.776" fill="#DE492A"/>
              <path d="M15.949 39.072v32.109c0 10.125 8.285 18.41 18.41 18.41 10.126 0 18.409-8.284 18.409-18.41V39.072c0-10.125-8.283-18.411-18.409-18.411-10.125 0-18.41 8.286-18.41 18.411" fill="#F9C623"/>
              <path d="M15.949 75.891c0 18.206 14.76 32.966 32.967 32.966 18.206 0 32.965-14.76 32.965-32.966 0-18.207-14.759-32.967-32.965-32.967-18.207 0-32.967 14.76-32.967 32.967" fill="#F9C623"/>
              <path d="M34.359 29.58c4.363 0 7.899 3.538 7.899 7.9s-3.536 7.899-7.899 7.899c-4.362 0-7.899-3.537-7.899-7.899s3.537-7.9 7.899-7.9" fill="#FFFFFE"/>
              <path d="M27.089 86.016l.008-21.736c.002-4.813 3.937-8.75 8.75-8.75h12.37c12.17 0 22.129 9.958 22.129 22.129v8.149c0 1.699-1.39 3.09-3.09 3.09-1.699 0-3.089-1.391-3.089-3.09v-4.516c0-1.699-1.391-3.089-3.09-3.089-1.7 0-3.09 1.39-3.09 3.089v4.516c0 1.699-1.391 3.09-3.09 3.09-1.699 0-3.09-1.391-3.09-3.09V81.34c0-1.699-1.39-3.09-3.09-3.09-1.699 0-3.09 1.391-3.09 3.09v4.516c0 1.699-1.39 3.089-3.089 3.089-1.7 0-3.09-1.39-3.09-3.089v-4.564c0-1.699-1.39-3.089-3.09-3.089-1.699 0-3.089 1.39-3.089 3.089 0 8.07-.001-3.344-.001 4.724 0 1.7-1.39 3.09-3.089 3.09-1.7 0-3.09-1.39-3.09-3.09" fill="#DE492A"/>
            </g>
          </svg>
        </div>
        <div className="toggle-fancy__text-col mx-md">
          <p className="h2 mb-xs font-normal">{props.options.title}</p>
          {props.options.description && <p className="bodyLarge">{props.options.description}</p>}
        </div>
        <div className="toggle-fancy__toggle-col ml-auto">
          {/* <ui-toggle></ui-toggle> */}
          <div className="eh-check-group">
            <input
              className="eh-check__input"
              type="checkbox"
              id={id}
              checked={typeof value === "undefined" ? false : value}
              required={required}
              disabled={disabled || readonly}
              autoFocus={autofocus}
              onChange={event => onChange(event.target.checked)}
            />
            <label className="eh-check__label" htmlFor={id}>
              <svg width="22px" height="22px" viewBox="0 0 18 18">
                <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                <polyline points="1 9 7 14 15 4"></polyline>
              </svg>
            </label>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`checkbox ${disabled || readonly ? "disabled" : ""}`}>
      {schema.description && (
        <DescriptionField description={schema.description} />
      )}

      <div className="eh-check-group">
        <input
          className="eh-check__input"
          type="checkbox"
          id={id}
          checked={typeof value === "undefined" ? false : value}
          required={required}
          disabled={disabled || readonly}
          autoFocus={autofocus}
          onChange={event => onChange(event.target.checked)}
        />
        <label className="eh-check__label" htmlFor={id}>
          <svg width="22px" height="22px" viewBox="0 0 18 18">
            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
          </svg>
        </label>
        <label className="bodyLarge ml-sm" htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
}

CheckboxWidget.defaultProps = {
  autofocus: false,
};

if (process.env.NODE_ENV !== "production") {
  CheckboxWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
  };
}

export default CheckboxWidget;
