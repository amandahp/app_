import styled from 'styled-components'

export const BoxInput = styled.div`
  padding: 10px;
`

export const Input = styled.input`
  border-radius: 7px;
  border: 1px solid #bfbfbf;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  box-shadow: 0 0 0 1px rgba(11, 65, 110, 0), 0 0 0 100px hsl(1, 100%, 0) inset;
  transition: border 0.25s linear, box-shadow 0.25s linear;
  &:focus {
    border-color: #0b41a0;
    box-shadow: 0 0 0 1px rgba(11, 65, 110, 1), 0 0 0 100px hsl(1, 100%, 100%) inset;
    outline: none;
  }
`;

export const Label = styled.p`
  color: #202124;
  font-family: 'Google Sans','Noto Sans Myanmar UI',arial,sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3333;
  margin-bottom: 0;
  margin-top: 0;
`