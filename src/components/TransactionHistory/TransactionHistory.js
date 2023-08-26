import PropType from 'prop-types';
import { Transactions, TableHead, TableDate } from './Transaction.styled';

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

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <TableDate>{type}</TableDate>
              <TableDate>{amount}</TableDate>
              <TableDate>{currency}</TableDate>
            </tr>
          );
        })}
      </tbody>
    </Transactions>
  );
};
