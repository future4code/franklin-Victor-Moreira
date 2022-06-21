import React from "react";
import HomePage from './pages/HomePage';
import './App.css';
import ListTripPage from "./pages/ListTripsPage";
import CreateTrip from "./pages/CreateTripPage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import LoginPage from "./pages/LoginPage";
import TripDetailPage from "./pages/TripDetailsPage";
import AdminHomePage from "./pages/AdminHomePage";

function App() {
  return (
    <div className="App">
      <HomePage/>
      <hr />
      <ListTripPage/>
      <hr />
      <ApplicationFormPage/>
      <hr />
      <LoginPage/>
      <hr />
      <AdminHomePage/>
      <hr />
      <CreateTrip/>
      <hr />
      <TripDetailPage/>
    </div>
  );
}

export default App;
