import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';

function App() {

  const [novaPlaylist, setNovaPlaylist] = useState()
  const [playlists, setPlaylists] = useState([])

  const getAllPlaylists = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    const request = axios.get(url, {
      headers: {
        Authorization: "victor-moreira-franklin"
      }
    })

    request.then((response) => {
      console.log(response.data.result.list);
      // setPlaylists(response.data.result.list);
    }).catch((error) => {
      console.log(error);
    })
  }

  const createPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    const body = {
      "name": novaPlaylist.toString()
    }

    const request = axios.post(url, body, {
      headers: {
        Authorization: "victor-moreira-franklin"
      }
    })

    request.then((response) => {
      console.log(response.data);
      alert("Playlist Adicionada")
    }).catch((error) => {
      console.log(error);
    })

    setPlaylists(...playlists, novaPlaylist)
  }

  const deletePlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    const body = {
      "name": "Nome-da-playlist"
    }

    const request = axios.delete(url, body, {
      headers: {
        Authorization: "victor-moreira-franklin"
      }
    })

    request.then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  const handlePlaylist = (event) => {
    setNovaPlaylist(event.target.value)
  }

  const renderPlaylists = playlists.map((dado) => {
    return <li>{dado}</li>
  })

  useEffect(getAllPlaylists)

  return (
    <div className="App">
      <h1>Criar Playlist</h1>

      <input type="text" placeholder='Nome da playlist' onChange={handlePlaylist}/>

      <button onClick={createPlaylist}>Adicionar Playlist</button>

      <ul>{renderPlaylists}</ul>
      
      <h1>Suas Playlists</h1>


    </div>
  );
}

export default App;
