import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { Container, Table, Deliveryman, Avatar, Division } from './styles';

import api from '~/services/api';
import history from '~/services/history';

import SearchBar from '~/components/SearchBar';
import AddButton from '~/components/AddButton';
import ActionMenu from '~/components/ActionMenu';

export default function AddDeliveryMan() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [searchDeliveryman, setSearchDeliveryman] = useState('');

  useEffect(() => {
    async function loadDeliveryMen() {
      const response = await api.get(`deliveryman?q=${searchDeliveryman}`);

      setDeliverymen(response.data);
    }
    loadDeliveryMen();
  }, [searchDeliveryman]);

  async function handleDelete(id) {
    try {
      if (window.confirm(`Você deseja excluir o entregador${id}?`)) {
        await api.delete(`/deliveryman/${id}`);
        history.go(0);
      }
    } catch (error) {
      toast.error('Não foi possivel excluir este entregador', {
        autoClose: 4000,
      });
    }
  }
  return (
    <Container>
      <h2>Gerenciando entregadores</h2>
      <Division>
        <SearchBar
          placeholder="Buscar por entregadores"
          search={setSearchDeliveryman}
        />
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
                <ActionMenu
                  edit
                  erase
                  eraseAction={() => handleDelete(deliveryman.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
