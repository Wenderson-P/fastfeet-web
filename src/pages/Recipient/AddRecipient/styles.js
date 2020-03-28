import styled from 'styled-components';

export const Container = styled.div`
  margin: 0% 10% auto;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    background-color: #fff;
    border-radius: 4px;
    padding: 25px 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Buttons = styled.div`
  display: flex;
  button {
    margin: 0px 8px;
  }
`;

export const Row = styled.div`
  display: block;
  margin-bottom: 16px;
  column-count: ${props => props.column || 1};
  column-gap: 50px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    width: 100%;

    border: 1px solid #dddddd;
    border-radius: 4px;

    font-size: 16px;
    color: #999999;
    padding: 12px 5px;

    transition: 0.5s;

    &:hover {
      border-color: #7d40e7;
    }
  }
`;
