import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100%;
  padding: 0;
`;

export const MainCategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  margin-bottom: 0;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
    margin-bottom: 0;
  }
`;

export const ApparelSection = styled.div`
  width: 100%;
`;

export const ApparelTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin: 40px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin: 30px 0;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  gap: 0;
  width: 100%;
  
  & > div {
    flex: 1;
    height: 300px;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
    
    &:hover {
      transform: scale(1.02);
      z-index: 10;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    
    & > div {
      height: 250px;
    }
  }
`;
