import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TableContainer,
  Total,
  MainContent,
  TableSection,
  PaymentSection,
} from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const hasRedirected = useRef(false);
  
  useEffect(() => {
    // Only redirect if we're certain the user is not authenticated (null, not undefined)
    // and we haven't already redirected to prevent loops
    if (currentUser === null && !hasRedirected.current) {
      hasRedirected.current = true;
      sessionStorage.setItem('redirectAfterAuth', '/checkout');
      navigate('/auth');
    }
  }, [currentUser, navigate]);
  
  // Show loading while authentication state is being determined
  if (currentUser === undefined) {
    return <div>Loading...</div>;
  }
  
  // Don't render checkout if user is not authenticated
  if (currentUser === null) {
    return null;
  }
  
  // Calculate tax (8% rate, same as payment form)
  const taxRate = 0.08;
  const taxAmount = Math.round(cartTotal * taxRate * 100) / 100;
  const finalTotal = cartTotal + taxAmount;

  return (
    <CheckoutContainer>
      <MainContent>
        <TableSection>
          <CheckoutHeader>
            <HeaderBlock>
              <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Remove</span>
            </HeaderBlock>
          </CheckoutHeader>
          <TableContainer>
            {cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <Total>
              <div className="breakdown">
                <div className="line-item">
                  <span>Subtotal: ${cartTotal.toFixed(2)}</span>
                </div>
                <div className="line-item">
                  <span>Tax (8%): ${taxAmount.toFixed(2)}</span>
                </div>
                <div className="line-item total-line">
                  <span>Total: ${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </Total>
          </TableContainer>
        </TableSection>
        <PaymentSection>
          <PaymentForm />
        </PaymentSection>
      </MainContent>
    </CheckoutContainer>
  );
};

export default Checkout;
