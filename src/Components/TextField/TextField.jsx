import React from "react";
import PropTypes from "prop-types";

/**
 * TextField Component
 * 
 * @param {string} name - Input field name
 * @param {string} id - Input field id
 * @param {string} value - Input field value
 * @param {Function} onChange - Input field change function
 * @param {string} placeholder - [Input field placeholder]
 * @param {Object} className -  Input field classname
 * @returns {HTMLElement} <input />
 */
export const TextField = ({
  name,
  id,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
};

TextField.displayName = "TextFieldComponent";

TextField.defaultProp = {
  placeholder: "Enter text",
  className: "text-field-radius",
};

TextField.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
