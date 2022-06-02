import React, { useState } from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const FormDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin: 5px;
`

const FormButton = styled.button`
  background-color: #000000;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
`

function App() {

  const [inputNomeDoUsuario, setInputNomeDoUsuario] = useState('')
  const [inputFotoDoUsuario, setInputFotoDoUsuario] = useState('')
  const [inputFotoDoPost, setInputFotoDoPost] = useState('')

  const [posts, setPosts] = useState([
    {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/200',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'nemo',
      fotoUsuario: 'https://picsum.photos/51/50',
      fotoPost: 'https://picsum.photos/201/150'
    },
    {
      nomeUsuario: 'pirulito',
      fotoUsuario: 'https://picsum.photos/52/50',
      fotoPost: 'https://picsum.photos/202/150'
    }
  ]
  )

  const handleInputNomeDoUsuario = (event) => {
    setInputNomeDoUsuario(event.target.value)
  }

  const handleInputFotoDoUsuario = (event) => {
    setInputFotoDoUsuario(event.target.value)
  }

  const handleInputFotoDoPost = (event) => {
    setInputFotoDoPost(event.target.value)
  }

  const listaDePosts = posts.map((post) => {
    console.log(post)

    return (
      <Post key={post.nomeUsuario}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost} />
    );
  }
  )

  const adicionaPost = () => {
    const novoPost = {
      nomeUsuario: inputNomeDoUsuario,
      fotoUsuario: inputFotoDoUsuario,
      fotoPost: inputFotoDoPost
    }

    setPosts([...posts, novoPost])

    setInputNomeDoUsuario('')
    setInputFotoDoUsuario('')
    setInputFotoDoPost('')
  }

  return (
    <MainContainer>
      {listaDePosts}
      <Form>
        <h2>Adicione um novo post:</h2>
        <FormDiv>
          <label>Nome do usuário:</label>
          <input value={inputNomeDoUsuario} onChange={handleInputNomeDoUsuario} /><br />
        </FormDiv>
        <FormDiv>
          <label>Foto do usuário: </label>
          <input value={inputFotoDoUsuario} onChange={handleInputFotoDoUsuario} /><br />
        </FormDiv>
        <FormDiv>
          <label>Foto do post: </label>
          <input value={inputFotoDoPost} onChange={handleInputFotoDoPost} /><br />
        </FormDiv>
        <FormButton onClick={adicionaPost}>Adicionar Post</FormButton>
      </Form>
    </MainContainer>
  )
}

export default App;
