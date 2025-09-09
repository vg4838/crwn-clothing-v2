import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 380px;
  }

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const ErrorMessage = styled.div`
  color: #f06543;
  font-size: 14px;
  margin: 10px 0;
  padding: 10px;
  background-color: #ffeaea;
  border: 1px solid #f06543;
  border-radius: 4px;
  text-align: center;
`;
