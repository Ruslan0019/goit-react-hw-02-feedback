import { StatisticsList, StatisticsListItem } from './Statistics.style';

export const Statistics = ({ good, neutral, bad, total, feedback }) => {
  return (
    <StatisticsList>
      <StatisticsListItem>
        Good <span>{good}</span>
      </StatisticsListItem>
      <StatisticsListItem>
        Neutral <span>{neutral}</span>
      </StatisticsListItem>
      <StatisticsListItem>
        Bad <span>{bad}</span>
      </StatisticsListItem>
      <StatisticsListItem>
        Total <span>{total}</span>
      </StatisticsListItem>
      <StatisticsListItem>
        Positive feedback <span>{feedback}%</span>
      </StatisticsListItem>
    </StatisticsList>
  );
};
