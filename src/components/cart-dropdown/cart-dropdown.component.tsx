import { useCallback, forwardRef } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CartTotal,
} from './cart-dropdown.styles';

const CartDropdown = forwardRef<HTMLDivElement>((props, ref) => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const goToCheckoutHandler = useCallback(() => {
    if (currentUser) {
      navigate('/checkout');
    } else {
      // Store the intended destination in sessionStorage
      sessionStorage.setItem('redirectAfterAuth', '/checkout');
      navigate('/sign-in');
    }
  }, [navigate, currentUser]);

  return (
    <CartDropdownContainer ref={ref}>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      {cartItems.length > 0 && (
        <CartTotal>Total: ${cartTotal}</CartTotal>
      )}
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
});

CartDropdown.displayName = 'CartDropdown';

export default CartDropdown;
