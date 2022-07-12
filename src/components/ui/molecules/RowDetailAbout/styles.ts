import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  padding: ${RFValue(10)}px 0;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(15)}px;
  width: 50%;
  text-transform: capitalize;
`;

export const InfoText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(15)}px;
  text-transform: capitalize;
  width: 50%;
  text-align: right;
`;
