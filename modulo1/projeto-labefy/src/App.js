import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css'
import CardMusica from './components/CardMusica';
import CardPlaylist from './components/CardPlaylist';
import styled from 'styled-components';

const Main = styled.main`
text-transform: uppercase;
background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;`

const Button = styled.button`
 padding: 0.8em 1.8em;
 border: 2px solid #17C3B2;
 position: relative;
 overflow: hidden;
 background-color: transparent;
 text-align: center;
 text-transform: uppercase;
 font-size: 16px;
 transition: .3s;
 z-index: 1;
 font-family: inherit;
 color: #17C3B2;
`

const CardInput = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    gap: 10px;
`

const Input = styled.input`
 padding: 0.8em 1.8em;
 border: 2px solid #17C3B2;
 position: relative;
 overflow: hidden;
 background-color: transparent;
 text-align: center;
 text-transform: uppercase;
 font-size: 16px;
 transition: .3s;
 z-index: 1;
 font-family: inherit;
 color: #17C3B2;
`

function App() {

  const [playlists, setPlaylists] = useState([])
  const [inputPlaylist, setInputPlaylist] = useState('')
  const [musicasDaPlaylist, setMusicasDaPlaylist] = useState([])
  const [idPlaylistSelecionada, setIdPlaylistSelecionada] = useState('')
  const [inputMusicName, setInputMusicName] = useState('')
  const [inputMusicArtist, setInputMusicArtist] = useState('')
  const [inputMusicUrl, setInputMusicUrl] = useState('')

  const pegaPlaylist = () => {

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    axios.get(url, {
      headers: {
        Authorization: "victor-moreira-franklin"
      }
    })
      .then((resposta) => {
        console.log(resposta.data.result.list);
        setPlaylists(resposta.data.result.list)
        setInputPlaylist('')
      })
      .catch((erro) => {
        console.log(erro);
      })
  }

  const criaPlaylist = () => {

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    const body = {
      "name": inputPlaylist
    }

    axios.post(url, body, {
      headers: {
        Authorization: "victor-moreira-franklin"
      }
    })
      .then((resposta) => {
        console.log(resposta);
        pegaPlaylist();
      })
      .catch((erro) => {
        console.log(erro);
      })
  }

  const deletaPlaylist = (id) => {

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

    axios.delete(url, {
      headers: {
        Authorization: "victor-moreira-franklin"
      }
    })
      .then((resposta) => {
        console.log(resposta);
        pegaPlaylist()
      })
      .catch((erro) => {
        console.log(erro);
      })
  }

  const pegaMusicasDaPlaylist = (id) => {

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

    axios.get(url, {
      headers: {
        Authorization: "victor-moreira-franklin"
      }
    })
      .then((resposta) => {
        console.log(resposta.data.result.tracks);
        setMusicasDaPlaylist(resposta.data.result.tracks)
        setInputMusicName('')
        setInputMusicArtist('')
        setInputMusicUrl('')
      })
      .catch((erro) => {
        console.log(erro);
      })

    setIdPlaylistSelecionada(id)
  }

  const adicionaMusica = () => {

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylistSelecionada}/tracks`

    const body = {
      "name": inputMusicName,
      "artist": inputMusicArtist,
      "url": inputMusicUrl
    }

    axios.post(url, body, {
      headers: {
        Authorization: "victor-moreira-franklin"
      }
    })
      .then((resposta) => {
        console.log(resposta);
        pegaMusicasDaPlaylist(idPlaylistSelecionada)
      })
      .catch((erro) => {
        console.log(erro.message);
      })
  }

  const deletaMusica = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylistSelecionada}/tracks/${id}`

    axios.delete(url, {
      headers: {
        Authorization: "victor-moreira-franklin"
      }
    })
      .then((resposta) => {
        console.log(resposta);
        pegaMusicasDaPlaylist(idPlaylistSelecionada)
      })
      .catch((erro) => {
        console.log(erro);
      })
  }

  const renderCardPlaylist = playlists.map((playlist) => {
    return (<div key={playlist.id}>
      <CardPlaylist
        pegaMusicasDaPlaylist={pegaMusicasDaPlaylist}
        deletaPlaylist={deletaPlaylist}
        id={playlist.id}
        name={playlist.name} />
    </div>
    )
  })

  const renderCardMusica = musicasDaPlaylist.map((musica) => {
    return (
      <CardMusica
        deletaMusica={deletaMusica}
        id={musica.id}
        name={musica.name}
        autor={musica.autor}
        url={musica.url}
      />
    )
  })

  const handleInputName = (event) => {
    setInputPlaylist(event.target.value)
  }

  const handleInputMusicName = (event) => {
    setInputMusicName(event.target.value)
  }

  const handleInputMusicArtist = (event) => {
    setInputMusicArtist(event.target.value)
  }

  const handleInputMusicUrl = (event) => {
    setInputMusicUrl(event.target.value)
  }

  useEffect(pegaPlaylist, [])

  return (
    <Main>
      <h2> Crie uma Playlist</h2>
      <CardInput>
        <Input type="text" value={inputPlaylist} placeholder='Nome da Playlist' onChange={handleInputName} />
        <Button onClick={criaPlaylist}>Adicionar Playlist</Button>
      </CardInput>

      <h2>Adicione uma música a sua playlist</h2>
      <CardInput>
        <Input type="text" value={inputMusicName} placeholder='Nome da música' onChange={handleInputMusicName} />
        <Input type="text" value={inputMusicArtist} placeholder='Nome do artista' onChange={handleInputMusicArtist} />
        <Input type="text" value={inputMusicUrl} placeholder='Url da música' onChange={handleInputMusicUrl} />
        <Button onClick={adicionaMusica}>Adicionar Musica</Button>
      </CardInput>

      <h2>Suas Playlists</h2>
      {renderCardPlaylist}

      <h2>Musicas da Playlist</h2>
      {renderCardMusica}

    </Main>
  );
}

export default App;
