import styled from 'styled-components';

export const AccountContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const AccountHeader = styled.h1`
  font-size: 2.5rem;
  color: #313638;
  margin-bottom: 10px;
  font-weight: 300;
  text-align: center;
`;

export const AccountContent = styled.div`
  background-color: white;
  border: 1px solid #e8e9eb;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
`;

export const AccountSection = styled.div`
  margin-bottom: 30px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #313638;
  margin-bottom: 20px;
  font-weight: 600;
  border-bottom: 2px solid #f06543;
  padding-bottom: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #e8e9eb;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;

export const InfoLabel = styled.span`
  font-weight: 600;
  color: #313638;
  min-width: 150px;
  font-size: 1rem;
`;

export const InfoValue = styled.span`
  color: #313638;
  font-size: 1rem;
  flex: 1;
`;
