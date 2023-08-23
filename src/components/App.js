import { FriendListItem } from './FriendListItem';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { TransactionHistory } from './TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList />
      <FriendListItem />
      <TransactionHistory />
    </div>
  );
};
