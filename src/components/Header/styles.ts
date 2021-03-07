import styled from 'styled-components';

export const HeaderContainer = styled.header``

export const ContentBox = styled.div`
display: flex;
width: 100%;
height: 60px;
border-bottom: 1px solid #DDDDDD;
div {
  display: flex;
  margin-left: auto;
  margin-right: 50px;
  display: flex;
  align-items: center;
  > * {
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
  a {
    height: fit-content;
  }
  img {
    width: 20px;
  }
  p {
    color: #ACACBB;
    span {
      color:#72778D;
      text-transform: capitalize;
    }
  }
  button {
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ACACBB;
    color: #72778D;
    text-transform: capitalize;
  }

}
`