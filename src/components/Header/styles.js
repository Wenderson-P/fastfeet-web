import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
  border: 1px solid #dddddd;
  height: 64px;
  margin-bottom: 2%;
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 26px;
    border-right: 1px solid #dddddd;
    padding-right: 30px;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: #999999;
      font-size: 15px;
      font-weight: bold;
      text-transform: uppercase;
      margin: 0px 20px;
    }
  }
`;

export const Profile = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
    color: #666666;
  }
  button {
    margin: 5px 0px;
    background: none;
    border: none;
    color: #de3b3b;
  }
`;
