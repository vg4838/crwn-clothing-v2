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
  overflow-y: auto;
  
  /* Custom scrollbar styling for webkit browsers */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent; /* Remove vertical background */
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
  /* For Firefox */
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;
`;

export const CartTotal = styled.div`
  padding: 10px 0;
  margin-top: 10px;
  font-weight: 600;
  font-size: 16px;
  color: #333;
  text-align: right;
`;
