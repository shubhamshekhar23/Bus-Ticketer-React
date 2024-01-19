import React, { useState, useEffect } from "react";

import "./dashboard.scss";
import ReservationItem from "../../components/reservation-item/reservation-item";
import { getAllReservations } from "../../services/reservation-api";

export default function Dashboard(props) {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const data = await getAllReservations();
      setReservations(data);
    };

    fetchReservations();
  }, []);

  return (
    <main className="dashboard_container">
      <h2>List of Reservations</h2>
      {reservations.map((item) => (
        <div key={item.id} className="reservation-item__container">
          <ReservationItem data={item} />
        </div>
      ))}
    </main>
  );
}
