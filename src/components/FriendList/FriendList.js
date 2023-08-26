import { FriendListItem } from './FriendListItem';
import { ListFriends } from './FriendList.styled';
import propTypes from 'prop-types';

export const FriendList = ( props ) => {
  return (
    <div>
      <ListFriends>
        <FriendListItem friends={props.friendsDatas} />
      </ListFriends>
    </div>
  );
};

FriendList.propTypes = {
  friendsDatas: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      isOnline: propTypes.bool.isRequired,
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    })
  ),
};
