import React from 'react';
import { Container, Input } from './styles';

export default function SearchBar({ placeholder = 'Faça sua busca', search }) {
  return (
    <Container>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={e => search(e.target.value)}
      />
    </Container>
  );
}
