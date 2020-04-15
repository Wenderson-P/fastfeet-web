import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Container, Input } from './styles';

export default function SearchBar({ placeholder = 'Faça sua busca', search }) {
  return (
    <Container>
      <MdSearch color="#999" size={16} />
      <Input
        type="text"
        placeholder={placeholder}
        onChange={e => search(e.target.value)}
      />
    </Container>
  );
}
