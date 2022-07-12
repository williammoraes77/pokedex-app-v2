import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  position: 'left' | 'right';
}

export const Container = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(15)}px;
  width: 50%;
  text-transform: capitalize;

  ${({ position }) =>
    position === 'right' &&
    css`
      text-align: right;
    `}
`;
