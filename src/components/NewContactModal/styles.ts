import styled from 'styled-components';

export const TitleSection = styled.div`
width: 100%;
font: normal normal bold 20px/25px Helvetica;
color: #707070;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;

p {
  justify-self: center;
  align-self: center;
}
img {
  cursor: pointer;
  margin-left: auto;
  justify-self: flex-end;
  border: none;
  background: transparent;
  font-weight: bold;
  font-size: 20px;
}
`

export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
color: #9A9A9A;
font: Helvetica;

label {
  margin-bottom: 5px;
}

input {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #DDDDDD;
  &::placeholder {
    opacity: 0.5;
  }
  font: normal normal normal 18px/22px Helvetica;

}

`

export const Button = styled.button`
background: #2A6BB9;
color: white;
border: none;
padding: 15px;
border-radius: 8px;

&:hover {
  background-color: #084B9B;
  transition: 0.8s;
}
`