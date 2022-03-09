import React from 'react'

import * as S from './input.styled'

export const Input = (props) => {
  const {
    label = undefined,
    type = 'text',
    placeholder = 'null',
    inputValue = "",
    onChange = () => {}
  } = props

  return (
    <S.BoxInput>
      <S.Label>
        {label}
        <br />
        <S.Input placeholder={placeholder}
        type={type}
        value={inputValue}
        onChange={onChange} 
        />
      </S.Label>
    </S.BoxInput>
    
  )
}