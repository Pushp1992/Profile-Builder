import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
      >
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
          <EditIcon />
          Add About You
        </MenuItem>
        <MenuItem name="skillSet" onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Add Skillsets
        </MenuItem>
        <MenuItem name="projects" onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Add Projects
        </MenuItem>
        <MenuItem name="experience" onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          Add Experience
        </MenuItem>
        <MenuItem name="blog" onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          Add Blog
        </MenuItem>
        <MenuItem name="cta" onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          Add CTA
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
