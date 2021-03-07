import styled from 'styled-components';


export const SignInContainer = styled.div`
height: 100vh;
/* display: flex;
align-items: stretch; */
display: grid;
grid-template-columns: 1fr 1fr;
width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  background-color: #2A6BB9;
  color: white;
  
`;

export const SignInBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  label {
    width: 100%;
    text-align: justify;
    margin-bottom: 5px;
    
  }

 

  @media (max-width: 400px) {
    form {
      width: 300px;
    }
  }
`;


export const BackgroundBox = styled.div`
  
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 436px;
  }
`;

export const Button = styled.button`
  background: white;
  height: 56px;
  border-radius: 4px;
  border: 1px solid #2A6BB9;
  padding: 0 16px;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: 0.5s;
  letter-spacing: 0px;
  color: #2D6DBA;

  &:hover {
    background: #00171F;
    color: white;
  }

`


export const InputContainer = styled.div`
background-color: white;
padding: 16px;
width: 100%;

display: flex;
align-items: center;

border: 1px solid #3371BC;
border-radius: 4px;
margin-bottom: 16px;
& + div {
  margin-top: 8px;
}

input {
  width: 100%;

  flex: 1;
  background: transparent;
  border: 0;
  font-size: 1rem;
  &::placeholder {
    color: #606060;
    opacity: 0.5;
  }
}
`