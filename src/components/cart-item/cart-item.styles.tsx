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
  margin: 5px 0;
`;

export const Arrow = styled.div`
  cursor: pointer;
  font-size: 18px;
  user-select: none;
  color: #333;
  
  &:hover {
    color: #000;
  }
`;

export const Value = styled.span`
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
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
