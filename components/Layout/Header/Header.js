import { Container } from "@material-ui/core";
import React from "react";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <Container>
      <HeaderTop />
      <HeaderMiddle />
    </Container>
  );
};

export default Header;
