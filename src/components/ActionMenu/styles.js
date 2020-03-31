import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div``;

export const Modal = styled.div`
  display: ${props => (props.hide ? 'none' : 'block')};
  position: absolute;
  background-color: #fff;
  padding: 15px 10px;
  left: calc(82%);
  box-shadow: 0px 0px 2px #00000026;
  border-radius: 4px;

  button {
    width: 100%;
    font-size: 16px;
    min-width: 120px;
    text-align: left;
    color: #999999;
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    svg {
      margin-right: 10px;
    }
    &:hover {
      color: ${darken(0.05, '#000')};
    }
  }

  hr {
    border: 1px solid #eeeeee;
    margin-bottom: 10px;
  }
`;
