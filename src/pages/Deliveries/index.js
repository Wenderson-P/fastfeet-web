import React, { useState, useEffect } from 'react';

import { Container, Table, Deliveryman, Avatar, Division } from './styles';

import api from '~/services/api';

import SearchBar from '~/components/SearchBar';
import AddButton from '~/components/AddButton';
import StatusBadge from '~/components/StatusBadge';
import ActionMenu from '~/components/ActionMenu';
import DeliveryViewModal from '~/components/DeliveryViewModal';
import Pagination from '~/components/Pagination';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [delivery, setDelivery] = useState();
  const [hideModal, setHideModal] = useState(true);
  const [searchProduct, setSearchProduct] = useState('');
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(`delivery?q=${searchProduct}`);
      setDeliveries(response.data);
    }

    loadDeliveries();
  }, [searchProduct]);

  function showModal(delivery_id) {
    const deliveryFiltered = deliveries.filter(item => item.id === delivery_id);
    setDelivery(deliveryFiltered[0]);
    setHideModal(!hideModal);
  }

  function closeModal() {
    setHideModal(!hideModal);
  }

  return (
    <Container>
      <h2>Gerenciando encomendas</h2>
      <Division>
        <SearchBar
          placeholder="Buscar por encomendas"
          search={setSearchProduct}
        />
        <AddButton url="/deliveries/add-delivery" />
      </Division>
      {delivery && (
        <DeliveryViewModal
          recipient={delivery.recipient}
          startDate={delivery.start_date}
          endDate={delivery.end_date}
          signature={delivery.signature}
          hide={hideModal}
          closeModal={closeModal}
        />
      )}
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
              <StatusBadge
                start_date={delivery.start_date}
                end_date={delivery.end_date}
                canceled_at={delivery.canceled_at}
              />
              <td>
                <ActionMenu
                  visualize
                  viewAction={() => showModal(delivery.id)}
                  edit
                  erase
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination actualPage={actualPage} changePage={setActualPage} />
    </Container>
  );
}
