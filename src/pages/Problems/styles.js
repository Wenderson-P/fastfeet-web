import styled from 'styled-components';

export const Container = styled.div`
  margin: 0% 10% auto;
  display: flex;
  flex-direction: column;
`;

export const Table = styled.table`
  .problem {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 500px;
  }
`;
