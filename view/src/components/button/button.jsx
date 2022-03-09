import React from 'react'

import {ButtonStyle, Teste} from './button.styled'

export const Button = (props) => {
  const {
    onClick = () => {},
    value = ""
  } = props

  return (
    <>
    <Teste>
      <ButtonStyle onClick={onClick}>{value}</ButtonStyle>
    </Teste>
      
    </>
  )
}