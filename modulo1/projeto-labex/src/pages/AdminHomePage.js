import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCreateTripPage, goToLastPage, goToLoginPage } from "../routes/coordinator";

function AdminHomePage() {

  const navigate = useNavigate();

  return (
    <div className="admin-home-page">
      <h2>Painel administrativo</h2>
      <div>
        <button onClick={() => goToLastPage(navigate)}><span class="material-icons">&#xe2ea;</span></button>
        <button onClick={() => goToCreateTripPage(navigate)}><span class="material-icons">&#xe145;</span></button>
        <button onClick={() => goToLoginPage(navigate)}>Logout</button>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default AdminHomePage;