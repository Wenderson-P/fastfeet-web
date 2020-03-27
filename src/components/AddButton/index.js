import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container } from './styles';

export default function AddButton() {
  return (
    <Container>
      <button type="button">
        <MdAdd size={16} />
        Cadastrar
      </button>
    </Container>
  );
}
