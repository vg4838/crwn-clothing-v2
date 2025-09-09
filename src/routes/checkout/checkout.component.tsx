import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

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
              <span>Total: ${cartTotal}</span>
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
