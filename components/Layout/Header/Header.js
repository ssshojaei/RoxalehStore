import { Container } from "@material-ui/core";
import React from "react";
import HeaderCategories from "./HeaderCategories";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <>
      <Container>
        <HeaderTop />
        <HeaderMiddle />
      </Container>
      <HeaderCategories />
    </>
  );
};

export default Header;
