import { Box, Divider, Grid } from "@material-ui/core";
import React from "react";
import MenuBtn from "./MenuBtn";
import { headerTopStyles } from "./styles";

const HeaderTop = () => {
  const classes = headerTopStyles();

  return (
    <Box className={classes.root}>
      <Grid container className={classes.marginY}>
        <Grid item md={6} sm={12}>
          <Box>
            <MenuBtn color="secondary" component="a">
              Chat with us
            </MenuBtn>
            <MenuBtn component="span">+420 336 775 664</MenuBtn>
            <MenuBtn component="span">OrdinarySaleh@pm.me</MenuBtn>
          </Box>
        </Grid>
        <Grid item md={6} sm={12}>
          <Box display="flex" justifyContent="end">
            <MenuBtn color="secondary" component="a">
              Blog
            </MenuBtn>
            <MenuBtn color="secondary" component="a">
              About Us
            </MenuBtn>
            <MenuBtn color="secondary" component="a">
              Careers
            </MenuBtn>
          </Box>
        </Grid>
      </Grid>
      <Divider classes={{ root: classes.divider }} />
    </Box>
  );
};

export default HeaderTop;
