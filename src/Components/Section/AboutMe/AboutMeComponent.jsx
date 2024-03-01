import classNames from "classnames";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { TextArea } from "../../TextArea/TextArea";

import RichTextEditor from '../../RichTextEditor/editor';

import "./style.css";

const AboutMeComponent = () => {
  return (
    <Grid container spacing={2} className="child-section-container">
      <Grid xs={12} className="child-section-actionBtn">
        <Button variant="text" className="child-section-actionBtn--cancel">cancel</Button>
        <Button variant="contained" size="small" className="child-section-actionBtn--save">save</Button>
      </Grid>
      <div className="child-section-container-body">
        <Grid xs={12} className="section-heading">
          <h3>About Me</h3>
        </Grid>
        <Grid xs={12} sm={12} md={12} className="editorWrapper">
          <RichTextEditor />
        </Grid>
      </div>
    </Grid>
  );
};

export default AboutMeComponent;
