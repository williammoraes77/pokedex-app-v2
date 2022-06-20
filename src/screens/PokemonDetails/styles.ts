import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';

interface ContainerProps {
  background_color: string;
}

interface NavProps {
  selected: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ background_color }) => background_color};
`;
