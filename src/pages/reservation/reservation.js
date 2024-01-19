import React, { useState, useEffect } from 'react';

import styles from './reservation.module.scss';

export default function Reservation(props) {
  const [state, setState] = useState({});

  useEffect(() => {

  }, []);

  return (
    <main className={ styles.reservation_container }>
      Reservation Component
    </main>
  );
}