import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  position: relative;

  span {
    font-size: 16px;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 0;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 2px 6px;
  width: fit-content;
  font-size: 12px;
`;

export const Arrow = styled.div`
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  user-select: none;
  color: #333;
  padding: 1px 4px;
  border-radius: 50%;
  transition: all 0.2s ease;
  min-width: 16px;
  min-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #000;
  }
`;

export const Value = styled.span`
  margin: 0 4px;
  font-size: 12px;
  font-weight: bold;
  min-width: 16px;
  text-align: center;
`;

export const RemoveButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 18px;
  color: #999;
  
  &:hover {
    color: #000;
  }
`;
