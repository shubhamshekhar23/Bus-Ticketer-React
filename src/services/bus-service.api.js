import { busSeats } from "../constants/mockdata/seats.mockdata";

export const getAllSeats = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const busSeatsData = localStorage.getItem("busSeats");
      resolve(JSON.parse(busSeatsData));
    }, 100);
  });
};

export const initMockSeats = () => {
  localStorage.setItem("busSeats", JSON.stringify(busSeats));
};
