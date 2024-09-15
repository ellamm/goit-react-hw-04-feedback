import styled from 'styled-components';

export const ContainerStatistics = styled.div`
  margin-top: 25px;
`;

export const StatisticsList = styled.ul`
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;
export const StatisticsItem = styled.li`
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 16px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;