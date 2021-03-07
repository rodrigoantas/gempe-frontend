import React from 'react';

import Header from '../../components/Header'
import Menu from '../../components/Menu'

import { AboutContainer, Content, PageBox } from './styles';

import logo from '../../assets/logo-2x.png'


const About:React.FC = () => {

  return (
    <AboutContainer>
      <Menu isOnPage={'about'}/>
      <PageBox>
        <Header/>
        <Content>
          <div>
            <img src={logo} alt="logo"/>
          </div>
          <div>
            <h1>Este é um teste prático da <span>Gempe</span> para desenvolvedor Fullstack. Qualquer dúvida envie um e-mail para <span>rafael@gempe.com.br</span> com asunto <span>Seu Nome | Dúvida Teste Fullstack</span></h1>
          </div>
        </Content>
      </PageBox>
    </AboutContainer>
  )
}

export default About;