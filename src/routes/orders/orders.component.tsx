import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectOrders, selectOrdersIsLoading } from '../../store/orders/order.selector';
import { fetchOrdersStart } from '../../store/orders/order.action';

import Spinner from '../../components/spinner/spinner.component';

import {
  OrdersContainer,
  OrdersHeader,
  OrdersSubtext,
  OrdersList,
  OrderCard,
  OrderHeader,
  OrderId,
  OrderDate,
  OrderStatus,
  OrderTotal,
  OrderItems,
  OrderItem,
  OrderItemImage,
  OrderItemDetails,
  OrderItemName,
  OrderItemQuantity,
  OrderItemPrice,
  EmptyOrdersContainer,
  EmptyOrdersIcon,
  EmptyOrdersText,
  ShopNowButton
} from './orders.styles';

import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const userOrders = useSelector(selectOrders);
  const isLoading = useSelector(selectOrdersIsLoading);

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchOrdersStart());
    }
  }, [dispatch, currentUser]);

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    
    let date;
    if (timestamp.toDate) {
      // Firestore Timestamp
      date = timestamp.toDate();
    } else if (timestamp instanceof Date) {
      date = timestamp;
    } else {
      date = new Date(timestamp);
    }
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return '#4caf50';
      case 'processing':
        return '#ff9800';
      case 'shipped':
        return '#2196f3';
      case 'cancelled':
        return '#f44336';
      default:
        return '#666';
    }
  };

  const handleShopNow = () => {
    navigate('/shop');
  };

  if (!currentUser) {
    navigate('/auth');
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (!userOrders || userOrders.length === 0) {
    return (
      <EmptyOrdersContainer>
        <EmptyOrdersIcon>📦</EmptyOrdersIcon>
        <EmptyOrdersText>
          <h2>No Orders Yet</h2>
          <p>You haven't placed any orders yet. Start shopping to see your order history here!</p>
        </EmptyOrdersText>
        <ShopNowButton onClick={handleShopNow}>
          Start Shopping
        </ShopNowButton>
      </EmptyOrdersContainer>
    );
  }

  return (
    <OrdersContainer>
      <OrdersHeader>My Orders</OrdersHeader>
      <OrdersSubtext>
        View and track all your orders in one place
      </OrdersSubtext>

      <OrdersList>
        {userOrders.map((order) => (
          <OrderCard key={order.id}>
            <OrderHeader>
              <div>
                <OrderId>Order #{order.id.slice(-8).toUpperCase()}</OrderId>
                <OrderDate>{formatDate(order.createdAt)}</OrderDate>
              </div>
              <div>
                <OrderStatus color={getStatusColor(order.status)}>
                  {order.status.toUpperCase()}
                </OrderStatus>
                <OrderTotal>{formatPrice(order.total)}</OrderTotal>
              </div>
            </OrderHeader>

            <OrderItems>
              {order.items.map((item, index) => (
                <OrderItem key={`${item.id}-${index}`}>
                  <OrderItemImage src={item.imageUrl} alt={item.name} />
                  <OrderItemDetails>
                    <OrderItemName>{item.name}</OrderItemName>
                    <OrderItemQuantity>Quantity: {item.quantity}</OrderItemQuantity>
                  </OrderItemDetails>
                  <OrderItemPrice>{formatPrice(item.price * item.quantity)}</OrderItemPrice>
                </OrderItem>
              ))}
            </OrderItems>
          </OrderCard>
        ))}
      </OrdersList>
    </OrdersContainer>
  );
};

export default Orders;
