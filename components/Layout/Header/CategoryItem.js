import { Button, Menu, MenuItem } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { headerCategories } from "./styles";

const CategoryItem = ({ id, title, children = [] }) => {
  const classes = headerCategories();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        size="small"
        disableRipple
        aria-controls={`menu-item-${id}`}
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.categoryLabel}
        variant="text"
        endIcon={anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      >
        {title}
      </Button>
      <Menu
        id={`menu-item-${id}`}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {children.map((child) => (
          <MenuItem key={child.id} onClick={handleClose}>
            {child.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

CategoryItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.array,
};

export default CategoryItem;
