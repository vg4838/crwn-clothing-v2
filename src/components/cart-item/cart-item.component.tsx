import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CartItemContainer, ItemDetails, QuantityContainer, Arrow, Value, RemoveButton } from './cart-item.styles';

import { CartItem as TCartItem } from '../../store/cart/cart.types';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action';

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <QuantityContainer>
          <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={addItemHandler}>&#10095;</Arrow>
        </QuantityContainer>
        <span>${price}</span>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
