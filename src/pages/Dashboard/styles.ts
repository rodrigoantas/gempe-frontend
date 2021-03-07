import styled from 'styled-components';


export const DashboardContainer = styled.div`
display: flex;
width: 100%;
height: 100%;
`
export const Content = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const PageBox = styled.div`
width: 100%;
height: 100%;
 
`

export const SearchContent = styled.div`
display: flex;
width: 100%;
padding: 50px;

button {
  background: #2A6BB9 0% 0% no-repeat padding-box;
  border-radius: 4px;
  width: 160px;
  border: none;
  color: white;
  &:hover {
    background-color: #084B9B;
    transition: 0.7s;
  }
}
`

export const DataContent = styled.div`
width: 100%;
padding: 0px 40px;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`