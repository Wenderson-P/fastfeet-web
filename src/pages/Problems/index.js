import React, { useState, useEffect } from 'react';

import { Container, Table } from './styles';

import api from '~/services/api';

import ActionMenu from '~/components/ActionMenu';
import ProblemViewModal from '~/components/ProblemViewModal';
import Pagination from '~/components/Pagination';
import EmpyState from '~/components/EmptyState';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [problem, setProblem] = useState();
  const [hideModal, setHideModal] = useState(true);
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`delivery/problems?page=${actualPage}`);

      setProblems(response.data);
    }
    loadProblems();
  }, [actualPage]);

  function showModal(delivery_id) {
    const problemFiltered = problems.filter(item => item.id === delivery_id);
    setProblem(problemFiltered[0]);
    setHideModal(!hideModal);
  }

  function closeModal() {
    setHideModal(!hideModal);
  }

  return (
    <Container>
      <h2>Gerenciando Problemas</h2>
      {problem && (
        <ProblemViewModal
          problem={problem.description}
          hide={hideModal}
          closeModal={closeModal}
        />
      )}
      {problems.length !== 0 ? (
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
              <tr key={problem.id}>
                <td>#{problem.id}</td>
                <td className="problem">{problem.description}</td>
                <td>
                  <ActionMenu
                    visualize
                    viewAction={() => showModal(problem.id)}
                    erase
                    eraseLabel="Cancelar encomenda"
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
