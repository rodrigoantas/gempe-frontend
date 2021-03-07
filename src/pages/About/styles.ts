import styled from 'styled-components';


export const AboutContainer = styled.div`
display: flex;
width: 100%;
height: 100%;
`;
export const PageBox = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`;
export const Content = styled.div`
width: 100%;
height: 100%;
color: #2D6DBA;
text-align: center;
background: url(./background-about-image.svg) no-repeat center;
background-size: cover;
max-height: 100%;
span {
  font-weight: bold;
}

div:nth-child(1) {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  img {
    width: 400px;
  }
}
`;