import React from 'react';
import { Container, Input } from './styles';

export default function SearchBar(
  { placeholder = 'Faça sua busca' },
  onChange
) {
  return (
    <Container>
      <Input type="text" placeholder={placeholder} onChange={onChange} />
    </Container>
  );
}
