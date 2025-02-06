import React from "react";
import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CrwnLogo from "../../assets/crown.svg";
import {NavigationContainer,NavLink,LogoContainer,NavLinksContainer} from "./navigation-component.jsx";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import {SignOutUser} from "../../utils/firebase.utils"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>

        <LogoContainer  to="/">
            <img src={CrwnLogo} alt="logo" />
        </LogoContainer>
        
        <NavLinksContainer >
          <NavLink to="/Shop">
            Shop
          </NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={SignOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink className="sign-in" to="/Auth">
              Sign-In
            </NavLink>
          )}

          <CartIcon />
        </NavLinksContainer>
        {isCartOpen  && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
