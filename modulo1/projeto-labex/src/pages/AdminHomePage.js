import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCreateTripPage, goToLastPage, goToLoginPage } from "../routes/coordinator";
import { BASE_URL } from "../constants/urls";
import { useRequestData } from "../hooks/useRequestData";
import { CardDeViagensAdm } from "../components/CardDeViagensAdm/CardDeViagensAdm";

function AdminHomePage() {

  const navigate = useNavigate();

  const [viagens, error, isLoading] = useRequestData(`${BASE_URL}:aluno/trips`)

  return (
    <div className="admin-home-page">
      <h2>Painel administrativo</h2>
      <div>
        <button onClick={() => goToLastPage(navigate)}><span class="material-icons">&#xe2ea;</span></button>
        <button onClick={() => goToCreateTripPage(navigate)}><span class="material-icons">&#xe145;</span></button>
        <button onClick={() => goToLoginPage(navigate)}>Logout</button>
      </div>
      <div>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading && viagens && viagens.map((viagem) => {
          return <CardDeViagensAdm viagem={viagem} />
        })}
      </div>
    </div>
  );
}

export default AdminHomePage;