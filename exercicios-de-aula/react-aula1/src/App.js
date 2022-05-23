import logo from './Logo_labenu.svg';
import './App.css';

function App() {

  const titulo = "Aprenda React com a Labenu!"

  function mensagem(){
    alert("Clicou!")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{titulo}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.labenu.com.br/?gclid=CjwKCAjw4ayUBhA4EiwATWyBrqy-Fq_liAqLWe4VlAKBd4Qh4KPNGRJnfF1JwR5fTH8VKHC7h786pBoCDuMQAvD_BwE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site da Labenu!
        </a>
        <button onClick={mensagem}>Clique aqui</button>
      </header>
    </div>
  );
}

export default App;