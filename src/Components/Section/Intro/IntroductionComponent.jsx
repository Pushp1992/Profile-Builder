import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

import { TextField } from "../../TextField/TextField";
import "./style.css";

const IntroductionComponent = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const uploadPhoto = (event) => {
    event.preventDefault();

    const file = URL.createObjectURL(event.target.files[0]);
    setProfilePhoto(file);
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={12} md={12}>
        <div>
          <TextField className="site-title" placeholder="Enter site title" />
        </div>
      </Grid>
      <Grid xs={12} sm={2} md={4}>
        <div
          className="profile-photo"
          onChange={uploadPhoto}
          style={{ backgroundImage: `url(${profilePhoto})`, backgroundSize: '100% auto' }}
        >
          <input
            type="file"
            id="imagefile"
            name="imagefile"
            onChange={uploadPhoto}
          />
        </div>
      </Grid>
      <Grid xs={12} sm={5} md={4}>
        <div className="profile-title-subtitle"> title and subtitle</div>
      </Grid>
      <Grid xs={12} sm={7} md={8}>
        <div>name and email</div>
      </Grid>
    </Grid>
  );
};

export default IntroductionComponent;
