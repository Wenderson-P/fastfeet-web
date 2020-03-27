import React, { useState, useEffect } from 'react';

import {
  Container,
  Table,
  Avatar,
  Division,
  AddButton,
  Status,
  Elipse,
} from './styles';

import api from '~/services/api';

import SearchBar from '~/components/SearchBar';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('delivery');

      const data = await response.data.map(delivery => {
        if (delivery.start_date === null) {
          delivery.status = 'Pendente';
        } else if (delivery.start_date !== null) {
          delivery.status = 'Retirada';
        }
        if (delivery.end_date !== null) {
          delivery.status = 'Entregue';
        }
        if (delivery.canceled_at !== null) {
          delivery.status = 'Cancelada';
        }
        return delivery;
      });
      setDeliveries(data);
    }

    loadDeliveries();
  });

  return (
    <Container>
      <h3>Gerenciando encomendas</h3>
      <Division>
        <SearchBar />
        <AddButton>Cadastrar</AddButton>
      </Division>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map(delivery => (
            <tr>
              <td>#{delivery.id}</td>
              <td>{delivery.recipient.name}</td>
              <td>
                <Avatar>{delivery.deliveryman.avatar_id}</Avatar>
                {delivery.deliveryman.name}
              </td>
              <td>{delivery.recipient.city}</td>
              <td>{delivery.recipient.state}</td>
              <td>
                <Status>
                  <Elipse />
                  {delivery.status}
                </Status>
              </td>
              <td>Ações</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
