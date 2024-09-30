import styled from 'styled-components'

export const MainContainer = styled.div`
  margin: 0;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
  padding: 30px;
`

export const EditableCard = styled.div`
  height: 250px;
  width: 100%;
  border: 0 solid;
  border-radius: 12px;
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`
