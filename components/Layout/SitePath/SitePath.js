import { Box, Breadcrumbs, Container, Typography } from "@material-ui/core";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import { siteMapStyles } from "./styles";

const SitePath = ({ links }) => {
  const classes = siteMapStyles();
  const list = [...links];
  const last = list.pop();

  return (
    <Box className={classes.root}>
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          {list.map((item, index) => (
            <Link key={index} href={item.path} passHref>
              <a className={classes.itemLink}>{item.title}</a>
            </Link>
          ))}
          <Typography color="textPrimary">{last.title}</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );
};

SitePath.propTypes = {
  links: PropTypes.array.isRequired,
};

export default SitePath;
