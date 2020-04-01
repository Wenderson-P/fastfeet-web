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
  padding: 0px 25px 25px 25px;

  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 30%;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    margin-top: 20px;
  }
  p {
    margin-top: 5px;
    font-size: 16px;
  }
  span {
    font-weight: bold;
  }
  img {
    margin-top: 20px;
    align-self: center;
    width: 60%;
  }
`;
