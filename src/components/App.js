import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Statistics';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import user from './Profile/user.json';

export const App = () => {
  return (
    <div>
      <Profile profile={user} />
      <Statistics />
      <FriendList items={friends} />
    </div>
  );
};
