import styled from 'styled-components';

export const Passport = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  border-radius: 30px;
  margin-top: 30px;
  box-shadow: 5px 5px 15px 5px #000000;
  gap: 35px;
  transition: scale 300ms;
  width: 350px;
  overflow: hidden;
`;

export const Description = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Img = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background-color: #b79262;
`;
export const UserName = styled.p`
  font-weight: 700;
`;
export const UserText = styled.p`
  font-size: 28px;
  color: #605d5a;
`;
export const Active = styled.ul`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  background-color: rgb(0, 188, 213);
  width: 100%;
`;

export const UserActive = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e5ded7;
  width: 100%;
  padding: 10px;
`;
export const SpanLabel = styled.span`
  font-size: 16px;
  display: flex;
`;
export const SpanQuantity = styled.span`
  font-weight: 400;
`;
