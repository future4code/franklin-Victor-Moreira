import React from "react";

function ApplicationFormPage() {
  return (
    <div>
      <h2>Inscreva-se para uma viagem</h2>
      <form action="">
        <select>
          <option>Escolha uma Viagem</option>
        </select>
        <br />
        <input type="text" placeholder="Nome" />
        <br />
        <input type="text" placeholder="idade" />
        <br />
        <input type="text" placeholder="Texto de Candidatura" />
        <br />
        <input type="text" placeholder="Profissão" />
        <br />
        <select>
          <option>Escolha um País</option>
        </select>
        <br />
        <button><img src="../img/arrow_back.svg" alt="voltar" /></button>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default ApplicationFormPage;