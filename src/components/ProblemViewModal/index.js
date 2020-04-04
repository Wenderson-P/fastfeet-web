import React, { useRef, useEffect } from 'react';
import { Container, Modal, Data } from './styles';

export default function DeliveryViewModal({ hide, problem, closeModal }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef]);

  return (
    <Container hide={hide}>
      <Modal ref={modalRef}>
        <Data>
          <h4>Visualizar problema</h4>
          <p>{problem}</p>
        </Data>
      </Modal>
    </Container>
  );
}
