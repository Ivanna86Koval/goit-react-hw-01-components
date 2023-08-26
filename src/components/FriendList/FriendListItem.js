import {
  Item,
  ItemsContainer,
  ItemsStatus,
  ItemsTitle,
  ImgFriend
} from './FriendListItem.styled';

export const FriendListItem = ( props ) => {
  return props.friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <Item key={id}>
        <ItemsContainer>
        <ItemsStatus $status={isOnline ? 1 : 0}></ItemsStatus>
          <ImgFriend src={avatar} alt="user-avatar" width="142" />
          <ItemsTitle>{name}</ItemsTitle>
        </ItemsContainer>
      </Item>
    );
  });
};