import { useState } from 'react';

import {TextArea} from '../../TextArea/TextArea';
import Grid from "@mui/material/Unstable_Grid2";
import classNames from "classnames";

import "./style.css";

const SkillSetComponent = () => {

  const [skillSetSectionData, setSkillSetSectionData] = useState({
    skillSetDesc: '',
    techStackDesc: ''
  });

  const handleInputChange = (event) => {
    event.preventDefault();

    const {name, value} = event.target;
    setSkillSetSectionData({...skillSetSectionData, [name]: value});
  };

  return (
    <Grid container spacing={2} className="child-section-container">
      <Grid xs={12} className="child-section-actionBtn">
        <button>cancel</button>
        <button>save</button>
      </Grid>
      <div
        className={classNames(
          "child-section-container-body",
          "child-section-container-body--skillset"
        )}
      >
        <Grid xs={6} md={6} lg={6}>
          <div className="skillset-card">
            <h4>Skillsets</h4>
            <TextArea
              className="skillset"
              name="skillSetDesc"
              placeholder="Write description here ..."
              value={skillSetSectionData.skillSetDesc}
              onChange={handleInputChange}
              rows="3"
              cols="auto"
            />
            <h2>test</h2>
            <h2>test</h2>
          </div>
        </Grid>
        <Grid xs={6} md={6} lg={6}>
          <div className="skillset-card">
            <h4>Stack</h4>
            <TextArea
              className="techstack"
              name="techStackDesc"
              placeholder="Write description here ..."
              value={skillSetSectionData.techStackDesc}
              onChange={handleInputChange}
              rows="3"
              cols="auto"
            />
          </div>
        </Grid>
      </div>
    </Grid>
  );
};

export default SkillSetComponent;
