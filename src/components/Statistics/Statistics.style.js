import styled from "styled-components";

const StatisticsList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 10px;
  padding: 0;
  flex-direction: column;
  width: 200px;
  margin: 0 auto;
  justify-content: center;
`;
const StatisticsListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;
export {StatisticsList,StatisticsListItem}