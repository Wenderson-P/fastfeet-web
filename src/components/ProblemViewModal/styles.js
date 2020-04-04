import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => (props.hide ? 'none ' : 'flex')};
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  padding: 25px;

  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 30%;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-top: 5px;
    font-size: 16px;
  }
`;
