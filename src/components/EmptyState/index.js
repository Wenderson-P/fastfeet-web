import React from 'react';

import { Container } from './styles';

export default function EmptyState() {
  return (
    <Container>
      <h1>Não há dados para serem exibidos</h1>
      <h3>Navegue para outra página</h3>
    </Container>
  );
}
