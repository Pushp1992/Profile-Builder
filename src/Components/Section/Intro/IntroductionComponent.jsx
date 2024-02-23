import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

import { TextField } from "../../TextField/TextField";
import {TextArea}from '../../TextArea/TextArea';
import "./style.css";

const IntroductionComponent = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const uploadPhoto = (event) => {
    event.preventDefault();

    const file = URL.createObjectURL(event.target.files[0]);
    setProfilePhoto(file);
  };

  return (
    <Grid container spacing={2} className="parent-container">
      <Grid xs={12} sm={12} md={12}>
        <div>
          <TextField className="site-title" placeholder="Enter site title" />
        </div>
      </Grid>
      <Grid xs={12} sm={2} md={4}>
        <div
          className="profile-photo"
          onChange={uploadPhoto}
          style={{
            backgroundImage: `url(${profilePhoto})`,
            backgroundSize: "100% auto",
          }}
        >
          <input
            type="file"
            id="imagefile"
            name="imagefile"
            onChange={uploadPhoto}
          />
        </div>
      </Grid>
      <Grid xs={12} sm={5} md={4} className="profile-title-container" smOffset={3} mdOffset={0}>
        <div className="profile-title-subtitle">
          <TextArea
            className="profile-title"
            placeholder="Click to add title"
            rows="3"
          />
          <TextArea
            className="profile-subtitle"
            placeholder="Click to add subtitle"
            rows="3"
          />
        </div>
      </Grid>
      <Grid xs={12} sm={7} md={8}>
        <div className="profile-name-email">
          <TextField
            className="profile-name"
            placeholder="Your name here"
          />
          <TextField
            className="profile-email"
            placeholder="Enter email"
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default IntroductionComponent;
