import styled from 'styled-components';

interface INavigationBox {
  isOnPage: string;
}

export const MenuContainer = styled.div`
background-color: #2A6BB9;
height: 100%;
display: flex;
flex-direction: column;
width: 265px;
`

export const ImageBox = styled.div`
display: flex;
align-items: center;
padding: 20px 5px;

img {
  width: 160px;
 
}

`

export const NavigationBox = styled.nav<INavigationBox>`
display: flex;
flex-direction: column;
 a {
   width: 100%;
   color: white;
   padding: 15px 15px;
   display: flex;
   align-items: center;
   img {
     margin-right: 10px;
   }
  }
  a:nth-child(1) {
    background-color: ${props => (props.isOnPage === 'dashboard' ? '#084B9B' : 'inherit')};
  }

  a:nth-child(2) {
    background-color: ${props => (props.isOnPage === 'about' ? '#084B9B' : 'inherit')};
  }

  a:hover {
    background-color: #084B9B;
    transition: 0.8s;
  }
`

export const LogoutBox = styled.div`
margin-top: auto;
margin-bottom: 30px;
button {
  background: transparent;
  border: none;
  width: 100%;
  display: flex;
  color: white;
  padding: 15px 30px;
  
  img {
    margin-right: 10px;
  }
}

button:hover {
  background-color: #084B9B;
  transition: 0.8s;
}
`
