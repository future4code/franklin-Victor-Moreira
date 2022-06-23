import React from "react";

function TripDetailPage() {
  return (
    <div className="trip-details-page">
        <h2>Astro</h2>
        <div>Card de detalhes</div>
        <button><span class="material-icons">&#xe2ea;</span></button>
        <h3>Candidatos Pendentes</h3>
        <div>Card de Candidatos Pendentes</div>
        <h3>Candidatos Aprovados</h3>
        <ul>
          <li>Lista de candidatos aprovados</li>
        </ul>
    </div>
  );
}

export default TripDetailPage;