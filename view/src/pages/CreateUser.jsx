
import React, { useState } from 'react'
//import { useNavigate } from 'react-router-dom';
import { Input, Button } from '../components'
import postData from '../services/create_user'
import { Body, Box, Container } from './CreateUser.styled'

export const CreateUser = () => {
  //const navigate = useNavigate();
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleName = (inputName) => {
    setName(inputName)
  }

  const handleEmail = (inputEmail) => {
    setEmail(inputEmail)

  }

  const handlePassword = (inputPassword) => {
    setPassword(inputPassword)

  }


  const handleClick = () => {
    postData(name, email, password)
    //navigate("/https://www.google.com.br/")
    window.location = "https://www.google.com.br/"
  }

  console.log(handleClick)

  return (
    <Body>
      <Container>
        <Box>
          <Input label={"Nome"} placeholder={"Insira seu nome"} inputValue={name} onChange={(event) => handleName(event.target.value)} />
          <Input type="email" label={"E-mail"} placeholder={"Insira seu E-mail"} inputValue={email} onChange={(event) => handleEmail(event.target.value)}/>
          <Input type="password" label={"Senha"} placeholder={"Insira uma Senha"} inputValue={password} onChange={(event) => handlePassword(event.target.value)}/>
          <Button onClick={handleClick} value={"Cadastrar"} />
        </Box>
      </Container>
    </Body>
  )
}