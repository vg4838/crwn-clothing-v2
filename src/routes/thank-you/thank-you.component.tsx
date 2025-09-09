import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { selectCurrentUser } from '../../store/user/user.selector';
import { getUserOrders } from '../../utils/firebase/firebase.utils';
import { Order } from '../../store/orders/order.types';

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
  const [orderData, setOrderData] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const orderId = searchParams.get('orderId');
  const paymentIntentId = searchParams.get('payment_intent');

  useEffect(() => {
    // If no order ID or payment intent, redirect to home
    if (!orderId && !paymentIntentId) {
      navigate('/');
      return;
    }

    // Fetch the order data from Firebase
    const fetchOrderData = async () => {
      if (currentUser) {
        try {
          const orders = await getUserOrders(currentUser.displayName || 'user');
          // Find the most recent order (should be the one just created)
          const latestOrder = orders[0];
          if (latestOrder) {
            setOrderData(latestOrder);
          }
        } catch (error) {
          console.error('Error fetching order data:', error);
        }
      }
      setIsLoading(false);
    };

    fetchOrderData();
  }, [orderId, paymentIntentId, navigate, currentUser]);

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  const handleViewOrders = () => {
    navigate('/orders');
  };

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  if (isLoading) {
    return (
      <ThankYouContainer>
        <div>Loading order details...</div>
      </ThankYouContainer>
    );
  }

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
            <InfoValue>{orderData?.orderNumber || orderId || paymentIntentId?.slice(-8).toUpperCase()}</InfoValue>
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
            <InfoValue>{formatPrice(orderData?.total || 0)}</InfoValue>
          </InfoItem>
        </OrderInfoGrid>
      </OrderDetailsSection>

      <Divider />

      <OrderSummarySection>
        <h3>Order Summary</h3>
        {orderData?.items?.map((item: any) => (
          <OrderItem key={item.id}>
            <OrderItemImage src={item.imageUrl} alt={item.name} />
            <OrderItemDetails>
              <OrderItemName>{item.name}</OrderItemName>
              <OrderItemQuantity>Qty: {item.quantity}</OrderItemQuantity>
            </OrderItemDetails>
            <OrderItemPrice>{formatPrice(item.price * item.quantity)}</OrderItemPrice>
          </OrderItem>
        )) || <div>No items found</div>}
        
        <TotalSection>
          <div>
            <span>Subtotal: {formatPrice(orderData?.subtotal || 0)}</span>
            <span>Shipping: {formatPrice(orderData?.shipping || 0)}</span>
            <span>Tax: {formatPrice(orderData?.tax || 0)}</span>
          </div>
          <div>
            <strong>Total: {formatPrice(orderData?.total || 0)}</strong>
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
