import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { CartIconContainer, ItemCount, ShoppingCartIcon } from './cart-icon.styles';

const CartIcon = forwardRef<HTMLDivElement>((props, ref) => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer ref={ref} onClick={toggleIsCartOpen}>
      <ShoppingCartIcon>🛒</ShoppingCartIcon>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
});

CartIcon.displayName = 'CartIcon';

export default CartIcon;
