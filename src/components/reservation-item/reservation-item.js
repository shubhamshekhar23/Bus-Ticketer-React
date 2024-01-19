import React, { useState, useEffect } from "react";

import "./reservation-item.scss";

export default function ReservationItem(props) {
  const [state, setState] = useState({});

  useEffect(() => {}, []);

  const initialBooking = {
    id: "b1334538-0d13-4b3e-a41d-4c486be100a7",
    firstName: "John",
    lastName: "Doe",
    email: "john01@gmail.com",
    seatNumber: "L3",
    bookingDate: "2024-01-19T06:20:42.273Z",
  };

  const booking = props.data;

  // const [booking, setBooking] = useState(initialBooking);
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleDelete = () => {
    // Implement the logic to delete the booking
    // For simplicity, this example just resets the booking to initial state
    // setBooking(initialBooking);
    setEditMode(false);
  };

  const handleSaveEdit = () => {
    // Implement the logic to save the edited booking
    // For simplicity, this example just cancels the edit mode
    setEditMode(false);
  };

  const handleChange = (e) => {
    // Implement the logic to handle changes in the edited fields
    // For simplicity, this example just updates the state
    // setBooking({
    //   ...booking,
    //   [e.target.name]: e.target.value,
    // });
  };

  return (
    <div className="reservation-item-container">
      <section className="reservation-item__info">
        {editMode ? (
          <div className="reservation-item__form">
            <label>
              <span>First Name:</span>
              <input
                type="text"
                name="firstName"
                value={booking.firstName}
                onChange={handleChange}
              />
            </label>
            <label>
              <span>Last Name:</span>
              <input
                type="text"
                name="lastName"
                value={booking.lastName}
                onChange={handleChange}
              />
            </label>
            <label>
              <span>Email:</span>
              <input
                type="text"
                name="email"
                value={booking.email}
                onChange={handleChange}
              />
            </label>
            <div className="reservation-item__form__action">
              <button onClick={handleSaveEdit}>Save</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="reservation-item__details">
            <div>
              <strong>Name:</strong> {booking.firstName} {booking.lastName}
            </div>
            <div>
              <strong>Email:</strong> {booking.email}
            </div>
            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </section>
      <section>
        <div>
          <strong>Seat Number:</strong> {booking.seatNumber}
        </div>
        <div>
          <strong>Booking Date:</strong> {booking.bookingDate}
        </div>
      </section>
      <section>
        <button onClick={handleDelete}>Delete</button>
      </section>
    </div>
  );
}