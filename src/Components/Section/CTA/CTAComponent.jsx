import React, { useState } from "react";

import { TextField } from "../../TextField/TextField";
import { TextArea } from "../../TextArea/TextArea";
import { ImageUploadButton } from "../../ImageUploadButton/ImageUploadButton";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";
import classNames from "classnames";

import "./style.css";

const CTAComponent = () => {
  const [ctaData, setCTAData] = useState({
    text: "Lets Connect!",
    subText: "",
    logo: null,
    blogURL: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    let logoUrl;

    if (name === "logo") {
      logoUrl = URL.createObjectURL(event.target.files[0]);
    }

    setCTAData({ ...ctaData, [name]: name !== "logo" ? value : logoUrl });
  };

  const saveCTAData = (event) => {
    event.preventDefault();
    console.log(ctaData);
  };

  return (
    <Grid container spacing={2} className="child-section-container">
      <Grid xs={12} className="child-section-actionBtn">
        <button>cancel</button>
        <button onClick={saveCTAData}>save</button>
      </Grid>

      <Grid
        container
        spacing={2}
        className={classNames(
          "child-section-container-body",
          "child-section-container-body--cta"
        )}
      >
        <Grid xs={12} md={12} lg={12}>
          <h4>{ctaData.text}</h4>
        </Grid>
        <Grid xs={12} md={12} lg={12}>
          <TextArea
            className="company"
            name="subText"
            placeholder="Add subtext here..."
            value={ctaData.subText}
            onChange={handleInputChange}
            rows="3"
            cols="auto"
          />
        </Grid>
        <Grid xs={3} md={3} lg={3}>
          {ctaData.logo === null ? (
            <ImageUploadButton onChange={handleInputChange} />
          ) : (
            <Avatar alt="Travis Howard" src={ctaData.logo} />
          )}
        </Grid>
        <Grid xs={6} md={6} lg={6}>
          <TextField
            className="blogURL-input-field"
            name="blogURL"
            placeholder="Enter url"
            value={ctaData.blogURL}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CTAComponent;
