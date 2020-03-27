import React, { useState } from 'react';

import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';
import { Container, Modal } from './styles';

export default function ActionMenu() {
  const [hide, setHide] = useState(true);
  return (
    <Container>
      <button type="button" onClick={() => setHide(!hide)}>
        <MdMoreHoriz size={16} color="#C6C6C6" />
      </button>
      <Modal hide={hide}>
        <button type="button">
          <MdVisibility size={14} color="#8E5BE8" />
          Visualizar
        </button>
        <hr />
        <button type="button">
          <MdCreate size={14} color="#4D85EE" />
          Editar
        </button>
        <hr />

        <button type="button">
          <MdDeleteForever size={14} color="#DE3B3B" />
          Excluir
        </button>
      </Modal>
    </Container>
  );
}
