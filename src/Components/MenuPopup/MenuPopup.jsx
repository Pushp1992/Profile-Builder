import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import FaceIcon from '@mui/icons-material/Face';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import HubIcon from '@mui/icons-material/Hub';
import SchoolIcon from '@mui/icons-material/School';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';

import {StyledMenu} from './StyledMenu';
import { MenuPopUpContext } from "../../Page/context";

import './style.css';

export function MenuPopUpButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { showSection, setShowSection } = useContext(MenuPopUpContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.preventDefault();
    const name = event.target?.attributes?.name?.nodeValue;

    setShowSection({ ...showSection, [name]: !showSection[name] });
    setAnchorEl(null);
  };

  return (
    <div className="menu-pop-btn">
      <Button
        id="demo-customized-button"
        variant="text"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
      >
        <AddIcon fontSize="small" />
        Click to add sections
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem name="aboutMe" onClick={handleClose} disableRipple>
          <FaceIcon  />
          Add About You
        </MenuItem>
        <MenuItem name="skillSet" onClick={handleClose} disableRipple>
          <MilitaryTechIcon />
          Add Skillsets
        </MenuItem>
        <MenuItem name="projects" onClick={handleClose} disableRipple>
          <HubIcon />
          Add Projects
        </MenuItem>
        <MenuItem name="experience" onClick={handleClose} disableRipple>
          <SchoolIcon />
          Add Experience
        </MenuItem>
        <MenuItem name="blog" onClick={handleClose} disableRipple>
          <RssFeedIcon />
          Add Blog
        </MenuItem>
        <MenuItem name="cta" onClick={handleClose} disableRipple>
          <DashboardIcon />
          Add CTA
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
