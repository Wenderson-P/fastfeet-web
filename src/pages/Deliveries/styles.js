import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  margin: 0% 10% auto;
  display: flex;
  flex-direction: column;
`;

export const Table = styled.table``;

export const Avatar = styled.image``;

export const Division = styled.div``;

export const AddButton = styled.button``;

export const StatusData = styled.td`
  color: ${props => props.color};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
`;

export const StatusElipse = styled.div`
  width: 60%;
  height: 25px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => lighten(0.3, props.color)};
  padding: 5px;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 6px;
  margin-right: 5px;
  background-color: ${props => props.color};
`;
