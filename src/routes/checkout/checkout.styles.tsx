import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 95%;
  max-width: 1400px;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 50px;
  padding: 0 20px;
  
  @media screen and (max-width: 1024px) {
    width: 95%;
    margin: 20px auto 30px;
    padding: 0 10px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: flex-start;
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const TableSection = styled.div`
  flex: 2;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

export const PaymentSection = styled.div`
  flex: 1;
  min-width: 350px;
  position: sticky;
  top: 20px;
  
  @media screen and (max-width: 1024px) {
    position: static;
    min-width: 0;
    width: 100%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  background: #313638;
  color: white;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  letter-spacing: 0.5px;
  
  @media screen and (max-width: 800px) {
    padding: 15px 20px;
    font-size: 14px;
  }
  
  @media screen and (max-width: 600px) {
    padding: 12px 15px;
    font-size: 12px;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: uppercase;
  width: 23%;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;

  &:last-child {
    width: 8%;
    justify-content: center;
  }
  
  @media screen and (max-width: 600px) {
    font-size: 11px;
    
    &:nth-child(2) {
      display: none; // Hide description on very small screens
    }
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  background: white;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #e8e9eb;
  border-top: none;
`;

export const Total = styled.div`
  width: 100%;
  padding: 25px 30px;
  background: #f8f9fa;
  color: #313638;
  border-top: 2px solid #e8e9eb;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  .breakdown {
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 200px;
  }
  
  .line-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    span {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.3px;
    }
    
    &.total-line {
      border-top: 1px solid #e8e9eb;
      padding-top: 8px;
      margin-top: 4px;
      
      span {
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
        color: #f06543;
      }
    }
  }
  
  @media screen and (max-width: 800px) {
    justify-content: center;
    padding: 20px 25px;
    
    .breakdown {
      min-width: 180px;
    }
    
    .line-item span {
      font-size: 14px;
    }
    
    .line-item.total-line span {
      font-size: 18px;
    }
  }
`;
