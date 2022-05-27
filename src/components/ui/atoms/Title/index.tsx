import React from 'react';

import { TitleTxt } from './styles';

interface Props {
  title: string;
}

export function Title({ title }: Props) {
  return <TitleTxt>{title}</TitleTxt>;
}
