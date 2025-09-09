import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cart.action';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  QuantityContainer,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

import { CartItem } from '../../store/cart/cart.types';

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <QuantityContainer>
          <Arrow onClick={removeItemHandler}>-</Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={addItemHandler}>+</Arrow>
        </QuantityContainer>
      </Quantity>
      <BaseSpan> {price * quantity}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
