import React, { useEffect, useState } from 'react';

import { StatusData, StatusElipse, Circle } from './styles';

export default function StatusBadge({ start_date, end_date, canceled_at }) {
  const [status, setStatus] = useState();
  const [color, setColor] = useState();

  useEffect(() => {
    async function loadStatus() {
      if (start_date === null) {
        setStatus('Pendente');
        setColor('#C1BC35');
      } else if (start_date !== null) {
        setStatus('Retirada');
        setColor('#4D85EE');
      }
      if (end_date !== null) {
        setStatus('Entregue');
        setColor('#2CA42B');
      }
      if (canceled_at !== null) {
        setStatus('Cancelada');
        setColor('#DE3B3B');
      }
    }
    loadStatus();
  }, []);

  return (
    <StatusData color={color}>
      <StatusElipse color={color}>
        <Circle color={color} />
        {status}
      </StatusElipse>
    </StatusData>
  );
}
