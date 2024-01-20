import { reservationList } from "../constants/mockdata/reservation.mockdata";
import { v4 as uuidv4 } from "uuid";
import { bookSeats, unBookSeats } from "./bus-service.api";

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

export const updateReservation = (data) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const reservationListData = JSON.parse(
        localStorage.getItem("reservationList")
      );
      const result = reservationListData.map((item) => {
        if (item.id == data.id) {
          return data;
        }
        return item;
      });
      localStorage.setItem("reservationList", JSON.stringify(result));
      resolve("Successfully updated");
    }, 100);
  });
};

export const deleteReservation = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const reservationListData = JSON.parse(
        localStorage.getItem("reservationList")
      );
      let seatData = "";
      const result = reservationListData.filter((item) => {
        if (item.id == id) {
          seatData = item.seatNumber;
        }
        return item.id !== id;
      });
      await unBookSeats([seatData]);
      localStorage.setItem("reservationList", JSON.stringify(result));
      console.log("Successfully deleted");
      resolve("Successfully deleted");
    }, 100);
  });
};

export const addReservation = async (newReservationList) => {
  /* update id and date before adding */
  newReservationList = newReservationList.map((item) => ({
    ...item,
    id: uuidv4(),
    bookingDate: new Date().toISOString(),
  }));

  const seatList = newReservationList.map((item) => item.seatNumber);

  /* update seat status */
  await bookSeats(seatList);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const reservationListData = JSON.parse(
        localStorage.getItem("reservationList")
      );
      const result = [...newReservationList, ...reservationListData];
      localStorage.setItem("reservationList", JSON.stringify(result));
      resolve("successfully added");
    }, 100);
  });
};

export const initMockReservations = () => {
  if (!localStorage.getItem("reservationList")) {
    localStorage.setItem("reservationList", JSON.stringify(reservationList));
  }
};
