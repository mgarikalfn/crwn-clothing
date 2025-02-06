import React from 'react';
import { CartItemContainer, ItemDetails, ItemName, CartItemImage } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={`${name}`} />
            <ItemDetails className="item-details">
                <ItemName className='name'>{name}</ItemName>
                <span className='price'>{quantity} X ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;