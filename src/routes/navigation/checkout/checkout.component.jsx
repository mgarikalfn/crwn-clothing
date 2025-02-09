import React, { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";
import CheckoutItem from "../../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems,cartTotal} = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      
        {cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        })}
      <span className="total">$ {cartTotal}</span>
    </div>
  );
};

export default CheckOut;
