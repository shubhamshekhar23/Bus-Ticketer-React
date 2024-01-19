import { reservationList } from "../constants/mockdata/reservation.mockdata";

export const getAllReservations = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const reservationListData = JSON.parse(
        localStorage.getItem("reservationList")
      );
      resolve(reservationListData);
    }, 100);
  });
};

export const updateReservation = (id, data) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const reservationListData = JSON.parse(
        localStorage.getItem("reservationList")
      );
      const result = reservationListData.filter((item) => item.id !== id);
      result.push(data);
      localStorage.setItem("reservationList", JSON.stringify(result));
      resolve("Successfully updated");
    }, 100);
  });
};

export const deleteReservation = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const reservationListData = JSON.parse(
        localStorage.getItem("reservationList")
      );
      const result = reservationListData.filter((item) => item.id !== id);
      localStorage.setItem("reservationList", JSON.stringify(result));
      resolve("Successfully deleted");
    }, 100);
  });
};

export const addReservation = (newReservationList) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const reservationListData = JSON.parse(
        localStorage.getItem("reservationList")
      );
      const result = [...reservationListData, ...newReservationList];
      localStorage.setItem("reservationList", JSON.stringify(result));
      resolve("successfully added");
    }, 100);
  });
};

export const initMockReservations = () => {
  localStorage.setItem("reservationList", JSON.stringify(reservationList));
};
