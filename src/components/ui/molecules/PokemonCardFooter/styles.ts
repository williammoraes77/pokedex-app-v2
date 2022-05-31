import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(13)}px;
  border-top-left-radius: ${RFValue(15)}px;
  border-top-right-radius: ${RFValue(15)}px;
  background-color: ${({ theme }) => theme.colors.card};
`;

export const InfoContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TypeContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(10)}px;
`;
