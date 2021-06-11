import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div className={classes.header}>
      <span className={classes.logo}>Great quotes</span>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/addQuote">Add quote</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/allQuotes">All quotes</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
