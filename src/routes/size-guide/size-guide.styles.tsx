import styled from 'styled-components';

export const SizeGuideContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 40px;
  
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const SizeGuideTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #313638;
  text-align: center;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

export const Section = styled.div`
  margin-bottom: 50px;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #313638;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
`;

export const SizeTable = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  margin-bottom: 30px;
  border: 1px solid #e8e9eb;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background: #313638;
  color: white;
  font-weight: 600;
  
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  
  &:nth-child(even) {
    background: #e8e9eb;
  }
  
  &:hover {
    background: #e0dfd5;
  }
`;

export const TableCell = styled.div`
  padding: 15px 10px;
  text-align: center;
  border-right: 1px solid #e8e9eb;
  
  &:last-child {
    border-right: none;
  }
  
  @media screen and (max-width: 768px) {
    padding: 12px 8px;
    font-size: 0.9rem;
  }
`;

export const InfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #313638;
  text-align: center;
  margin: 30px 0;
  
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin: 25px 0;
  }
`;

export const MeasurementTips = styled.div`
  background: #e0dfd5;
  padding: 30px;
  border-radius: 10px;
  border-left: 4px solid #f06543;
  
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const TipItem = styled.div`
  margin-bottom: 15px;
  font-size: 1rem;
  line-height: 1.6;
  color: #313638;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  strong {
    color: #f06543;
    font-weight: 600;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 12px;
  }
`;
