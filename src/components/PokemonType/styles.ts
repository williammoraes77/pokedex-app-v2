import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  title: string;
  type_color: string;
}

export const Container = styled.View<Props>`
  width: 48%;
  align-items: center;
  background-color: red;
  padding: ${RFValue(8)}px 0;
  border-radius: ${RFValue(10)}px;

  ${({ type_color }) =>
    css`
      background-color: ${type_color};
    `}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.card};
  text-transform: capitalize;
`;
