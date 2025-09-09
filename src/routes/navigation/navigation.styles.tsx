import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
  background: #313638;
  border-bottom: 1px solid #e8e9eb;
  box-shadow: 0 2px 8px rgba(49, 54, 56, 0.15);
  padding: 0 40px;
  position: sticky;
  top: 0;
  z-index: 100;
  margin-left: calc(-50vw + 50%);

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 20px;
    margin-bottom: 0;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 180px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: visible;

  .logo {
    height: 99px;
    width: auto;
    transition: all 0.3s ease;
  }

  &:hover .logo {
    transform: scale(1.05);
  }

  @media screen and (max-width: 800px) {
    width: 120px;
    padding: 0px;
    
    .logo {
      height: 79px;
    }
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: #e8e9eb;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 6px;
  position: relative;

  &:hover {
    color: #ffffff;
    background-color: rgba(232, 233, 235, 0.1);
  }

  &:active {
    background-color: rgba(232, 233, 235, 0.15);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #f06543;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 75%;
  }
`;
