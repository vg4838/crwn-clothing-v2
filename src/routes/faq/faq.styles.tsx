import styled from 'styled-components';

export const FAQContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 40px;
  
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const FAQTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

export const FAQItem = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
`;

type FAQQuestionProps = {
  $isOpen: boolean;
};

export const FAQQuestion = styled.button<FAQQuestionProps>`
  width: 100%;
  padding: 25px 30px;
  background: ${({ $isOpen }) => $isOpen ? '#f8f9fa' : '#ffffff'};
  border: none;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: #f8f9fa;
  }
  
  @media screen and (max-width: 768px) {
    padding: 20px;
    font-size: 1rem;
  }
`;

type ToggleIconProps = {
  $isOpen: boolean;
};

export const ToggleIcon = styled.span<ToggleIconProps>`
  font-size: 1.5rem;
  font-weight: 300;
  color: #2c3e50;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  flex-shrink: 0;
  margin-left: 20px;
`;

type FAQAnswerProps = {
  $isOpen: boolean;
};

export const FAQAnswer = styled.div<FAQAnswerProps>`
  max-height: ${({ $isOpen }) => $isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: #ffffff;
  
  padding: ${({ $isOpen }) => $isOpen ? '0 30px 25px 30px' : '0 30px'};
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  
  @media screen and (max-width: 768px) {
    padding: ${({ $isOpen }) => $isOpen ? '0 20px 20px 20px' : '0 20px'};
    font-size: 0.9rem;
  }
`;
