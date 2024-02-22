import Grid from "@mui/material/Unstable_Grid2";
import './style.css';

export const NavBar = () => {
  return (
    <Grid container spacing={1} lg={{ flexGrow: 0 }} id="navbar-parent">
      <Grid xs={4} sm={1} md={1} lg={1} mdOffset={4} smOffset={4} lgOffset={6}>
        <div>Home</div>
      </Grid>
      <Grid xs={4} sm={1}  lg={1}  xsOffset={4} md={1} mdOffset="auto" smOffset="auto" lgOffset="auto">
        <div>About</div>
      </Grid>
      <Grid xs={4} sm={1}  lg={1}  xsOffset={4} md={1} mdOffset="auto" smOffset="auto" lgOffset="auto">
        <div>Skills</div>
      </Grid>
      <Grid xs={4} sm={1}  lg={1}  xsOffset={4} md={1} mdOffset="auto" smOffset="auto" lgOffset="auto">
        <div>Projects</div>
      </Grid>
      <Grid xs={4} sm={1}  lg={1}  xsOffset={4} md={1} mdOffset="auto" smOffset="auto" lgOffset="auto">
        <div>Experience</div>
      </Grid>
      <Grid xs={4} sm={1}  lg={1}  xsOffset={4} md={1} mdOffset="auto" smOffset="auto" lgOffset="auto">
        <div>Connect</div>
      </Grid>
    </Grid>
  );
};
