import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { SvgUri } from 'react-native-svg';

export const Container = styled.View`
  width: ${RFValue(142)}px;
  height: ${RFValue(196)}px;
  border-radius: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${RFValue(9)}px;
  justify-content: space-around;
`;
export const ImageContent = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const PokemonCardImage = styled.Image`
  width: ${RFValue(142)}px;
  height: ${RFValue(120)}px;
`;

export const Footer = styled.View`
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

export const NameText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.line};
  font-size: ${RFValue(15)}px;
  text-transform: capitalize;
`;

export const IdText = styled.Text`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.line};
  font-size: ${RFValue(14)}px;
  position: absolute;
  text-align: right;
  padding-right: ${RFValue(5)}px;
  padding-top: ${RFValue(10)}px;
`;

export const TypeContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(10)}px;
`;

export const TypeTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.line};
  font-size: ${RFValue(14)}px;
`;
