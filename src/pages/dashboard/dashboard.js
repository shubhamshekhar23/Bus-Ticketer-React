import React, { useState, useEffect } from "react";

import "./dashboard.scss";
import ReservationItem from "../../components/reservation-item/reservation-item";
import {
  getAllReservations,
  deleteReservation,
  updateReservation,
} from "../../services/reservation-api";
import Header from "../../components/header/header";

export default function Dashboard(props) {
  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    const data = await getAllReservations();
    setReservations(data);
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const deleteReservationById = async (id) => {
    await deleteReservation(id);
    await fetchReservations();
  };

  const saveForm = async (formData) => {
    await updateReservation(formData);
    await fetchReservations();
  };

  return (
    <>
      <Header />
      <main className="dashboard_container">
        <h2>List of Reservations</h2>
        {reservations.map((item) => (
          <div key={item.id} className="reservation-item__container">
            <ReservationItem
              data={item}
              delete={deleteReservationById}
              save={saveForm}
            />
          </div>
        ))}
      </main>
    </>
  );
}
