import React from 'react';
import { Link } from 'react-router-dom';
import { MenuContainer, ImageBox, NavigationBox, LogoutBox } from './styles';

import logo from '../../assets/logo-white.png'
import HelpIcon from '../../assets/help-icon.svg'
import ProfileIcon from '../../assets/profile-icon.svg'
import LogoutIcon from '../../assets/logout-icon.svg'
import { useAuth } from '../../contexts/AuthContext';

interface IMenuProps {
  isOnPage: string;
}


const Menu: React.FC<IMenuProps> = ({isOnPage}) => {

  const {signOut} = useAuth()


  return (
    <MenuContainer>
      <ImageBox>
        <img src={logo} alt="Gempe"/>
      </ImageBox>
      <NavigationBox isOnPage={isOnPage}>
        <Link to="/">
          <img src={ProfileIcon} alt="profile icon"/>
          Contatos
        </Link>
        <Link to="/about">
          <img src={HelpIcon} alt="help icon"/>
          Sobre
        </Link>
      </NavigationBox>
      <LogoutBox>
        <button onClick={signOut}>
          <img src={LogoutIcon} alt="logout icon"/>
          Sair
        </button>


      </LogoutBox>
      
    </MenuContainer>
  )
}

export default Menu;