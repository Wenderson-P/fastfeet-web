import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  background-color: #7d40e7;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  span {
    color: red;
    align-self: flex-start;
    padding-bottom: 15px;
    font-weight: bold;
  }

  label {
    color: #444444;
    text-transform: uppercase;
    font-weight: bold;
  }
  input {
    border: 1px solid #dddddd;
    border-radius: 4px;
    margin: 9px 0px 15px 0px;
    padding: 15px 12px;
    font-size: 16px;
  }

  button {
    border-width: 0px;
    border-radius: 4px;
    padding: 12px;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    transition: 0.3s;
    background-color: #7d40e7;
    margin-bottom: 20px;
    &:hover {
      background-color: ${darken(0.03, '#7D40E7')};
    }
  }
`;
