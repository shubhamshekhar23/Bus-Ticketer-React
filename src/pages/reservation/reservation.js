import React, { useState, useEffect } from "react";

import styles from "./reservation.module.scss";
import BusSeatSelect from "../../components/bus-seat-select/bus-seat-select";
import Header from "../../components/header/header";

export default function Reservation(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <main className={styles.reservation_container}>
        <BusSeatSelect />
      </main>
    </>
  );
}
