import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import history from '~/services/history';

import { Container } from './styles';

export default function AddButton() {
  return (
    <Container>
      <button type="button" onClick={() => history.goBack()}>
        <MdKeyboardArrowLeft size={16} />
        Voltar
      </button>
    </Container>
  );
}
