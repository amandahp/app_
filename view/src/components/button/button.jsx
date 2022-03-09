import React from 'react'

import {ButtonStyle, Teste, BlockButton } from './button.styled'

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

export const ButtonBlock = (props) => {
  const {
    value = ""
  } = props

  return (
    <>
    <Teste>
      <BlockButton disabled>{value}</BlockButton>
    </Teste>
      
    </>
  )
}


