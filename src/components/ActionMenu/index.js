import React from 'react';

import { MdVisibility, MdCreate, MdDeleteForever } from 'react-icons/md';
import { Container } from './styles';

export default function ActionMenu() {
  return (
    <Container>
      <button type="button">
        <MdVisibility size={10} /> Visualizar
      </button>
      <button type="button">
        <MdCreate size={10} />
        Editar
      </button>
      <button type="button">
        <MdDeleteForever size={10} />
        Excluir
      </button>
    </Container>
  );
}
