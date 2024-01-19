import "./App.scss";
import React, { useState, useEffect } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import Dashboard from "./pages/dashboard/dashboard";
import Reservation from "./pages/reservation/reservation";
import { initMockSeats } from "./services/bus-service.api";
import { initMockReservations } from "./services/reservation-api";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/reservation", element: <Reservation /> },
]);

function App() {
  useEffect(() => {
    initMockSeats();
    initMockReservations();
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="router_content">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
