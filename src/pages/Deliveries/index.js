import React, { useState, useEffect } from 'react';

import {
  Container,
  Table,
  Deliveryman,
  Avatar,
  Division,
  StatusData,
  StatusElipse,
  Circle,
} from './styles';

import api from '~/services/api';

import SearchBar from '~/components/SearchBar';

import AddButton from '~/components/AddButton';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('delivery');

      const data = await response.data.map(delivery => {
        if (delivery.start_date === null) {
          delivery.status = 'Pendente';
          delivery.color = '#C1BC35';
        } else if (delivery.start_date !== null) {
          delivery.status = 'Retirada';
          delivery.color = '#4D85EE';
        }
        if (delivery.end_date !== null) {
          delivery.status = 'Entregue';
          delivery.color = '#2CA42B';
        }
        if (delivery.canceled_at !== null) {
          delivery.status = 'Cancelada';
          delivery.color = '#DE3B3B';
        }
        return delivery;
      });
      setDeliveries(data);
    }

    loadDeliveries();
  }, deliveries);

  return (
    <Container>
      <h3>Gerenciando encomendas</h3>
      <Division>
        <SearchBar />
        <AddButton />
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
              <Deliveryman>
                <Avatar
                  src={
                    delivery.deliveryman.avatar
                      ? delivery.deliveryman.avatar.url
                      : `https://ui-avatars.com/api/?name=${delivery.deliveryman.name}&background=8171E7&color=fff`
                  }
                  alt="Foto do entregador"
                />
                {delivery.deliveryman.name}
              </Deliveryman>
              <td>{delivery.recipient.city}</td>
              <td>{delivery.recipient.state}</td>
              <StatusData color={delivery.color}>
                <StatusElipse color={delivery.color}>
                  <Circle color={delivery.color} />
                  {delivery.status}
                </StatusElipse>
              </StatusData>
              <td>Ações</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}