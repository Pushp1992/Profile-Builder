import { useState } from "react";

import { TextField } from "../../TextField/TextField";
import { TextArea } from "../../TextArea/TextArea";
import Button from "@mui/material/Button";
import { ImageUploadButton } from "../../ImageUploadButton/ImageUploadButton";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import classNames from "classnames";

import "./style.css";

const BlogComponent = () => {
  const data = {
    logo: null,
    blogTitle: "",
    blogLink: ""
  };

  const [heading, setHeading] = useState({
    text: "Blogs",
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

  const saveBlogData = (event) => {
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
      <Button variant="text" className="child-section-actionBtn--cancel">
          cancel
        </Button>
        <Button
          variant="contained"
          size="small"
          className="child-section-actionBtn--save"
          onClick={saveBlogData}
        >
          save
        </Button>
      </Grid>

      <Grid
        container
        spacing={2}
        className={classNames(
          "child-section-container-body",
          "child-section-container-body--blog"
        )}
      >
        <Grid xs={12} className="child-section-head">
          <h4>{heading.text}</h4>
          <TextArea
            className="blog"
            name="subText"
            placeholder="Add subtext here..."
            value={heading.subText}
            onChange={handleInputChange}
            rows="3"
            cols="auto"
          />
        </Grid>

        {list.map((blogData, index) => {
          return (
            <Grid xs={6} md={6} lg={6} key={index}>
              <div className="blog-card">
                {blogData.logo === null ? (
                  <ImageUploadButton
                    onChange={(event) => handleInputChange(event, index)}
                  />
                ) : (
                  <Avatar alt="Travis Howard" src={blogData.logo} />
                )}

                <TextArea
                  className="blogData-input-field"
                  name="blogTitle"
                  placeholder="Enter blog title"
                  value={blogData.blogTitle}
                  onChange={(event) => handleInputChange(event, index)}
                  rows="3"
                  cols="auto"
                />

                {/* <div> */}
                <TextField
                  className="blogData-input-field"
                  name="blogLink"
                  placeholder="Add link"
                  value={blogData.blogLink}
                  onChange={(event) => handleInputChange(event, index)}
                />
                {/* </div> */}
              </div>
            </Grid>
          );
        })}

        <Grid xs={6} md={6} lg={6}>
          <div className="blog-card">
            <IconButton
              aria-label="add"
              name="addTechStack"
              onClick={addNewcard}
            >
              <AddIcon color="primary" />
            </IconButton>
            <div className="blog-add-btn">Add new card</div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BlogComponent;
