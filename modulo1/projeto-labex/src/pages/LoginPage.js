import React from "react";

function LoginPage() {
  return (
    <div className="page">
      <h2>LoginPage</h2>
      <form action="">
        <input type="email" placeholder="E-mail" />
        <br />
        <input type="password" placeholder="Senha" />
        <br />
        <button><span class="material-icons">&#xe2ea;</span></button>
        <button>Inscrever-se</button>
      </form>
    </div>
  );
}

export default LoginPage;