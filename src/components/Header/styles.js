import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain'
})`
  height: 40px;
`;

export const ActionButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Wrapper = styled.View`
  height: 2%;
`;