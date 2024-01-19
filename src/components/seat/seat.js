import React, { useState, useEffect } from "react";

import styles from "./seat.module.scss";

export default function Seat({ data, onClick, isSelected }) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  const getClass = () => {
    let cl = [styles.seat_container];
    if (data.isBooked) {
      cl.push(styles.seat_booked);
    }
    if (isSelected) {
      cl.push(styles.seat_selected);
    }
    return cl.join(" ");
  };

  return (
    <main className={getClass()} onClick={() => onClick(data.seatNum)}>
      <div className={styles.seat_back}></div>
    </main>
  );
}
