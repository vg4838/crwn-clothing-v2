import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid #e8e9eb;
  padding: 20px 15px;
  font-size: 18px;
  align-items: center;
  background: #fff;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  &:last-child {
    border-bottom: none;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    min-height: auto;
    padding: 15px 10px;
    font-size: 16px;
    gap: 15px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      transform: scale(3.5);
      z-index: 1000;
      position: relative;
      border-radius: 12px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    padding-right: 0;
    justify-content: center;
    
    img {
      width: 80px;
      height: 80px;
      
      &:hover {
        transform: scale(2.5);
      }
    }
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #313638;

  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
    text-align: center;
    font-size: 16px;
  }
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #e8e9eb;
  border: 1px solid #e0dfd5;
  border-radius: 8px;
  padding: 2px 4px;
  width: fit-content;
`;

export const Arrow = styled.div`
  cursor: pointer;
  user-select: none;
  font-size: 18px;
  font-weight: bold;
  color: #313638;
  padding: 4px 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  min-width: 28px;
  min-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #f06543;
  }
`;

export const Value = styled.span`
  margin: 0 8px;
  min-width: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #313638;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  font-size: 24px;
  color: #f06543;
  font-weight: bold;
  transition: all 0.2s ease;
  user-select: none;
  
  &:hover {
    color: #f09d51;
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }

  @media screen and (max-width: 800px) {
    padding-left: 0;
    font-size: 28px;
  }
`;
