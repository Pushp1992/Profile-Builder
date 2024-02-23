import React from "react";
import PropTypes from "prop-types";

export const TextArea = ({
  name,
  value,
  rows,
  cols,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <textarea
      wrap="hard"
      name={name}
      value={value}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
};

TextArea.displayName = "TextAreaComponent";

TextArea.defaultProp = {
  placeholder: "Enter text",
  className: "text-area",
};

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
