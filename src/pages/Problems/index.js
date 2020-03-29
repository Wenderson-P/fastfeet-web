import React, { useState, useEffect } from 'react';

import { Container, Table } from './styles';

import api from '~/services/api';

import ActionMenu from '~/components/ActionMenu';

export default function Problems() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get('delivery/problems');

      setProblems(response.data);
    }
    loadProblems();
  }, []);

  return (
    <Container>
      <h2>Gerenciando Problemas</h2>
      <Table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {problems.map(problem => (
            <tr>
              <td>#{problem.id}</td>
              <td>{problem.description}</td>
              <td>
                <ActionMenu visualize erase eraseLabel="Cancelar encomenda" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
