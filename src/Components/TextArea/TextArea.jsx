import React from "react";
import PropTypes from "prop-types";

/**
 * TextArea Component
 * 
 * @param {string} name - TextArea name
 * @param {string} id - TextArea id
 * @param {string} value - TextArea value
 * @param {string} rows - TextArea rows count
 * @param {string} cols - TextArea cols count
 * @param {function} onChange -  TextArea onChange function
 * @param {string} placeholder - [TextArea Placeholder]
 * @param {string} className - TextArea class
 * 
 * @returns {HTMLElement} <textarea />
 */
export const TextArea = ({
  name,
  id,
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
      id={id}
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
  id: PropTypes.string,
  value: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
