import React, { useState, useEffect } from "react";

import "./reservation-item.scss";
import { deleteReservation } from "../../services/reservation-api";
import UserDetails from "./user-details/user-details";
import UserEditForm from "./user-edit-form/user-edit-form";

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

  return (
    <div className="reservation-item-container">
      <section className="reservation-item__info">
        {editMode ? (
          <UserEditForm
            formData={formData}
            handleSave={handleSave}
            handleCancel={handleCancel}
            handleChange={handleChange}
          ></UserEditForm>
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
