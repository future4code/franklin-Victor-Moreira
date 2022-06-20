import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [usuarioNome, setUsuarioNome] = useState()
  const [usuarioEmail, setUsuarioEmail] = useState()

  const listaUsuarios = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

    const request = axios.get(url, {
      headers: {
        "Authorization": 'victor-moreira-franklin'
      }
    })

    request.then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect( listaUsuarios,[])

  const cadastraUsuarios = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

    const body = {  
      "name": usuarioNome.toString(),
      "email": usuarioEmail.toString()
    }

    const request = axios.post(url, body, {
      headers: {
        "Authorization": 'victor-moreira-franklin'
      }
    })

    const mensagem = request.then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error);
    })

    alert(mensagem.toString())
  }

  const handleUsuarioNome = (event) => {
    setUsuarioNome(event.target.value)
  }

  const handleUsuarioEmail = (event) => {
    setUsuarioEmail(event.target.value)
  }

  return (
    <div className="App">
      <button onClick={listaUsuarios}>Trocar de Tela</button>
      <input type="text" placeholder='Nome' onChange={handleUsuarioNome}/>
      <input type="email" placeholder='Email' onChange={handleUsuarioEmail}/>
      <button onClick={cadastraUsuarios}>Criar Usuário</button>
    </div>
  );
}

export default App;
