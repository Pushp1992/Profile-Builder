import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import "./style.css";

export const ProfileHeader = () => {
  return (
    <Grid container spacing={2} className="profile-header-container">
      <Grid xs={8} md={8} lg={8} xl={8} className="left-menu">
        <Grid container spacing={3}>
          <Grid xs={2}>Site Builder</Grid>
          <Grid xs={2}>Sections</Grid>
          <Grid xs={2}>Preferences</Grid>
        </Grid>
      </Grid>
      <Grid xs={4} md={4} lg={4} xl={4} className="right-menu">
        <Grid container spacing={3} className="left-menu-btn">
          <Grid xs={2}>
            <Button variant="text" className="preview-page-btn">Preview</Button>
          </Grid>
          <Grid xs={2}>
            <Button variant="contained" size="small">
              <Link to="/public-view" className="right-menu-publish">
                Publish
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
