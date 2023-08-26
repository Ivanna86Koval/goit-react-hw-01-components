import styled from 'styled-components';

export const Statistic = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;

  border: 2px solid #000;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 5px 5px 15px 5px #000000;
  gap: 35px;
  transition: scale 300ms;
`;

export const UploudTitle = styled.h2`
  font-size: 32px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  gap: 5px;
`;

export const ListItem = styled.li`
  width: 100px;
  padding: 20px 30px;
  background: rgb(0, 188, 213);;
  color: rgb(255, 255, 255);
  text-align: center;
`;

export const SpanLabel = styled.span`
  font-weight: 400;
  line-height: 20px;
`;
export const SpanPercentage = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  margin-top: 10px;
`;
