
import { useState } from "react";

import { TextField } from "../../TextField/TextField";
import { TextArea } from "../../TextArea/TextArea";
import { ImageUploadButton } from "../../ImageUploadButton/ImageUploadButton";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import classNames from "classnames";

import "./style.css";

const companyComponent = () => {
  const data = {
    logo: null,
    companyTitle: "",
    designation: '',
    companyLocation: '',
    tenure: "",
    companyDesc: "",
  };

  const [heading, setHeading] = useState({
    text: "company",
    subText: "",
  });

  const [list, setList] = useState([data]);

  const handleInputChange = (event, index) => {
    event.preventDefault();

    let logoUrl;
    const { name, value } = event.target;

    if (name === "subText") {
      setHeading({ ...heading, [name]: value });
      return;
    }

    if (name === "logo") {
      logoUrl = URL.createObjectURL(event.target.files[0]);
    }

    const newList = [...list];
    newList[index][name] = name !== "logo" ? value : logoUrl;
    setList(newList);
  };

  const saveCompanyData = (event) => {
    event.preventDefault();
    // Note: Final payload is coming as an object of keys instead array
    const result = { ...heading, ...list };
    console.log(result);
  };

  const addNewcard = (event) => {
    event.preventDefault();
    setList([...list, data]);
  };

  return (
    <Grid container spacing={2} className="child-section-container">
      <Grid xs={12} className="child-section-actionBtn">
        <button>cancel</button>
        <button onClick={saveCompanyData}>save</button>
      </Grid>

      <Grid
        container
        spacing={2}
        className={classNames(
          "child-section-container-body",
          "child-section-container-body--company"
        )}
      >
        <Grid xs={12} className="child-section-head">
          <h4>{heading.text}</h4>
          <TextArea
            className="company"
            name="subText"
            placeholder="Add subtext here..."
            value={heading.subText}
            onChange={handleInputChange}
            rows="3"
            cols="auto"
          />
        </Grid>

        {list.map((companyData, index) => {
          return (
            <Grid xs={12} md={12} lg={12} key={index}>
              <div className="company-card">
                {companyData.logo === null ? (
                  <ImageUploadButton
                    onChange={(event) => handleInputChange(event, index)}
                  />
                ) : (
                  <Avatar alt="Travis Howard" src={companyData.logo} />
                )}

                <TextField
                  className="companyData-input-field"
                  name="companyTitle"
                  placeholder="Enter company title"
                  value={companyData.companyTitle}
                  onChange={(event) => handleInputChange(event, index)}
                />
                {/* <div> */}
                <TextField
                  className="companyData-input-field"
                  name="tenure"
                  placeholder="+ Add timeline"
                  value={companyData.tenure}
                  onChange={(event) => handleInputChange(event, index)}
                />
                {/* </div> */}
                <TextArea
                  className="company"
                  name="companyDesc"
                  placeholder="Add description"
                  value={companyData.companyDesc}
                  onChange={(event) => handleInputChange(event, index)}
                  rows="3"
                  cols="auto"
                />
              </div>
            </Grid>
          );
        })}

        <Grid xs={12} md={12} lg={12}>
          <div className="company-card-add-btn-container">
            <IconButton
              aria-label="add"
              name="addTechStack"
              onClick={addNewcard}
            >
              <AddIcon color="primary" fontSize="small"/>
             <span className="btn-text">Add next</span>
            </IconButton> 
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default companyComponent;
