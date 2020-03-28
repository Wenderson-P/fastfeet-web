import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  button {
    display: flex;
    align-items: center;
    background-color: #cccccc;
    border: none;
    border-radius: 4px;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;

    &:hover {
      background-color: ${darken(0.3, '#CCCCCC')};
    }
  }

  svg {
    margin-right: 10px;
  }
`;
