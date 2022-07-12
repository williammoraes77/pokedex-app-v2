import React from 'react';
import { DetailTitle } from '../../atoms/DetailTitle';

import { Container, Title, InfoText } from './styles';

interface Props {
  title: string;
  data: string;
}

export function RowDetailAbout({ title, data }: Props) {
  return (
    <Container>
      <DetailTitle data={title} align="left" />
      <DetailTitle data={title} align="right" />
      {/* <InfoText>{data}</InfoText> */}
    </Container>
  );
}
