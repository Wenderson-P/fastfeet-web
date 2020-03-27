import styled from 'styled-components';

export const Container = styled.div``;

export const Modal = styled.div`
  display: ${props => (props.hide ? 'none' : 'block')};
  position: absolute;
  width: 150px;
  background-color: #fff;
  padding: 15px 10px;
  left: calc(90% - 180px);
  box-shadow: 0px 0px 2px #00000026;

  button {
    font-size: 16px;
    color: #999999;
    padding-right: 50px;
    margin: 5px 0px;
    svg {
      margin-right: 10px;
    }
  }

  hr {
    border: 1px solid #eeeeee;
    margin-bottom: 10px;
  }
`;
