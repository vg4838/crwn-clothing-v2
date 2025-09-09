import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 380px;
  align-items: center;
  position: relative;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #e0e0e0;
  }

  img {
    width: 100%;
    height: 75%;
    object-fit: cover;
    transition: all 0.3s ease;
    cursor: default;
  }

  button {
    width: 85%;
    opacity: 0;
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
    display: flex;
    transition: all 0.3s ease;
    font-weight: 600;
    letter-spacing: 0.5px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    img {
      transform: scale(1.05);
    }

    button {
      opacity: 1;
      transform: translateY(-50%) translateY(-5px);
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
    height: 320px;

    button {
      display: flex;
      opacity: 0.9;
      min-width: unset;
      padding: 8px 12px;
      font-size: 14px;
      top: 55%;
    }

    &:hover {
      transform: none;
      
      img {
        transform: none;
      }

      button {
        opacity: 1;
        transform: translateY(-50%);
      }
    }
  }

  @media screen and (max-width: 400px) {
    width: 80vw;
    height: 300px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-top: 1px solid #f0f0f0;
  gap: 10px;
`;

export const Name = styled.span`
  flex: 1;
  font-weight: 600;
  font-size: 16px;
  color: #2c3e50;
  line-height: 1.3;
  margin-right: 10px;
  text-transform: capitalize;
  letter-spacing: 0.3px;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: #e74c3c;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const AddedToCartOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 95%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  animation: fadeIn 0.3s ease-in-out;

  span {
    color: white;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.1);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 800px) {
    span {
      font-size: 16px;
    }
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #f8f9fa;
  border-radius: 6px;
  padding: 2px 6px;
  border: 1px solid #e9ecef;
  justify-self: center;
`;

export const QuantityButton = styled.button`
  background-color: #000;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    background-color: #333;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const QuantityValue = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  min-width: 20px;
  text-align: center;
`;
