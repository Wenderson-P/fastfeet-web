import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 10px;
`;

export const Button = styled.button`
  display: flex;
`;

export const PageBlock = styled.button`
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  width: calc(99% / 11);
  background-color: ${props => (props.active ? '#7d40e7' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#000')};
  border: 1px solid #ccc;
  padding: 5px 0px;
  margin: 0px 3px;
`;
