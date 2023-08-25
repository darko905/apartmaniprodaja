import "./App.css";

import ApartmanDetails from "./components/ApartmanDetails";

import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
// import ComingSoon from "./pages/ComingSoon";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/" element={<HomePage/>} />
        <Route
          index
          path="/apartmanDetails/:id"
          element={<ApartmanDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
