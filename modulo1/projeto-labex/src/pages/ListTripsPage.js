import React from "react";
import { useNavigate } from "react-router-dom";
import { goToApplicationFormPage, goToLastPage } from "../routes/coordinator";

function ListTripPage() {
  const navigate = useNavigate()

  return (
    <div className="list-trip-page">
      <div>
        <div>
          <button onClick={() => goToLastPage(navigate)}><span class="material-icons">&#xe2ea;</span></button>
          <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
        </div>
      </div>
      <div>
        <h2>Lista de Viagens</h2>
      </div>
    </div>
  );
}

export default ListTripPage;