import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: flex-end;
  padding-top: ${RFValue(200)}px;
  z-index: 1;
`;

export const PokeImgPng = styled.Image`
  width: ${RFValue(270)}px;
  height: ${RFValue(270)}px;
  position: absolute;
  bottom: -${RFValue(35)}px;
`;
