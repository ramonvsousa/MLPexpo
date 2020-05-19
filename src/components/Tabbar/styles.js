import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  position: fixed;
  bottom:0;
  left: 0;
  width: 100%;
`;

export const ActionButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;