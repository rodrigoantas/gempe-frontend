import styled from 'styled-components';

export const CancelDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;

img {
  cursor: pointer;
  margin-left: auto;
  justify-self: flex-end;
  border: none;
  background: transparent;
}
`

export const Content = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font: Helvetica;

p {
  margin-bottom: 40px;
}

span {
  color: #707070;
  font-weight: bold;
}

button {
  border: none;
  padding: 15px 48px;
  border-radius: 8px;
  background: #F05961;
  color: white;
}

button:nth-child(1) {
  background-color: white;
  border: 1px solid #707070;
  color: #707070;
  margin-right: 26px;

}
`