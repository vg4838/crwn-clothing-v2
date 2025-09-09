import styled from 'styled-components';

export const HamburgerContainer = styled.div`
  display: block;
  position: relative;
  z-index: 1001;
`;

export const HamburgerIcon = styled.div<{ isOpen: boolean }>`
  width: 30px;
  height: 24px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  
  span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: #e8e9eb;
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
    
    &:nth-child(1) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    
    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'rotate(0)'};
    }
  }
  
  &:hover span {
    background-color: #f06543;
  }
`;

export const MenuOverlay = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 70px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const MenuContent = styled.div`
  width: 280px;
  background-color: #313638;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 0 0 8px 8px;
  animation: slideDown 0.3s ease;
  
  @keyframes slideDown {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const CloseButton = styled.button`
  display: none;
`;

export const MenuItem = styled.div`
  padding: 0;
  border-bottom: 1px solid rgba(232, 233, 235, 0.1);
  
  &:last-child {
    border-bottom: none;
    margin-top: auto;
  }
`;

export const MenuLink = styled.a`
  display: block;
  padding: 20px 30px;
  color: #e8e9eb;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
  
  &:hover {
    background-color: rgba(240, 101, 67, 0.1);
    border-left-color: #f06543;
    color: #f06543;
    padding-left: 35px;
  }
`;

export const SignOutButton = styled.button`
  display: block;
  width: 100%;
  padding: 20px 30px;
  background: none;
  border: none;
  color: #e8e9eb;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
  
  &:hover {
    background-color: rgba(240, 101, 67, 0.1);
    border-left-color: #f06543;
    color: #f06543;
    padding-left: 35px;
  }
`;
