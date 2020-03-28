import React from 'react';
import { MdCheck } from 'react-icons/md';

import history from '~/services/history';

import { Container } from './styles';

export default function AddButton({ onClick }) {
  return (
    <Container>
      <button type="submit" onClick={onClick}>
        <MdCheck size={16} />
        Salvar
      </button>
    </Container>
  );
}
