import PropTypes from "prop-types";
import React from "react";
import { Header } from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header title="Home" />
      {children}
      <h1>Footer</h1>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
