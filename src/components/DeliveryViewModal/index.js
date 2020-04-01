import React from 'react';
import { parseISO, format } from 'date-fns/';
import { Container, Modal, Data, Signature } from './styles';

export default function DeliveryViewModal({
  hide,
  recipient,
  startDate,
  endDate,
  signature,
}) {
  return (
    <Container hide={hide}>
      <Modal>
        <Data>
          <h4>Informações da encomenda</h4>
          <p>{`${recipient.street}, ${recipient.number}`}</p>
          <p>{`${recipient.city} - ${recipient.state}`}</p>
          <p>{`${recipient.cep}`}</p>
          <hr />
        </Data>
        <Data>
          <h4>Datas</h4>
          <p>
            <span>Retirada: </span>
            {`${format(parseISO(startDate), 'dd/MM/yyyy')}`}
          </p>
          <p>
            <span>Entrega: </span>
            {`${format(parseISO(endDate), 'dd/MM/yyyy')}`}
          </p>
          <hr />
        </Data>

        {signature && (
          <Data>
            <h4>Assinatura do destinatário</h4>
            <img src={signature.url} alt="Assinatura" />
          </Data>
        )}
      </Modal>
    </Container>
  );
}
