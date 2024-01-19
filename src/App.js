import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import Dashboard from "./pages/dashboard/dashboard";
import Reservation from "./pages/reservation/reservation";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/reservation", element: <Reservation /> },
]);

function App() {
  return (
    <div className="App">
      <Header />
      {/* <header className="app-header">
        <a href="/">Home</a>
        <a href="/z-playground">z-playground</a>
      </header> */}
      <main className="router_content">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
