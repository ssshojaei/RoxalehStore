import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { menuBtnStyles } from "./styles";

const MenuBtn = ({ children, ...props }) => {
  const classes = menuBtnStyles();

  return (
    <Button classes={{ root: classes.removeHoverBG }} disableRipple {...props}>
      {children}
    </Button>
  );
};

MenuBtn.propTypes = {
  children: PropTypes.element.isRequired,
  props: PropTypes.object,
};

export default MenuBtn;
