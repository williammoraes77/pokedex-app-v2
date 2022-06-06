import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { PokemonProps } from '@src/hooks/pokemon';

export const Container = styled(FlatList as new () => FlatList<PokemonProps>).attrs({
  showsVerticalScrollIndicator: false,
  columnWrapperStyle: { justifyContent: 'space-between' },
})`
  flex: 1;
`;

export const Separator = styled.View`
  margin: ${RFValue(10)}px 0;
`;
