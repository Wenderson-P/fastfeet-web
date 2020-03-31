import React, { useState } from 'react';

import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, Modal } from './styles';

export default function ActionMenu({
  visualize,
  viewAction,
  edit,
  editAction,
  erase,
  eraseAction,
  eraseLabel,
}) {
  const [hide, setHide] = useState(true);

  return (
    <Container>
      <button type="button" onClick={() => setHide(!hide)}>
        <MdMoreHoriz size={16} color="#C6C6C6" />
      </button>
      <Modal hide={hide}>
        {visualize && (
          <>
            <button type="button" onClick={viewAction}>
              <MdVisibility size={14} color="#8E5BE8" />
              Visualizar
            </button>

            <hr />
          </>
        )}
        {edit && (
          <>
            <button type="button" onClick={editAction}>
              <MdCreate size={14} color="#4D85EE" />
              Editar
            </button>
            <hr />
          </>
        )}
        {erase && (
          <button type="button" onClick={eraseAction}>
            <MdDeleteForever size={14} color="#DE3B3B" />
            {eraseLabel || 'Excluir'}
          </button>
        )}
      </Modal>
    </Container>
  );
}
