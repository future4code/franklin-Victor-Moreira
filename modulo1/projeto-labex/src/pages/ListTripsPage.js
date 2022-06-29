import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardDeViagens } from "../components/CardDeViagens/CardDeViagens";
import { goToApplicationFormPage, goToLastPage } from "../routes/coordinator";
import { useRequestData } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/urls";

function ListTripPage() {

  const [viagens, error, isLoading] = useRequestData(`${BASE_URL}:aluno/trips`)

  const navigate = useNavigate()

  return (
    <div className="list-trip-page">
      <div>
        <button onClick={() => goToLastPage(navigate)}><span class="material-icons">&#xe2ea;</span></button>
        <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
      </div>
      <div>
        <h2>Lista de Viagens</h2>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading && viagens && viagens.map((viagem) => {
          return <CardDeViagens viagem={viagem} />
        })}
      </div>
    </div>
  );
}

export default ListTripPage;