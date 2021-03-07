import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }
  body, input, button {
    font-family: 'Oxygen', serif;
    font-size: 1rem;
   
  }

  #root {
    height: 100%;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: gray;
  }

  textarea {
    resize: none;
  }

  li {
    list-style: none;
  }

  .MuiDataGrid-root {
    font-family: 'Oxygen' !important;
    color: #6F6F6F !important;
  }
  .MuiDataGrid-columnsContainer, 	.MuiDataGrid-colCell, .MuiDataGrid-colCellWrapper, .MuiDataGrid-colCellTitle {
    font-weight: 900 !important;
    color: black;
  }

`;
