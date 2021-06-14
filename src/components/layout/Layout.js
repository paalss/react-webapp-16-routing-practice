import classes from "./Layout.module.css";
import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </Fragment>
  );
};

export default Layout;
