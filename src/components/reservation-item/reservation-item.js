import React, { useState, useEffect } from "react";

import "./reservation-item.scss";
import { deleteReservation } from "../../services/reservation-api";
import UserDetails from "./user-details/user-details";

export default function ReservationItem(props) {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...props.data });

  const booking = props.data;

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleDelete = async () => {
    props.delete(booking.id);
  };

  const handleSave = async () => {
    console.log(formData);
    await props.save(formData);
    setEditMode(false);
  };

  const handleCancel = () => {
    setFormData({ ...booking });
    setEditMode(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const editFormElement = (
    <div className="reservation-item__form">
      <label>
        <span>First Name:</span>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Last Name:</span>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <div className="reservation-item__form__action">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );

  const userDetailsElement = (
    <UserDetails booking={booking} handleEdit={handleEdit}></UserDetails>
  );

  return (
    <div className="reservation-item-container">
      <section className="reservation-item__info">
        {editMode ? (
          editFormElement
        ) : (
          <UserDetails booking={booking} handleEdit={handleEdit}></UserDetails>
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
