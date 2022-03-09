import React from 'react'

import * as S from './input.styled'

export const Input = (props) => {
  const {
    label = undefined,
    type = 'text',
    placeholder = 'null',
    inputValue = "",
    onChange = () => {},
    id = "",
  } = props

  return (
    <S.BoxInput>
      <S.Label>
        &nbsp;&nbsp;{label}
        <br />
        <S.Input placeholder={placeholder}
        type={type}
        value={inputValue}
        onChange={onChange}
        id={id} 
        required
        />
      </S.Label>
    </S.BoxInput>
    
  )
}