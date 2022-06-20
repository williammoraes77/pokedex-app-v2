import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface NavProps {
  selected: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding: ${RFValue(15)}px ${RFValue(5)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const WrapperNavOptions = styled.TouchableOpacity<NavProps>`
  margin-right: ${RFValue(20)}px;
  ${({ selected }) =>
    selected &&
    css`
      color: red;
      border-bottom-width: ${RFValue(2)}px;
      border-bottom-color: ${({ theme }) => theme.colors.black};
      padding-bottom: ${RFValue(10)}px;
    `}
`;

export const OptionNav = styled.Text<NavProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(15)}px;
  ${({ selected }) =>
    selected &&
    css`
      color: ${({ theme }) => theme.colors.black};
    `}
`;
