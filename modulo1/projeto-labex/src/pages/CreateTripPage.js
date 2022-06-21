import React from "react";

function CreateTripPage() {
  return (
    <div>
        <h2>Criar Viagem</h2>
        <input type="text" placeholder="Nome"/>
        <br />
        <select> 
          <option>Escolha um Planeta</option>
        </select>
        <br />
        <input type="date"/>
        <br />
        <input type="text" placeholder="Descrição"/>
        <br />
        <input type="text" placeholder="Duração em dias"/>
        <br />
        <button><img src="#" alt="voltar" /></button>
        <button>Enviar</button>
    </div>
  );
}

export default CreateTripPage;