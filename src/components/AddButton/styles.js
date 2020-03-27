import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  button {
    display: flex;
    align-items: center;
    background-color: #7d40e7;
    border: none;
    border-radius: 4px;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;

    &:hover {
      background-color: ${lighten(0.06, '#7d40e7')};
    }
  }

  svg {
    margin-right: 10px;
  }
`;
