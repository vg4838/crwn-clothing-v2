import styled from 'styled-components';

export const ThankYouContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #4caf50;
  color: white;
  font-size: 48px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
`;

export const ThankYouHeader = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: 300;
`;

export const ThankYouSubtext = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const OrderDetailsSection = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
  text-align: left;
`;

export const OrderInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoLabel = styled.span`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const InfoValue = styled.span`
  font-size: 1.1rem;
  color: #333;
  font-weight: 600;
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #e0e0e0;
  margin: 30px 0;
`;

export const OrderSummarySection = styled.div`
  text-align: left;
  margin-bottom: 40px;

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 20px;
    font-weight: 300;
  }
`;

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;

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
`;

export const TotalSection = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  div:first-child {
    display: flex;
    flex-direction: column;
    gap: 5px;

    span {
      font-size: 0.9rem;
      color: #666;
    }
  }

  div:last-child {
    text-align: right;

    strong {
      font-size: 1.3rem;
      color: #333;
    }
  }
`;

export const ActionButtonsSection = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
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

export const SecondaryButton = styled.button`
  background-color: transparent;
  color: black;
  border: 2px solid black;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 180px;

  &:hover {
    background-color: black;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;
