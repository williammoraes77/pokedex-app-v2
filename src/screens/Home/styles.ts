import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PageContent = styled.View`
  flex: 1;
  padding: ${RFValue(20)}px;
  padding-bottom: ${getBottomSpace()}px;
`;

export const ListContent = styled.View`
  flex: 1;
  margin-top: ${RFValue(20)}px;
`;
