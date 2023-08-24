export const FriendList = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        return <li>(item.name)</li>;
      })}
    </ul>
  );
};
