import React, { useCallback, useState } from 'react';
import { BackgroundBox, Content, SignInBox, SignInContainer, Button, InputContainer } from './styles';

import Input from '../../components/Input'

import logo from '../../assets/logo-2x.png'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useForm } from 'react-hook-form';

const SignIn:React.FC = () => {

  const { signIn } = useAuth();

  const {register, handleSubmit} = useForm()

  const history = useHistory();
  const handleSubmitSignIn = useCallback(async ({email, password}) => {
    try {

       await signIn({email, password})


      history.push('/dashboard')
      

      
    } catch (err) {

      window.alert('Insira um email e uma senha.')

    }
  }, [history, signIn])
  
  return (
    <SignInContainer>
      <BackgroundBox>
        <img src={logo} alt="Gempe"/>
      </BackgroundBox>
      <Content>
        <SignInBox>
          <form onSubmit={handleSubmit(handleSubmitSignIn)}>

          <label htmlFor="email"> E-mail </label>
          <InputContainer>
            <input 
              id="email" 
              placeholder="Digite o email de acesso" 
              name="email"
              ref={register}
            />
          </InputContainer>

          <label htmlFor="password"> Senha </label>
          <InputContainer>
            <input
              id="password" 
              name="password"
              type="password"
              placeholder="Senha" 
              ref={register}
             />
          </InputContainer>
          <Button type="submit">
            Entrar
          </Button>
          </form>
        </SignInBox>
      </Content>
      
      
    </SignInContainer>
  )
}

export default SignIn;