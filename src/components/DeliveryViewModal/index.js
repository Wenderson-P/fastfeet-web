import React from 'react';

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
          <p>
            {`${recipient.street}, ${recipient.number}
          ${recipient.city} - ${recipient.state}
          ${recipient.cep}
          `}
          </p>
        </Data>
        <Data>
          <h4>Datas</h4>
          <h3>Retirada: {startDate}</h3>
          <h3>Entrega: {endDate}</h3>
        </Data>
        {signature && (
          <Data>
            <Signature>
              <h4>Assinatura do destinatário</h4>
              <img src={signature.url} alt="Assinatura" />
            </Signature>
          </Data>
        )}
      </Modal>
    </Container>
  );
}
