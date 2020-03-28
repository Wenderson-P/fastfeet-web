import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

import {
  Container,
  Header,
  Buttons,
  Form,
  Row,
  Input,
  Select,
  Item,
} from './styles';

import api from '~/services/api';
import history from '~/services/history';

import SaveButton from '~/components/SaveButton';
import GoBackButton from '~/components/GoBackButton';
import SelectInput from '~/components/SelectInput';

export default function AddDelivery() {
  const [deliverymen, setDeliverymen] = useState([]);

  const [selectedDeliveryman, setselectedDeliveryman] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const [recipients, setRecipients] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState([]);

  useEffect(() => {
    async function loadDeliveryMen() {
      const response = await api.get('/deliveryman');

      const data = response.data.map(deliveryman => ({
        value: deliveryman.id,
        label: deliveryman.name,
      }));
      setDeliverymen(data);
    }

    async function loadRecipient() {
      const response = await api.get('/recipients');

      const data = response.data.map(recipient => ({
        value: recipient.id,
        label: recipient.name,
      }));

      setRecipients(data);
    }
    loadDeliveryMen();
    loadRecipient();
  }, []);

  return (
    <Container>
      <Header>
        <h2>Cadastro de encomendas</h2>
        <Buttons>
          <GoBackButton />
          <SaveButton onClick={handleSubmit} />
        </Buttons>
      </Header>
      <Form>
        <Row>
          <Select>
            <span>Destinatário</span>
            <SelectInput
              options={recipients}
              valueSelected={setSelectedRecipient}
            />
          </Select>
          <Select>
            <span>Entregador</span>
            <SelectInput
              options={deliverymen}
              valueSelected={setselectedDeliveryman}
            />
          </Select>
        </Row>
        <Row>
          <Item>
            <Input
              name="product"
              label="Produto"
              placeholder="Digite o nome do produto"
              onChange={e => setSelectedProduct(e.target.value)}
            />
          </Item>
        </Row>
      </Form>
    </Container>
  );
}
