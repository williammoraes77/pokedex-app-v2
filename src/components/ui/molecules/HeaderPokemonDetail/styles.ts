import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + RFValue(20)}px;
  padding: ${RFValue(20)}px;
  padding-top: 0;
`;

export const BackButton = styled.TouchableOpacity`
  width: ${RFValue(45)}px;
  padding: ${RFValue(10)}px;
  border: ${RFValue(1)}px solid black;
  border-radius: ${RFValue(45)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(25)}px;
  color: white;
`;
