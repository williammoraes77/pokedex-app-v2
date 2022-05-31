import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: ${RFValue(110)}px;
  height: ${RFValue(110)}px;
`;
