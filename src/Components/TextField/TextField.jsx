import React from "react";
import PropTypes from "prop-types";

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
