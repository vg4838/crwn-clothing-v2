import styled from 'styled-components';

export const SignUpContainer = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 40px;
  border: 1px solid #e9ecef;
  
  @media screen and (max-width: 600px) {
    max-width: 90vw;
    padding: 30px 20px;
  }
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
  h1 {
    color: #2c3e50;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 12px;
    letter-spacing: -0.5px;
  }
  
  p {
    color: #6c757d;
    font-size: 16px;
    margin: 0;
    line-height: 1.5;
  }
  
  @media screen and (max-width: 600px) {
    margin-bottom: 30px;
    
    h1 {
      font-size: 28px;
    }
    
    p {
      font-size: 14px;
    }
  }
`;

export const FooterSection = styled.div`
  text-align: center;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #e9ecef;
  
  p {
    color: #6c757d;
    font-size: 14px;
    margin: 0;
    
    a {
      color: #3498db;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
      
      &:hover {
        color: #2980b9;
        text-decoration: underline;
      }
    }
  }
`;
