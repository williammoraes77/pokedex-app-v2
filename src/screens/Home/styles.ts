import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const PageContent = styled.View`
  flex: 1;
  padding: ${RFValue(20)}px;
  padding-bottom: ${getBottomSpace()}px;
`;
