import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { Container, Table, Deliveryman, Avatar, Division } from './styles';

import api from '~/services/api';
import history from '~/services/history';

import SearchBar from '~/components/SearchBar';
import AddButton from '~/components/AddButton';
import ActionMenu from '~/components/ActionMenu';
import Pagination from '~/components/Pagination';
import EmpyState from '~/components/EmptyState';

export default function AddDeliveryMan() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [searchDeliveryman, setSearchDeliveryman] = useState('');
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    async function loadDeliveryMen() {
      const response = await api.get(
        `deliveryman?q=${searchDeliveryman}&page=${actualPage}`
      );

      setDeliverymen(response.data);
    }
    loadDeliveryMen();
  }, [searchDeliveryman, actualPage]);

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
      {deliverymen.length !== 0 ? (
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
              <tr key={deliveryman.id}>
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
                    editAction={() =>
                      history.push('/deliverymen/edit-deliveryman', deliveryman)
                    }
                    erase
                    eraseAction={() => handleDelete(deliveryman.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
          <EmpyState />
        )}
      <Pagination actualPage={actualPage} changePage={setActualPage} />
    </Container>
  );
}
