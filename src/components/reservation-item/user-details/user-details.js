import React, { useState, useEffect } from "react";

import styles from "./user-details.module.scss";

export default function UserDetails(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <div className={styles.reservation_item__details}>
      <div>
        <strong>Name:</strong> {props.booking.firstName}{" "}
        {props.booking.lastName}
      </div>
      <div>
        <strong>Email:</strong> {props.booking.email}
      </div>
      <button onClick={props.handleEdit}>Edit</button>
    </div>
  );
}
