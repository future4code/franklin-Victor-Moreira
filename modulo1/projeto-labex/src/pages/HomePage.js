import React from "react";
import { useNavigate } from "react-router-dom";
import {goToAdminHomePage, goToListTripPage} from "../routes/coordinator"

function HomePage() {

  const navigate = useNavigate()

  return (
    <div className="page">
      <div className="logo-labex">
        <img src="https://i.ytimg.com/an/_cy2msyfX-I6vXt0oxRGEg/featured_channel.jpg?v=62829fba" className="logo-labenu" alt="logo-labenu" />
        <h1>LabeX</h1>
      </div>
      <div>
        <button onClick={() => goToListTripPage(navigate)}>Ver Viagens</button>
        <button onClick={() => goToAdminHomePage(navigate)}>Área de Admin</button>
      </div>
    </div>
  );
}

export default HomePage;