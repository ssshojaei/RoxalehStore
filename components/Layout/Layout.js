import PropTypes from "prop-types";
import React from "react";
import { Header } from "./Header";
import SitePath from "./SitePath/SitePath";

const Layout = ({ children, breadcrumbs = [] }) => {
  return (
    <div>
      <Header title="Home" />
      {breadcrumbs.length && <SitePath links={breadcrumbs} />}
      {children}
      <h1>Footer</h1>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
  breadcrumbs: PropTypes.array,
};

export default Layout;
