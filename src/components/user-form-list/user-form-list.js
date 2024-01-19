import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import styles from "./user-form-list.module.scss";
import UserDetailsForm from "../user-details-form/user-details-form";

export default function UserFormList({ selectedSeats }) {
  const { register, handleSubmit, formState } = useForm();
  const { isValid } = formState;

  const onSubmit = (data) => {
    console.log(formState.errors);
    if (isValid) {
      console.log(data);
    } else {
      console.log("Form is not valid. Please fill in all required fields.");
    }
  };

  useEffect(() => {
    console.log(formState.errors);
  });

  return (
    <main className={styles.user_form_list_container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {selectedSeats.map((item, index) => (
          <section className={styles.passenger_form} key={item}>
            <h3>
              Passenger {index + 1} | Seat : {item}
            </h3>
            <UserDetailsForm
              index={index}
              register={register}
              errors={formState.errors}
            />
          </section>
        ))}
        <button type="submit">Book</button>
      </form>
    </main>
  );
}
