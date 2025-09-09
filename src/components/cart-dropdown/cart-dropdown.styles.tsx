import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CartTotal = styled.div`
  padding: 10px 0;
  margin-top: 10px;
  border-top: 1px solid #e0e0e0;
  font-weight: 600;
  font-size: 16px;
  color: #333;
  text-align: right;
`;
