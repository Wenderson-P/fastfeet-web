import styled from 'styled-components';

export const Container = styled.label`
  align-self: center;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  color: #dddddd;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 150px;
  border: 1px dotted #dddddd;
  border-radius: 50%;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  input {
    display: none;
  }
`;
