import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: ${RFValue(20)}px;
  padding-top: ${getStatusBarHeight() + RFValue(10)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(28)}px;
`;
