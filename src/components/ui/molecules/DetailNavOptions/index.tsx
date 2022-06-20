import React, { useState } from 'react';

import { Container, WrapperNavOptions, OptionNav } from './styles';

export interface Props {
  selected: 'about' | 'stats' | 'evolution';
}

export function DetailNavOptions({ selected }: Props) {
  const [select, setSelect] = useState('about');

  return (
    <Container>
      <WrapperNavOptions selected={selected === 'about'} onPress={() => setSelect('about')}>
        <OptionNav selected={selected === 'about'}>About</OptionNav>
      </WrapperNavOptions>
      <WrapperNavOptions selected={selected === 'stats'} onPress={() => setSelect('stats')}>
        <OptionNav selected={selected === 'stats'}>Stats</OptionNav>
      </WrapperNavOptions>
      <WrapperNavOptions selected={selected === 'evolution'} onPress={() => setSelect('evolution')}>
        <OptionNav selected={selected === 'evolution'}>Evolution</OptionNav>
      </WrapperNavOptions>
    </Container>
  );
}
