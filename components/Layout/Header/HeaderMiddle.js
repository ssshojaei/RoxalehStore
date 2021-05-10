import {
  Badge,
  Box,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Input,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import React from "react";
import { headerMiddleStyles } from "./styles";

const HeaderMiddle = () => {
  const classes = headerMiddleStyles();

  return (
    <Grid container>
      <Grid item md={3}>
        <Typography variant="h1" className={classes.title}>
          RoxalehStore
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Box display="flex" justifyContent="center">
          <Box className={classes.searchInput} display="flex" width="100%">
            <Box>
              <FormControl>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  disableUnderline
                  //   onChange={handleChange}
                >
                  <MenuItem value={10}>All Categories</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box width="100%">
              <Input
                disableUnderline
                id="standard-basic"
                placeholder="Standard"
                className={classes.input}
              />
            </Box>
            <Box>
              <IconButton aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item md={3}>
        <Box display="flex" justifyContent="end" alignItems="center">
          <IconButton aria-label="Dashboard">
            <PersonOutlineOutlinedIcon />
          </IconButton>
          <IconButton aria-label="search">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeaderMiddle;
