import React from 'react';

import { Container, ActionButton } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Tabbar = () => {

  return (
    <Container>
      <ActionButton>
        <Icon name="camera" size={26} solid />  
      </ActionButton>

      <ActionButton>
        <Icon name="camera-retro" size={26} solid />  
      </ActionButton>
      
      <ActionButton>
        <Icon name="compact-disc" size={26} solid />
      </ActionButton>
    </Container>
  );
};

export default Tabbar;