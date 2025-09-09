import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  max-width: 90vw;
  box-sizing: border-box;
  padding: 0 20px;

  h2 {
    margin: 10px 0;
  }
  
  @media screen and (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    padding: 0 10px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
`;
