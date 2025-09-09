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
  
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
    row-gap: 40px;
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;
    row-gap: 30px;
  }
  
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 25px;
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;
