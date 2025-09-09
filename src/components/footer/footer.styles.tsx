import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #e0dfd5;
  color: #313638;
  margin-top: 60px;
  
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  align-items: start;
  
  @media screen and (max-width: 768px) {
    padding: 40px 20px 30px;
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #f06543;
  margin: 0 0 10px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #313638;
  margin: 0;
  font-weight: bold;
`;

export const FooterLink = styled.a`
  color: #313638;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  transition: color 0.3s ease;
  
  &:hover {
    color: #f09d51;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px 0;
`;

export const SocialLink = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  transition: transform 0.3s ease;
  color: #0077b5;
  background: rgba(0, 119, 181, 0.1);
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  
  &:hover {
    transform: scale(1.3);
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #e8e9eb;
  padding: 20px 40px;
  text-align: center;
  background: #313638;
  color: #e8e9eb;
  
  p {
    color: #e8e9eb;
    margin: 0;
    font-weight: bold;
  }
  
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;
