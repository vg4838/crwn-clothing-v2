import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 1;
  padding: 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  user-select: none;
  text-align: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  /* iOS specific fixes */
  @media screen and (max-width: 768px) {
    min-width: 140px;
    padding: 0 25px;
    font-size: 14px;
    height: 45px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    min-width: auto;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }

  /* iOS specific fixes for Google button */
  @media screen and (max-width: 480px) {
    margin-top: 10px;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }

  /* iOS specific fixes for inverted button */
  @media screen and (max-width: 480px) {
    border: 2px solid black; /* Thicker border for better touch targets */
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
