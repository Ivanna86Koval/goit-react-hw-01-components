import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Statistics';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import user from './Profile/user.json';
import { Loyout } from './Loyout';
import data from './Statistic/data.json';
import { GlobalStyles } from './GlobalStyles.styled';

export const App = () => {
  return (
    <Loyout>
      <Profile profile={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList items={friends} />
      <GlobalStyles></GlobalStyles>
    </Loyout>
  );
};
