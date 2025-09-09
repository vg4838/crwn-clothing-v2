import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  margin: 0;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 30px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;

  h2 {
    color: #2c3e50;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 24px;
    text-align: center;
    letter-spacing: -0.5px;
  }

  @media screen and (max-width: 800px) {
    max-width: 90vw;
    padding: 20px;
    
    h2 {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
`;

export const CardElementContainer = styled.div`
  padding: 16px 20px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: #ffffff;
  margin-bottom: 24px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }

  &:focus-within {
    border-color: #2980b9;
    box-shadow: 0 0 0 3px rgba(41, 128, 185, 0.15);
  }

  &::before {
    content: '💳';
    position: absolute;
    left: -8px;
    top: -8px;
    background: #3498db;
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);
  }

  .StripeElement {
    padding: 4px 0;
  }

  .StripeElement--focus {
    outline: none;
  }
`;

export const PaymentButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  background: #000000;
  border: none;
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: #333333;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const SecurityBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  padding: 8px 16px;
  background: rgba(52, 152, 219, 0.1);
  border-radius: 20px;
  font-size: 12px;
  color: #2980b9;
  font-weight: 500;

  &::before {
    content: '🔒';
    margin-right: 6px;
  }
`;

export const TestCardInfo = styled.div`
  background: linear-gradient(135deg, #f39c12, #e67e22);
  color: white;
  padding: 16px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.5;
  box-shadow: 0 3px 10px rgba(243, 156, 18, 0.3);

  h4 {
    margin: 0 0 8px 0;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    
    &::before {
      content: '⚠️';
      margin-right: 8px;
    }
  }

  .card-number {
    font-family: 'Courier New', monospace;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.2);
    padding: 4px 8px;
    border-radius: 4px;
    display: inline-block;
    margin: 4px 0;
    letter-spacing: 1px;
  }

  p {
    margin: 8px 0 0 0;
    font-size: 13px;
    opacity: 0.9;
  }
`;
