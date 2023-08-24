import { FriendListItem } from './FriendListItem';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { TransactionHistory } from './TransactionHistory';
import friends from './';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList items={FriendList} />
    </div>
  );
};
