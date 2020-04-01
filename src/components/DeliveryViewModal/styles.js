import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => (props.hide ? 'none' : 'block')};
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  padding: 25px;

  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export const Data = styled.div``;

export const Signature = styled.div``;
