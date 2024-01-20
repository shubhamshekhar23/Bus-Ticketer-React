import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import styles from "./user-form-list.module.scss";
import UserDetailsForm from "../user-details-form/user-details-form";
import { addReservation } from "../../services/reservation-api";
import { useNavigate } from "react-router-dom";

export default function UserFormList({ selectedSeats }) {
  const { register, handleSubmit, formState } = useForm();
  const { isValid } = formState;
  const navigate = useNavigate();

  const getUpdatedSeatNumData = (formArr) => {
    return formArr.map((item, index) => ({
      ...item,
      seatNumber: selectedSeats[index],
    }));
  };

  const onSubmit = async (data) => {
    if (isValid) {
      const result = getUpdatedSeatNumData(data.childForms);

      await addReservation(result);
      navigate("/");
    } else {
      console.log("Form is not valid. Please fill in all required fields.");
    }
  };

  return (
    <main className={styles.user_form_list_container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {selectedSeats.map((item, index) => (
          <section className={styles.passenger_form} key={item}>
            <h3>
              Passenger {index + 1} | Seat :
              <span className={styles.seat_num}>{item}</span>
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
