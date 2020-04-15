import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { Container, Table, Division } from './styles';

import api from '~/services/api';
import history from '~/services/history';

import SearchBar from '~/components/SearchBar';
import AddButton from '~/components/AddButton';
import ActionMenu from '~/components/ActionMenu';
import Pagination from '~/components/Pagination';
import EmpyState from '~/components/EmptyState';

export default function Deliveries() {
  const [recipients, setRecipients] = useState([]);
  const [searchRecipient, setSearchRecipient] = useState('');
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get(
        `recipients?q=${searchRecipient}&page=${actualPage}`
      );

      setRecipients(response.data);
    }
    loadRecipients();
  }, [searchRecipient, actualPage]);

  async function handleDelete(id) {
    try {
      if (window.confirm(`Você deseja excluir o entregador${id}?`)) {
        await api.delete(`/recipients/${id}`);
        history.go(0);
      }
    } catch (error) {
      toast.error('Não foi possivel excluir este destinatário', {
        autoClose: 4000,
      });
    }
  }

  return (
    <Container>
      <h2>Gerenciando destinatários</h2>
      <Division>
        <SearchBar
          placeholder="Buscar por destinatários"
          search={setSearchRecipient}
        />
        <AddButton url="/recipient/add-recipient" />
      </Division>
      {recipients.length !== 0 ? (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {recipients.map(recipient => (
              <tr key={recipient.id}>
                <td>#{recipient.id}</td>
                <td>{recipient.name}</td>
                <td>
                  {recipient.street}, {recipient.number}, {recipient.city} -{' '}
                  {recipient.state}
                </td>
                <td>
                  <ActionMenu
                    edit
                    erase
                    editAction={() =>
                      history.push('/recipient/edit-recipient', recipient)
                    }
                    eraseAction={() => handleDelete(recipient.id)}
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
