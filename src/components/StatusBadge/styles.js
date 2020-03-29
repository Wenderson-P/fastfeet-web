import styled from 'styled-components';
import { ellipsis, tint } from 'polished';

export const Container = styled.div``;

export const StatusData = styled.td`
  color: ${props => props.color};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  min-width: 100px;
`;

export const StatusElipse = styled.div`
  ${ellipsis('250px')}
  display:inline-flex;
  align-items: center;
  border-radius: 12px;
  background-color: ${props => props.color && tint(0.7, props.color)};
  padding: 5px;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 6px;
  margin-right: 5px;
  background-color: ${props => props.color};
`;
