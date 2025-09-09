import styled from 'styled-components';

export const CategoryPageContainer = styled.div`
  padding: 20px 40px;
  
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
