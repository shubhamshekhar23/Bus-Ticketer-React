import React, { useState, useEffect } from "react";

import styles from "./bus-seat-select.module.scss";
import { getAllSeats } from "../../services/bus-service.api";
import Seat from "../seat/seat";
import UserDetailsForm from "../user-details-form/user-details-form";
import UserFormList from "../user-form-list/user-form-list";

export default function BusSeatSelect(props) {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isBookForm, setIsBookForm] = useState(false);

  useEffect(() => {
    const fetchAllSeats = async () => {
      const seatsData = await getAllSeats();
      setSeats(seatsData);
    };

    fetchAllSeats();
  }, []);

  const lowerDeckSeats = seats.filter((seat) => seat.type === "lowerdeck");
  const upperDeckSeats = seats.filter((seat) => seat.type === "upperdeck");

  const handleSeatClick = (seatNum) => {
    if (isSeatSelected(seatNum)) {
      const removedSeatList = selectedSeats.filter((seat) => seat !== seatNum);
      setSelectedSeats(removedSeatList);
      return;
    }
    setSelectedSeats([...selectedSeats, seatNum]);
  };

  const isSeatSelected = (seatNum) => {
    return selectedSeats.includes(seatNum);
  };

  const renderSeats = (seatsData) => {
    return seatsData.map((item, index) => {
      return (
        <div key={item.seatNum}>
          <Seat
            data={item}
            onClick={handleSeatClick}
            isSelected={isSeatSelected(item.seatNum)}
          />
        </div>
      );
    });
  };

  const isDisabled = () => {
    return selectedSeats.length == 0;
  };

  const SeatSelection = (
    <>
      <h2>Select Seats</h2>
      <div className={styles.deck_container}>
        <h3>Lower Deck</h3>
        <section className={styles.deck}>{renderSeats(lowerDeckSeats)}</section>
        <h3>Upper Deck</h3>
        <section className={styles.deck}>{renderSeats(upperDeckSeats)}</section>
        <button disabled={isDisabled()} onClick={() => setIsBookForm(true)}>
          Next
        </button>
      </div>
    </>
  );

  return (
    <main className={styles.bus_seat_select_container}>
      {isBookForm && <UserFormList selectedSeats={selectedSeats} />}
      {!isBookForm && SeatSelection}
    </main>
  );
}
