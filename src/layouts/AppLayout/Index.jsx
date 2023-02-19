import React from "react";
import ManinMenu from "../../components/MainMenu/Index";
import { features } from "../../features";

const Layout = () => {
  return (
    <React.Fragment>
      <ManinMenu features={features} />
    </React.Fragment>
  );
};

export default Layout;
