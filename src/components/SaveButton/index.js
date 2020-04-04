import React from 'react';
import { MdCheck } from 'react-icons/md';

import { Container } from './styles';

export default function AddButton({ onClick, formId }) {
  return (
    <Container>
      <button type="submit" onClick={onClick} form={formId}>
        <MdCheck size={16} />
        Salvar
      </button>
    </Container>
  );
}
