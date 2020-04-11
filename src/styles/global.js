import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

  *{
    margin: 0;
    padding: 0;
    outline: 0;
  }

  *:focus {
    outline:0;
  }

  html,body,#root {
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
  }
  body,input,button{
    font: 14px 'Roboto', sans-serif;
  }

  a{
    text-decoration: none;
  }
  
  ul{
    list-style : none;
  }

  h2 {
    font-size: 24px;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }


  table{
    text-align: left;
    margin-top: 20px;
    border-spacing:0 15px; 
  }

  tbody{

    tr{
    background-color: #FFFFFF;
    font-size:16px;
    color:#666666;
    }
  }

  th{
    padding:0px 10px;
    font-size:16px;
    color: #444444;

    &:last-child{
      text-align:right;
    }
  }

  td {
    text-align: left;
    padding:10px 0px 10px 15px;
    &:last-child{
      text-align: right;
      padding-right:30px;
    }
  }

  form{
    div{
      span{
        margin-top:5px;
        color: red;
      }
    }
  }
`;
