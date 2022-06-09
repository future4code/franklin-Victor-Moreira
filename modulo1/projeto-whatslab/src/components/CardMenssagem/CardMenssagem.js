import React from "react";
import styled from 'styled-components'

const Mensagem = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 5px;
border: none;
border-radius: 5px;
margin: 5px;
width: 70%;
padding: 1%  3%;
background-color: #FFF;
`

function CardMensagem(props) {

    return (
        <Mensagem>
            <strong>{props.usuario}:</strong> {props.mensagem}
        </Mensagem>
    )
}

export default CardMensagem