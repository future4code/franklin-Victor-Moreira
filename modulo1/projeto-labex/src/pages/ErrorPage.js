import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToLastPage } from "../routes/coordinator";

function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div className="page">
      <h1>Página não encontrada :(</h1>
      <p>A página que você tentou acessar está indisponível ou não existe</p>
      <div>
        <button onClick={() => goToLastPage(navigate)}><span class="material-icons">&#xe2ea;</span></button>
        <button onClick={() => goToHomePage(navigate)}>Voltar para a página inicial</button>
      </div>
    </div>
  );
}

export default ErrorPage;