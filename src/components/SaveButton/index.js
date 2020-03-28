import React from 'react';
import { MdCheck } from 'react-icons/md';

import history from '~/services/history';

import { Container } from './styles';

export default function AddButton() {
  return (
    <Container>
      <button type="button">
        <MdCheck size={16} />
        Salvar
      </button>
    </Container>
  );
}
