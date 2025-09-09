import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 6px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-1px);
  }
`;

export const ShoppingCartIcon = styled.span`
  font-size: 18px;
  color: #ffffff;
  transition: all 0.3s ease;
  filter: grayscale(100%) brightness(0) invert(1);
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  top: -2px;
  right: -2px;
  color: #ffffff;
  background-color: #e74c3c;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #2c3e50;
  min-width: 18px;
`;
