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
  background-color: pink;
`;

export const ListItem = styled.li`
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border-radius: 13px;

  width: 70px;
  height: 70px;
  transition: scale 300ms, transform 300ms;
`;
export const SpanLabel = styled.span`
  font-size: 22px;
  color: #fff;
`;
export const SpanPercentage = styled.span`
  font-size: 28px;
  font-weight: 500;
  color: #fff;
`;
