import logo from './logo.svg';
import './App.css';
import CardMensagem from './components/CardMensagem';

function App() {


  return (
    <div className="App">
      <div className='Mensagens'>
        <CardMensagem
          texto="Mensagem 1 "
        />
        <CardMensagem
          texto="Mensagem 2 "
        />
        <CardMensagem
          texto="Mensagem 3 "
        />
        <CardMensagem
          texto="Mensagem 4 "
        />
      </div>
      <div>
        <input type="text" placeholder='Usuário' className='input-usuario' />
        <input type="text" placeholder='Mensagem' className='input-mensagem' />
        <button>Enviar</button>
      </div>
    </div>
  );
}

export default App;
