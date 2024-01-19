import React, { useState, useEffect } from "react";

import styles from "./user-form-list.module.scss";
import UserDetailsForm from "../user-details-form/user-details-form";

export default function UserFormList({ selectedSeats }) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <main className={styles.user_form_list_container}>
      {selectedSeats.map((item, index) => (
        <section className={styles.passenger_form} key={item}>
          <h3>
            Passenger {index + 1} | Seat : {item}
          </h3>
          <UserDetailsForm />
        </section>
      ))}
      <button>Book</button>
    </main>
  );
}
