import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

import { TextField } from "../../TextField/TextField";
import { TextArea } from "../../TextArea/TextArea";
import "./style.css";

const IntroductionComponent = () => {
  const [introSectionData, setIntroSectionData] = useState({
    siteTitle: "",
    profilePhoto: null,
    profileTitle: "",
    profileSubTitle: "",
    profileName: "",
    profileEmail: "",
  });

  const handleInputChange = (event) => {
    event.stopPropagation();

    const { name, value } = event.target;
    setIntroSectionData({ ...introSectionData, [name]: value });
  };

  const uploadPhoto = (event) => {
    event.preventDefault();

    const { name } = event.target;
    const file = URL.createObjectURL(event.target.files[0]);
    setIntroSectionData({ ...introSectionData, [name]: file });
  };

  return (
    <Grid container spacing={2} className="parent-container">
      <Grid xs={12} sm={12} md={12}>
        <div>
          <TextField
            className="site-title"
            name="siteTitle"
            placeholder="Enter site title"
            value={introSectionData.siteTitle}
            onChange={handleInputChange}
          />
        </div>
      </Grid>
      <Grid xs={12} sm={2} md={4}>
        <div
          className="profile-photo"
          name="profilePhoto"
          style={{
            backgroundImage: `url(${introSectionData.profilePhoto})`,
            backgroundSize: "100% auto",
          }}
        >
          <input
            type="file"
            id="imagefile"
            name="profilePhoto"
            onChange={uploadPhoto}
          />
        </div>
      </Grid>
      <Grid
        xs={12}
        sm={5}
        md={4}
        className="profile-title-container"
        smOffset={3}
        mdOffset={0}
      >
        <div className="profile-title-subtitle">
          <TextArea
            className="profile-title"
            name="profileTitle"
            placeholder="Click to add title"
            value={introSectionData.profileTitle}
            onChange={handleInputChange}
            rows="3"
          />
          <TextArea
            className="profile-subtitle"
            name="profileSubTitle"
            placeholder="Click to add subtitle"
            value={introSectionData.profileSubTitle}
            onChange={handleInputChange}
            rows="3"
          />
        </div>
      </Grid>
      <Grid xs={12} sm={7} md={8}>
        <div className="profile-name-email">
          <TextField
            className="profile-name"
            name="profileName"
            placeholder="Your name here"
            value={introSectionData.profileName}
            onChange={handleInputChange}
          />
          <TextField
            className="profile-email"
            name="profileEmail"
            placeholder="Enter email"
            value={introSectionData.profileEmail}
            onChange={handleInputChange}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default IntroductionComponent;
