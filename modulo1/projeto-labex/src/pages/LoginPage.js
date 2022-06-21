import React from "react";

function LoginPage() {
  return (
    <div>
      <h2>LoginPage</h2>
      <form action="">
        <input type="email" placeholder="E-mail" />
        <br />
        <input type="password" placeholder="Senha" />
        <br />
        <button><img src="../img/arrow_back.svg" alt="voltar" /></button>
        <button>Inscrever-se</button>
      </form>
    </div>
  );
}

export default LoginPage;