import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from './Profile/user.json';
import data from './Statistic/data.json';
import friendsItem from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import { Layout } from './Layout';
import { GlobalStyles } from './GlobalStyles.styled';

export const App = () => {
  return (
    <Layout>
      <Profile profile={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friendsDatas={friendsItem} />
      <TransactionHistory items={transactions} />
      <GlobalStyles></GlobalStyles>
    </Layout>
  );
};
