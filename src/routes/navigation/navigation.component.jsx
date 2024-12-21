import React from "react";
import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CrwnLogo from "../../assets/crown.svg";
import "../navigation/navigation.component.scss";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import {SignOutUser} from "../../utils/firebase.utils"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

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

          {currentUser ? (
            <span className="nav-link" onClick={SignOutUser}>SIGN OUT</span>
          ) : (
            <Link className="sign-in" to="/Auth">
              Sign-In
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen  && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
