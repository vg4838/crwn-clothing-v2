import styled from 'styled-components';

export const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 40px;
  
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const ContactTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

export const ContactInfo = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const InfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
`;

export const ContactForm = styled.form`
  background: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media screen and (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 25px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid #e1e8ed;
  border-radius: 8px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #2c3e50;
  }
  
  &:invalid {
    border-color: #e74c3c;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid #e1e8ed;
  border-radius: 8px;
  transition: border-color 0.3s ease;
  resize: vertical;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #2c3e50;
  }
  
  &:invalid {
    border-color: #e74c3c;
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(44, 62, 80, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media screen and (max-width: 768px) {
    padding: 12px 30px;
    font-size: 1rem;
  }
`;
