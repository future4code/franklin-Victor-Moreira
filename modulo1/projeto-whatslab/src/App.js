import React, { useState } from 'react';
import './App.css';
import CardMensagem from './components/CardMenssagem/CardMenssagem';
import styled from 'styled-components'

const Button = styled.button`
  margin: 1%;
  padding: 1%;
  background-color: #EFEFEF;
  border: none;
  border-radius: 5px;
  font-weight: bold;
`

const InputUsuario = styled.input`
  max-width: 20%;
  margin: 1%;
  padding: 1%;
  border: none;
  border-radius: 5px;
`

const InputMensagem = styled.input`
  flex: 1 1 0%;
  margin: 1%;
  padding: 1%;
  border: none;
  border-radius: 5px;
`

const DivEntradaDados = styled.div`
  display: flex;
  width: 100%;
  /* border: thin solid black; */
`

function App() {


  const [inputUsuario, setInputUsuario] = useState('')
  const [inputMensagem, setInputMensagem] = useState('')

  const [cardMensagem, setCardMensagem] = useState([
    {
      usuario: 'Victor Ramon',
      mensagem: 'Olá'
    },
  ])

  const handleInputUsuario = (event) => {
    setInputUsuario(event.target.value)
  }

  const handleInputMensagem = (event) => {
    setInputMensagem(event.target.value)
  }

  const listaDeMensagens = cardMensagem.map((card) => {
    return (
      <CardMensagem
        key={card.usuario}
        usuario={card.usuario}
        mensagem={card.mensagem}
      />
    )
  })

  const enviaMensagem = () => {
    const novaMensagem = {
      usuario: inputUsuario,
      mensagem: inputMensagem
    }

    setCardMensagem([...cardMensagem, novaMensagem])

    setInputMensagem('')
    setInputUsuario('')
  }

  return (
    <div className="App">
      <div>
        {listaDeMensagens}
      </div>
      <DivEntradaDados>
        <InputUsuario placeholder='Remetente' value={inputUsuario} onChange={handleInputUsuario} />
        <InputMensagem placeholder='Conteúdo' value={inputMensagem} onChange={handleInputMensagem} />
        <Button onClick={enviaMensagem} >Enviar</Button>
      </DivEntradaDados>
    </div>
  );
}

export default App;
