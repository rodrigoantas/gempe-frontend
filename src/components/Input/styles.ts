import styled from 'styled-components';

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