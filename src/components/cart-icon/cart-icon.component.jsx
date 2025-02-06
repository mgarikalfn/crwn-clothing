import { useContext } from 'react';
import ShoppingIcon from '../../assets/ShoppingIcon';
import {CartIconContainer,ShoppingIconContainer,ItemCount} from './cart-icon.styles';
import {CartContext} from '../../contexts/cart.context';

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIconContainer>
            <ShoppingIcon  />
            </ShoppingIconContainer>
           
            <ItemCount >{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;