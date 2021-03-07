import React, { useCallback } from 'react';

import { HeaderContainer, ContentBox } from './styles';

import logo from '../../assets/help-icon2.svg'
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {

  const {user} = useAuth()

  const formatEmail = useCallback((email)=> {
    const nameInTheEmail = email.split('@')
    return nameInTheEmail[0];
  },[])

  return (
    <HeaderContainer>
      <ContentBox>
        <div>
          <Link to="/about">
            <img src={logo} alt="teste"/>
          </Link>
          <p>Olá, <span> &nbsp; {formatEmail(user.email)}</span></p>
          <button>{user.email[0]}</button>
        </div>
      </ContentBox>
    </HeaderContainer>
  )
}

export default Header