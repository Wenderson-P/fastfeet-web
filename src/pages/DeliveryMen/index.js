import React, { useState, useEffect } from 'react';

import { Container, Table, Deliveryman, Avatar, Division } from './styles';

import api from '~/services/api';

import SearchBar from '~/components/SearchBar';
import AddButton from '~/components/AddButton';
import ActionMenu from '~/components/ActionMenu';

export default function AddDeliveryMan() {
  const [deliverymen, setDeliverymen] = useState([]);

  useEffect(() => {
    async function loadDeliveryMen() {
      const response = await api.get('deliveryman');

      setDeliverymen(response.data);
    }
    loadDeliveryMen();
  }, []);

  return (
    <Container>
      <h2>Gerenciando entregadores</h2>
      <Division>
        <SearchBar placeholder="Buscar por entregadores" />
        <AddButton url="/deliverymen/add-deliveryman" />
      </Division>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliverymen.map(deliveryman => (
            <tr>
              <td>#{deliveryman.id}</td>
              <Deliveryman>
                <Avatar
                  src={
                    deliveryman.avatar
                      ? deliveryman.avatar.url
                      : `https://ui-avatars.com/api/?name=${deliveryman.name}&background=8171E7&color=fff`
                  }
                  alt="Foto do entregador"
                />
              </Deliveryman>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td>
                <ActionMenu />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
