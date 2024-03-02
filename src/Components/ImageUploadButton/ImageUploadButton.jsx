import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const styles = {
  justifyContent: 'left',
};

/**
 * ImageUploadButton
 * 
 * @param {Function} onChange - Function to trigger when image is uploaded
 * @param {object} className  - Classname gven to input btn
 * @returns {HTMLElement} <Button />
 */
export const ImageUploadButton = ({ onChange, className }) => {
  return (
    <Button
      component="label"
      variant="outline"
      tabIndex={-1}
      className="image-btn-left-align"
      style={styles}
      startIcon={<ImageSearchIcon />}
    >
      <VisuallyHiddenInput name="logo" type="file" className={className} onChange={onChange} />
    </Button>
  );
};

ImageUploadButton.displayName = "ImageUploadButtonComponent";

ImageUploadButton.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};
