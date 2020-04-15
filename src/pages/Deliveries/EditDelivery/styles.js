import styled from 'styled-components';

export const Container = styled.div`
  margin: 0% 10% auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  background-color: #fff;
  border-radius: 4px;
  padding: 25px 20px;
`;

export const Buttons = styled.div`
  display: flex;
  button {
    margin: 0px 8px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-self: stretch;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  border: 1px solid #dddddd;
  border-radius: 4px;

  font-size: 16px;
  color: #999999;
  padding: 12px 15px;

  transition: 0.5s;

  &:hover {
    border-color: #7d40e7;
  }
`;
export const Select = styled.div`
  width: 100%;

  &:first-child {
    margin-right: 20px;
  }

  span {
    font-weight: bold;
    color: #444444;
  }
`;
export const Item = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #444444;
  }
`;
