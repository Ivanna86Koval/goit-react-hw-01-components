import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import friends from '../data/friends.json';
export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList items={friends} />
    </div>
  );
};
