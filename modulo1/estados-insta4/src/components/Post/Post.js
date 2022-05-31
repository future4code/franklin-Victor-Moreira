import React, { useState } from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeDeMarcacaoBranco from '../../img/bookmark-border-black.svg'
import iconeDeMarcacaoPreto from '../../img/bookmark-black.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeCompartilhamento from '../../img/share_black.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

function Post(props) {
  // const [state, setState] = useState({
  //   curtido: false,
  //   numeroCurtidas: 0,
  //   comentando: false,
  //   numeroComentarios: 0,
  //   inputComentario: ''
  // })

  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [curtido, setCurtido] = useState(false)
  const [salvo, setSalvo] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [inputComentario, setInputComentario] = useState('')

  const onClickMarcacao = () => {
    setSalvo(!salvo)
  }

  const onClickCurtida = () => {
    if (!curtido) {
      setNumeroCurtidas(numeroCurtidas + 1)
    } else {
      setNumeroCurtidas(numeroCurtidas - 1)
    }
    setCurtido(!curtido)
  }

  const onClickComentario = () => {
    setComentando(!comentando)
    if (comentando) {
      componenteComentario = <SecaoComentario valueInputComentario={inputComentario} aoEnviar={aoEnviarComentario} onChange={handleInputComentario} />
    }
    console.log(comentando)
  }

  const onClickCompatilha = () => {
    console.log("Clicou no compartilha");
  }

  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  const handleInputComentario = (event) => {
    setInputComentario(event.target.value)
  }

  let iconeSalvo

  if (salvo) {
    iconeSalvo = iconeDeMarcacaoPreto
  } else {
    iconeSalvo = iconeDeMarcacaoBranco
  }

  let iconeCurtida

  if (curtido) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }

  let componenteComentario

  if (comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} />
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />

        <IconeComContador
          icone={iconeSalvo}
          onClickIcone={onClickMarcacao}
        />

        <IconeComContador
          icone={iconeCompartilhamento}
          onClickIcone={onClickCompatilha}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  )
}


export default Post