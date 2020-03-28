import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Container, Header, Buttons, Row, Select, Item } from './styles';

import SaveButton from '~/components/SaveButton';
import GoBackButton from '~/components/GoBackButton';
import SelectInput from '~/components/SelectInput';

export default function AddDelivery() {
  return (
    <Container>
      <Header>
        <h2>Cadastro de encomendas</h2>
        <Buttons>
          <GoBackButton />
          <SaveButton />
        </Buttons>
      </Header>
      <Form>
        <Row>
          <Select>
            <SelectInput />
          </Select>
          <Select>
            <SelectInput />
          </Select>
        </Row>
        <Row>
          <Item>
            <Input
              name="product"
              label="Produto"
              placeholder="Digite o nome do produto"
            />
          </Item>
        </Row>
      </Form>
    </Container>
  );
}
