import React from "react";
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import  CrwnLogo from "../../assets/crown.svg";
import '../navigation/navigation.component.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo">
            <img src={CrwnLogo} alt="logo" />

          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/Shop">
            Shop
          </Link>

          <Link className="sign-in" to="/Sign-in">
            Sign-In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
