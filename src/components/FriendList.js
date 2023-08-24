import { FriendListItem } from './FriendListItem';

export const FriendList = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        <li key={item.id}>
          <div>
            <p>avatar {item.avatar}</p>
            <p>name {item.name}</p>
            <p>isOnline {item.isOnline}</p>
          </div>
        </li>;
      })}
    </ul>
  );
};
