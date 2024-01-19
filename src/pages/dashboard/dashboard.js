import React, { useState, useEffect } from 'react';

import styles from './dashboard.module.scss';

export default function Dashboard(props) {
  const [state, setState] = useState({});

  useEffect(() => {

  }, []);

  return (
    <main className={ styles.dashboard_container }>
      Dashboard Component
    </main>
  );
}