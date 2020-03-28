import React from 'react';
import { MdAdd } from 'react-icons/md';

import history from '~/services/history';

import { Container } from './styles';

export default function AddButton({ url }) {
  return (
    <Container>
      <button type="button" onClick={() => history.push(url)}>
        <MdAdd size={16} />
        Cadastrar
      </button>
    </Container>
  );
}
