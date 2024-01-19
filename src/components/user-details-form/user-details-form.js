import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./user-details-form.module.scss";

export default function UserDetailsForm({ register, errors, index }) {
  const firstName = `childForms[${index}].firstName`;
  const lastName = `childForms[${index}].lastName`;
  const email = `childForms[${index}].email`;

  const getErrorMessage = (name) => {
    if (errors.childForms && errors.childForms[index]) {
      return errors.childForms[index][name]?.message;
    }
  };

  return (
    <main className={styles.user_details_form_container}>
      <section className={styles.my_form}>
        <div className={styles.form_group}>
          <label htmlFor={firstName}>First Name:</label>
          <input
            type="text"
            id={firstName}
            {...register(firstName, { required: "First name is required" })}
          />
        </div>
        <div className={styles.error}>{getErrorMessage("firstName")}</div>

        <div className={styles.form_group}>
          <label htmlFor={lastName}>Last Name:</label>
          <input
            type="text"
            id={lastName}
            {...register(lastName, { required: "Last name is required" })}
          />
        </div>
        <div className={styles.error}>{getErrorMessage("lastName")}</div>

        <div className={styles.form_group}>
          <label htmlFor={email}>Email:</label>
          <input
            type="text"
            id={email}
            {...register(email, {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
        </div>
        <div className={styles.error}>{getErrorMessage("email")}</div>
      </section>
    </main>
  );
}
