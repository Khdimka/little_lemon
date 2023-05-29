import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import "./App.css"
import { useState } from "react";
import { Route,Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";


function App() {


  return (
    <div className="container">
      <Nav/>
      <Routes>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/Reservation" element={<BookingPage/>}/>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
    </div>
  );
}

export default App;
