import { busSeats } from "../constants/mockdata/seats.mockdata";

export const getAllSeats = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const busSeatsData = JSON.parse(localStorage.getItem("busSeats"));
      resolve(busSeatsData);
    }, 100);
  });
};

export const bookSeats = (seatsList) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let busSeatsData = JSON.parse(localStorage.getItem("busSeats"));
      busSeatsData = busSeatsData.map((item, index) => {
        if (seatsList.includes(item.seatNum)) {
          return {
            ...item,
            isBooked: true,
          };
        }
        return item;
      });
      localStorage.setItem("busSeats", JSON.stringify(busSeatsData));
      resolve("Successfully updated seats status");
    }, 100);
  });
};

export const unBookSeats = (seatsList) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let busSeatsData = JSON.parse(localStorage.getItem("busSeats"));
      busSeatsData = busSeatsData.map((item, index) => {
        if (seatsList.includes(item.seatNum)) {
          return {
            ...item,
            isBooked: false,
          };
        }
        return item;
      });
      localStorage.setItem("busSeats", JSON.stringify(busSeatsData));
      resolve("Successfully updated seats status");
    }, 100);
  });
};

export const initMockSeats = () => {
  if (!localStorage.getItem("busSeats")) {
    localStorage.setItem("busSeats", JSON.stringify(busSeats));
  }
};
