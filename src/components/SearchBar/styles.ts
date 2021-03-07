import styled from 'styled-components';

export const InputContainer = styled.div`
width: 100%;

margin-right: 10px;

form {
  padding: 22px;
  padding-right: 5px;
  width: 100%;
  background-color: white;

  display: flex;
  align-items: center;
  height: 30px;

  align-self: center;

  border: 1px solid #B8B8B8;
  border-radius: 4px;


}

svg {
  margin-right: 10px;
}

input {
  width: 100%;
  flex: 1;
  background-color: white;
  border: 0;
  font-size: 1rem;
  &::placeholder {
    color: #666360;
    opacity: 0.4;
  }
}

button {
  border: none;
  width: 50px;
}
`