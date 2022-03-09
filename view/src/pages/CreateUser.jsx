
import React, { useState, useEffect, useCallback } from 'react'
//import { useNavigate } from 'react-router-dom';
import { Input, Button, ButtonBlock } from '../components'
import postData from '../services/create_user'
import { Body, Box, Container, BoxTitle } from './CreateUser.styled'

export const CreateUser = () => {
  //const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [unlockButton, setUnlockButton] = useState(false)


  const handleName = (inputName) => {
      setName(inputName)
  }

  const handleEmail = (inputEmail) => {
      setEmail(inputEmail)
  }

  const handlePassword = (inputPassword) => {
      setPassword(inputPassword)
  }

  const verifyInput = useCallback(async() => {
    setUnlockButton(true)
  }, [setUnlockButton])

  useEffect(() => {
    const regexp = /^[A-Za-z]/
    if(regexp.test(name) && regexp.test(email) && regexp.test(password)){
      verifyInput();
    }
  }, [verifyInput, name, email, password]);

  const handleClick = () => {
    postData(name, email, password)
    //navigate("/https://www.google.com.br/")
    window.location = "https://www.google.com.br/"
  }


  return (
    <Body>
      <Container>
        <Box>
          <BoxTitle>
            <p>
              <span className="blue">C</span><span className="red">a</span>
              <span className="yellow">d</span><span className="blue">a</span><span className="green">s</span>
              <span className="red">t</span><span className="blue">r</span><span className="yellow">o</span>
            </p>
          </BoxTitle>
          <Input id={"nameInput"} label={"Nome"} placeholder={"Insira seu nome"} inputValue={name} onChange={(event) => handleName(event.target.value)} />
          <Input id={"emailInput"} type="email" label={"E-mail"} placeholder={"Insira seu E-mail"} inputValue={email} onChange={(event) => handleEmail(event.target.value)}/>
          <Input id={"passInput"} type="password" label={"Senha"} placeholder={"Insira uma Senha"} inputValue={password} onChange={(event) => handlePassword(event.target.value)}/>
          {(unlockButton ? 
            <Button onClick={handleClick} value={"Cadastrar"} /> : <ButtonBlock value={'Cadastrar'}/>
          )}
        </Box>
      </Container>
    </Body>
  )
}