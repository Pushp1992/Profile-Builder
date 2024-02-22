import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";

import { TextField } from "../../TextField/TextField";
import './style.css';

const IntroductionComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={12}>
        <div>
            <TextField className="site-title" placeholder="Enter site title"/>
        </div>
      </Grid>
      <Grid xs={12} sm={4} md={4}>
        <div className="profile-photo">Photos</div>
      </Grid>
      <Grid xs={12} sm={4} md={4}>
        <div> title and subtitle</div>
      </Grid>
      <Grid xs={6} md={8}>
        <div>name and email</div>
      </Grid>
    </Grid>
  );
};

export default IntroductionComponent;
