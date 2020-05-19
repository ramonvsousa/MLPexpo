import React from 'react';

import { Wrapper, Container, Logo, ActionButton } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import logo from '../../../assets/logo.png';

const Header = () => {

  return (
    <Wrapper>
      <Container>
        <ActionButton>
          <Icon name="user" size={26} solid />  
        </ActionButton>

        <Logo img src={logo} />
        
        <ActionButton>
          <Icon name="star" size={26} solid />
        </ActionButton>
      </Container>
    </Wrapper>
  );
};

export default Header;