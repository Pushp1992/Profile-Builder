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

export const ImageUploadButton = ({ onChange }) => {
  return (
    <Button
      component="label"
      variant="outline"
      tabIndex={-1}
      startIcon={<ImageSearchIcon />}
    >
      <VisuallyHiddenInput name="logo" type="file" onChange={onChange} />
    </Button>
  );
};

ImageUploadButton.displayName = "ImageUploadButtonComponent";

ImageUploadButton.propTypes = {
  onChange: PropTypes.func,
};
