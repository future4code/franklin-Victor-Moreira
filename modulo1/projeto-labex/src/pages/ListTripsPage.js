import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardDeViagens } from "../components/CardDeViagens/CardDeViagens";
import { goToApplicationFormPage, goToLastPage } from "../routes/coordinator";
import { useRequestData } from "../hooks/useRequestData";

function ListTripPage() {

  const [viagens, setViagens] = useState([])
  const [viagens2, isLoading, error] = useRequestData(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips`)

  const navigate = useNavigate()

  const getTrips = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips`

    axios.get(url)
      .then((response) => {
        console.log(response.data.trips);
        setViagens(response.data.trips)
      })
      .catch((error) => {
        console.log(error.data);
      })
  }

  const listaDeViagens = viagens.map((viagem) => {
    return <CardDeViagens viagem={viagem} />
  })

  useEffect(getTrips, [])

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
        {listaDeViagens}
      </div>
    </div>
  );
}

export default ListTripPage;