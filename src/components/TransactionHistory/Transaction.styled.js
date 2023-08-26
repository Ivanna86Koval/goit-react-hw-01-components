import styled from 'styled-components';

export const Transactions = styled.table`
  background-color: white;

  border: 2px solid #000;
  border-radius: 30px;

  box-shadow: 1px 5px 15px 5px #000000;
  width: 800px;
  padding: 20px;
  margin-bottom: 30px;
  transition: scale 300ms;
`;
export const TableHead = styled.th`
  padding: 16px 50px;
  background: rgb(0, 188, 213);
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 600;
`;

export const TableDate = styled.td`
  padding: 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`;
