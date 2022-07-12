import React from 'react';

import { Container } from './styles';

export interface Props {
  data: string;
  align: 'left' | 'right';
}

export function DetailTitle({ data, align }: Props) {
  return <Container position={align}>{data}</Container>;
}
