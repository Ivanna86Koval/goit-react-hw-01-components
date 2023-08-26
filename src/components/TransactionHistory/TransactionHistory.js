import propType from 'prop-types';
import {
  Transactions,
  TableHead,
  TableDate,
  TabletBody,
} from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transactions>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>

      <TabletBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <TableDate>{type}</TableDate>
              <TableDate>{amount}</TableDate>
              <TableDate>{currency}</TableDate>
            </tr>
          );
        })}
      </TabletBody>
    </Transactions>
  );
};

TransactionHistory.propTypes = {
  date: propTypes.arrayOf(
      propTypes.shape({
          id: propTypes.string.isRequired,
          type: propTypes.string.isRequired,
          amount: propTypes.string.isRequired,
          currency: propTypes.string.isRequired,
      })
  )
}