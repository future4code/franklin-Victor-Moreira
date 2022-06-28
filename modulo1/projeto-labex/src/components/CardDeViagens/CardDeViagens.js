import React from "react";

export const CardDeViagens = (props) => {
    return(
        <div>
            <p>Nome: {props.viagem.name}</p>
            <p>Descrição: {props.viagem.description}</p>
            <p>Planeta: {props.viagem.planet}</p>
            <p>Duração: {props.viagem.durationInDays}</p>
            <p>Data: {props.viagem.date}</p>
        </div>
    )
}