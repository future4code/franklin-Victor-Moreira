import { useState } from 'react';
import './App.css';
import { Etapa1 } from './components/Etapa1';
import { Etapa2 } from './components/Etapa2';
import { Etapa3 } from './components/Etapa3';
import { Final } from './components/Final';

function App() {

  const [etapa, setEtapa] = useState(0)

  const mudaEtapa = () => {
    setEtapa(etapa + 1)
  }

  const renderizaEtapa = () => {
    switch (etapa) {
      case 0:
        return <Etapa1 />
        break;
      case 1:
        return <Etapa2 />
        break;
      case 2:
        return <Etapa3 />
        break;
      case 3:
        return <Final />
        break;
      default:
        break;
    }

  }

  return (
    <div className="App">
      <h1>LabeForm</h1>
      {renderizaEtapa()}
      {etapa < 3 ? <button onClick={mudaEtapa}>Próxima etapa</button> : ''}
    </div>
  );
}

export default App;
