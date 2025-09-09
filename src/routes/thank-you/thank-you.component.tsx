import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import {
  ThankYouContainer,
  SuccessIcon,
  ThankYouHeader,
  ThankYouSubtext,
  OrderDetailsSection,
  OrderSummarySection,
  OrderItem,
  OrderItemImage,
  OrderItemDetails,
  OrderItemName,
  OrderItemQuantity,
  OrderItemPrice,
  TotalSection,
  ActionButtonsSection,
  PrimaryButton,
  SecondaryButton,
  OrderInfoGrid,
  InfoItem,
  InfoLabel,
  InfoValue,
  Divider
} from './thank-you.styles';

const ThankYou = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const orderId = searchParams.get('orderId');
  const paymentIntentId = searchParams.get('payment_intent');

  useEffect(() => {
    // If no order ID or payment intent, redirect to home
    if (!orderId && !paymentIntentId) {
      navigate('/');
    }
  }, [orderId, paymentIntentId, navigate]);

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  const handleViewOrders = () => {
    navigate('/orders');
  };

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  return (
    <ThankYouContainer>
      <SuccessIcon>✓</SuccessIcon>
      
      <ThankYouHeader>Thank You for Your Order!</ThankYouHeader>
      
      <ThankYouSubtext>
        Your payment has been processed successfully. We've sent a confirmation email to your registered email address.
      </ThankYouSubtext>

      <OrderDetailsSection>
        <OrderInfoGrid>
          <InfoItem>
            <InfoLabel>Order Number</InfoLabel>
            <InfoValue>{orderId || paymentIntentId?.slice(-8).toUpperCase()}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Customer</InfoLabel>
            <InfoValue>{currentUser?.displayName || 'Guest'}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Email</InfoLabel>
            <InfoValue>{currentUser?.email || 'N/A'}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Order Total</InfoLabel>
            <InfoValue>{formatPrice(cartTotal)}</InfoValue>
          </InfoItem>
        </OrderInfoGrid>
      </OrderDetailsSection>

      <Divider />

      <OrderSummarySection>
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <OrderItem key={item.id}>
            <OrderItemImage src={item.imageUrl} alt={item.name} />
            <OrderItemDetails>
              <OrderItemName>{item.name}</OrderItemName>
              <OrderItemQuantity>Qty: {item.quantity}</OrderItemQuantity>
            </OrderItemDetails>
            <OrderItemPrice>{formatPrice(item.price * item.quantity)}</OrderItemPrice>
          </OrderItem>
        ))}
        
        <TotalSection>
          <div>
            <span>Subtotal: {formatPrice(cartTotal)}</span>
            <span>Shipping: Free</span>
            <span>Tax: Included</span>
          </div>
          <div>
            <strong>Total: {formatPrice(cartTotal)}</strong>
          </div>
        </TotalSection>
      </OrderSummarySection>

      <ActionButtonsSection>
        <PrimaryButton onClick={handleContinueShopping}>
          Continue Shopping
        </PrimaryButton>
        {currentUser && (
          <SecondaryButton onClick={handleViewOrders}>
            View My Orders
          </SecondaryButton>
        )}
      </ActionButtonsSection>
    </ThankYouContainer>
  );
};

export default ThankYou;
