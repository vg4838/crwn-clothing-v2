import styled from 'styled-components';

export const OrdersContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const OrdersHeader = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: 300;
  text-align: center;
`;

export const OrdersSubtext = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 40px;
  text-align: center;
  line-height: 1.6;
`;

export const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const OrderCard = styled.div`
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const OrderId = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 5px 0;
  font-weight: 600;
`;

export const OrderDate = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

export const OrderStatus = styled.span<{ color: string }>`
  background-color: ${props => props.color};
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
  display: inline-block;
`;

export const OrderTotal = styled.div`
  font-size: 1.3rem;
  color: #333;
  font-weight: 700;
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const OrderItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f8f8f8;

  &:last-child {
    border-bottom: none;
  }
`;

export const OrderItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 15px;
`;

export const OrderItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const OrderItemName = styled.span`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const OrderItemQuantity = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

export const OrderItemPrice = styled.span`
  font-size: 1rem;
  color: #333;
  font-weight: 600;
  min-width: 80px;
  text-align: right;
`;

export const EmptyOrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
  min-height: 400px;
`;

export const EmptyOrdersIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
  opacity: 0.6;
`;

export const EmptyOrdersText = styled.div`
  margin-bottom: 30px;

  h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 10px;
    font-weight: 300;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
    max-width: 400px;
  }
`;

export const ShopNowButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 180px;

  &:hover {
    background-color: #333;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;
