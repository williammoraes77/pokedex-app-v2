import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Row = styled.View`
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

export const TypesContent = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Separator = styled.View`
  width: ${RFValue(3)}px;
`;

export const InfoButton = styled.TouchableOpacity``;

export const InfoButtonContent = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.black};
  padding-bottom: ${RFValue(3)}px;
`;

export const InfoButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(15)}px;
`;
