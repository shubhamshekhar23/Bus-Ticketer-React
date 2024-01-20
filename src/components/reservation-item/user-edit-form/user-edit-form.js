import React, { useState, useEffect } from "react";

import styles from "./user-edit-form.module.scss";

export default function UserEditForm(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  return (
    <div className={styles.reservation_item__form}>
      <label>
        <span>First Name:</span>
        <input
          type="text"
          name="firstName"
          value={props.formData.firstName}
          onChange={props.handleChange}
        />
      </label>
      <label>
        <span>Last Name:</span>
        <input
          type="text"
          name="lastName"
          value={props.formData.lastName}
          onChange={props.handleChange}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="text"
          name="email"
          value={props.formData.email}
          onChange={props.handleChange}
        />
      </label>
      <div className={styles.reservation_item__form__action}>
        <button onClick={props.handleSave}>Save</button>
        <button onClick={props.handleCancel}>Cancel</button>
      </div>
    </div>
  );
}
