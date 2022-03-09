import styled from 'styled-components'

export const Body = styled.main`
  @media(min-width: 601px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    position: relative;
    &:before, &:after{
      content: '';
      display: block;
      box-flex: 1;
      flex-grow: 1;
      height: 24px;
    }
  }
`

export const Container = styled.div`
  @media(min-width: 601px){
    position: relative;
    z-index: 2;
  }
`

export const Box = styled.div`
  @media(min-width: 601px) {
    border-radius: 8px;
    border: 1px solid #dadce0;
    display: block;
    padding: 20px;
    flex-shrink: 0;
    margin: 0 auto;
    transition: .2s;
    width: 450px;
    height: auto;
    min-height: 500px;
    overflow-y: auto;
    transition: .2s;
  }
`
