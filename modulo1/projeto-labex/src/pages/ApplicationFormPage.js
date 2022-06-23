import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";

function ApplicationFormPage() {

  const navigate = useNavigate()

  return (
    <div className="page">
      <h2>Inscreva-se para uma viagem</h2>
      <form action="">
        <select required>
          <option disabled selected>Escolha uma Viagem</option>
        </select>
        <br />
        <input type="text" placeholder="Nome" required/>
        <br />
        <input type="number" placeholder="idade" required/>
        <br />
        <input type="text" placeholder="Texto de Candidatura" required/>
        <br />
        <input type="text" placeholder="Profissão" required/>
        <br />
        <select required>
          <option disabled selected>Escolha um País</option>
        </select>
        <br />
        <button onClick={() => goToLastPage(navigate)}><span class="material-icons">&#xe2ea;</span></button>
        <button onClick={""}>Enviar</button>
      </form>
    </div>
  );
}

export default ApplicationFormPage;