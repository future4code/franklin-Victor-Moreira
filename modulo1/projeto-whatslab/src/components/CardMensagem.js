import React from "react";
import styled from 'styled-components'

const Mensagem = styled.div`
border: thin solid black;
border-radius: 5px;
margin: .3em;
`

function CardMensagem(props) {
    return (
        <Mensagem>
            <p>{props.texto}</p>
        </Mensagem>
    )
}

export default CardMensagem