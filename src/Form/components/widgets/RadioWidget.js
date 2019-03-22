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
        <div className="question-fancy__icon-col self-start mb-sm">
          {/* <h1 className="pb-xs">
            <i className="material-icons text-4xl">{options.icon}</i>
          </h1> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 58.625 57.227">
            <g data-name="Group 91" transform="translate(-137.041 -492.214)">
              <path data-name="Path 66" d="M186.888 521.429a17.548 17.548 0 0 1-3.166 2.082c-10.754 5.963-26.009 6.413-36.4.243a16.273 16.273 0 0 1-3.167-2.4l-2.161 2.161.244 1.422 2.121 12.2.063.267c1.674 5.209 8.911 10.466 21.31 10.466s18.575-5.406 20.194-10.466l2.766-12.384.33-1.461z" fill="#76afb5"/>
              <path data-name="Path 67" d="M190.6 507.969a34.448 34.448 0 0 0-10.16-11.63 21.889 21.889 0 0 0-15.283-3.936 33.265 33.265 0 0 0-3.7.809c-.9.228-1.736.448-2.585.613-.605.11-1.21.2-1.815.283a22.855 22.855 0 0 0-4.125.864c-3.7 1.25-6.5 4.149-8.738 6.475-3.52 3.646-6.962 7.63-7.15 12.69a13.507 13.507 0 0 0 3.858 9.523c.409.44.856.864 1.328 1.281a22.816 22.816 0 0 0 4.51 2.978c.723.377 1.493.731 2.31 1.076a40.706 40.706 0 0 0 15.857 3.128 44.078 44.078 0 0 0 19.148-4.385c.511-.243 1.014-.495 1.509-.762a21.944 21.944 0 0 0 3.12-1.957 11.431 11.431 0 0 0 3.983-4.958c1.301-3.378.625-7.331-2.067-12.092z" fill="#eae78c"/>
              <circle data-name="Ellipse 30" cx="2.437" cy="2.437" r="2.437" transform="translate(152.97 505.782)" fill="#231f20"/>
              <circle data-name="Ellipse 31" cx="2.437" cy="2.437" r="2.437" transform="translate(172.711 502.769)" fill="#231f20"/>
              <circle data-name="Ellipse 32" cx="2.437" cy="2.437" r="2.437" transform="translate(177.585 518.056)" fill="#231f20"/>
              <circle data-name="Ellipse 33" cx="2.437" cy="2.437" r="2.437" transform="translate(164.246 513.065)" fill="#231f20"/>
              <circle data-name="Ellipse 34" cx="2.437" cy="2.437" r="2.437" transform="translate(150.534 518.056)" fill="#231f20"/>
              <path data-name="Path 68" d="M192.962 509.54a34.413 34.413 0 0 0-10.16-11.629 21.89 21.89 0 0 0-15.283-3.937 33.089 33.089 0 0 0-3.7.81c-.895.228-1.736.448-2.585.613-.6.11-1.21.2-1.815.282a22.878 22.878 0 0 0-4.125.865c-3.7 1.249-6.5 4.149-8.738 6.474-3.52 3.646-6.961 7.63-7.15 12.69a13.515 13.515 0 0 0 3.858 9.524c.409.44.857.864 1.328 1.28a22.733 22.733 0 0 0 4.51 2.978c.723.377 1.493.731 2.31 1.077a40.724 40.724 0 0 0 15.857 3.127 44.082 44.082 0 0 0 19.149-4.384c.51-.244 1.013-.495 1.508-.763a21.931 21.931 0 0 0 3.12-1.956 11.452 11.452 0 0 0 3.984-4.958c1.295-3.379.619-7.333-2.068-12.093zm-1.6 10.679a7.064 7.064 0 0 1-2.117 2.781 17.458 17.458 0 0 1-3.166 2.082c-.071.04-.134.071-.205.11a40.068 40.068 0 0 1-18.606 4.573 36.8 36.8 0 0 1-14.332-2.82 25.8 25.8 0 0 1-3.261-1.619 16.276 16.276 0 0 1-3.167-2.4c-.125-.125-.251-.251-.377-.385a9.529 9.529 0 0 1-2.8-6.686c.133-3.686 2.939-6.884 6.05-10.113 2.051-2.129 4.369-4.542 7.166-5.485a19.353 19.353 0 0 1 3.426-.691c.66-.094 1.328-.189 1.988-.314.974-.189 1.925-.433 2.837-.668a32.226 32.226 0 0 1 3.284-.731 15.359 15.359 0 0 1 2.09-.149 18.646 18.646 0 0 1 10.4 3.441 30.581 30.581 0 0 1 8.973 10.333c2.073 3.672 2.671 6.533 1.814 8.741z" fill="#231f20"/>
              <path data-name="Path 69" d="M189.245 523a17.458 17.458 0 0 1-3.166 2.082c-10.753 5.964-26.008 6.414-36.4.244a16.276 16.276 0 0 1-3.167-2.4l-2.16 2.161.243 1.422 2.122 12.195.062.267c1.674 5.21 8.911 10.467 21.31 10.467s18.575-5.406 20.194-10.467l2.766-12.383.33-1.462zm-4.73 14.851c-1.886 5.649-10.018 7.661-16.43 7.661-8.659 0-15.99-3.2-17.522-7.622l-1.462-8.4c10.331 5.39 24.8 5.879 37.316-.18z" fill="#231f20"/>
              <g data-name="Group 90">
                <g data-name="Group 83">
                  <path data-name="Path 70" d="M154.188 544.022A.779.779 0 0 1 154 544a.787.787 0 0 1-.6-.666l-1.683-13.473a.786.786 0 0 1 1.56-.2l1.574 12.6a.787.787 0 0 1 .2 1.085l-.222.325a.786.786 0 0 1-.641.351z" fill="#231f20"/>
                </g>
                <g data-name="Group 84">
                  <path data-name="Path 71" d="M158.7 545.972a.786.786 0 0 1-.77-.636 120.417 120.417 0 0 1-1.909-14.617.786.786 0 0 1 .73-.838.8.8 0 0 1 .837.731 118.833 118.833 0 0 0 1.885 14.424.789.789 0 0 1-.773.936z" fill="#231f20"/>
                </g>
                <g data-name="Group 85">
                  <path data-name="Path 72" d="M163.332 547.555a.786.786 0 0 1-.775-.657 72.394 72.394 0 0 1-.9-15.365.786.786 0 1 1 1.57.077 70.74 70.74 0 0 0 .653 13.6.787.787 0 0 1 .358.783l-.134.891a.785.785 0 0 1-.771.669z" fill="#231f20"/>
                </g>
                <g data-name="Group 86">
                  <path data-name="Path 73" d="M167.551 547.893a.787.787 0 0 1-.782-.871 75.842 75.842 0 0 0 .149-14.876.786.786 0 1 1 1.565-.138 77.524 77.524 0 0 1-.063 14.331.786.786 0 0 1 .027.607l-.159.432a.786.786 0 0 1-.737.515z" fill="#231f20"/>
                </g>
                <g data-name="Group 87">
                  <path data-name="Path 74" d="M172.058 547.542h-.061a.786.786 0 0 1-.724-.843l1.161-15.106a.786.786 0 0 1 1.567.122l-1.161 15.1a.786.786 0 0 1-.782.727z" fill="#231f20"/>
                </g>
                <g data-name="Group 88">
                  <path data-name="Path 75" d="M176.648 546.89a.765.765 0 0 1-.194-.024.787.787 0 0 1-.573-.934 60.7 60.7 0 0 0 1.467-14.808.786.786 0 0 1 .766-.805.8.8 0 0 1 .8.766 62.292 62.292 0 0 1-1.234 13.938.778.778 0 0 1-.016.364l-.264.932a.786.786 0 0 1-.752.571z" fill="#231f20"/>
                </g>
                <g data-name="Group 89">
                  <path data-name="Path 76" d="M181.755 544.2a.785.785 0 0 1-.666-.37l-.208-.333a.786.786 0 0 1 .223-1.067 66.408 66.408 0 0 0 .538-12.69.786.786 0 1 1 1.569-.085 68.039 68.039 0 0 1-.679 13.877.791.791 0 0 1-.777.668z" fill="#231f20"/>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="question-fancy__text-col mb-md sm:mx-md">
          <div  className="h2 mb-xs">{options.title}</div>
          <div  className="bodyLarge">{options.description}</div>
        </div>
        <div className="question-fancy__actions pt-sm ml-auto">
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
