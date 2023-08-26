import styled from 'styled-components';

export const Item = styled.ul`
display: flex;
    flex-direction: column;
    gap: 15px;
`;
export const ItemsContainer = styled.li`
     align-items: center;
    background-color: white;
    border: 1px solid #000;
    border-radius: 30px;
    box-shadow: 2px 5px 15px 5px #000;
    display: flex;
    flex-direction: row;
    gap: 45px;
    list-style: none;
    padding: 15px;
    width: 100%;
`;
export const ItemsStatus = styled.span`
    border-radius: 50%;
    height: 25px;
    width: 25px;
    background: ${getOnStatus};
`;

function getOnStatus(props) {
    if (props.$status) {
        return '#00FF38'
    } else {
        return '#F00';
    }
} 

export const ImgFriend = styled.img `
display: block;
height: auto;
max-width: 100%;`;

export const ItemsTitle = styled.h1`
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
`;
