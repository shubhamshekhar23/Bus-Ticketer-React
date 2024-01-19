import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import styles from "./user-details-form.module.scss";

export default function UserDetailsForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
  });

  const onSubmit = (data) => {
    // Form submission logic goes here
    console.log("Form submitted:", data);
  };

  return (
    <main className={styles.user_details_form_container}>
      <form className={styles.my_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form_group}>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            {...register("firstname", { required: "First name is required" })}
          />
        </div>
        <div className={styles.error}>{errors.firstname?.message}</div>

        <div className={styles.form_group}>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            {...register("lastname", { required: "Last name is required" })}
          />
        </div>
        <div className={styles.error}>{errors.lastname?.message}</div>

        <div className={styles.form_group}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
        </div>
        <div className={styles.error}>{errors.email?.message}</div>

        {/* <button type="submit">Submit</button> */}
      </form>
    </main>
  );
}
