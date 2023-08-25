import PropTypes from 'prop-types';

import {
  Statistic,
  UploudTitle,
  StatList,
  ListItem,
  SpanLabel,
  SpanPercentage,
} from './Statistic.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      <UploudTitle>Upload stats</UploudTitle>

      <StatList>
        {stats.map(stat => (
          <ListItem key={stat.id}>
            <SpanLabel>{stat.label}</SpanLabel>
            <SpanPercentage>{stat.percentage}%</SpanPercentage>
          </ListItem>
        ))}
      </StatList>
    </Statistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
