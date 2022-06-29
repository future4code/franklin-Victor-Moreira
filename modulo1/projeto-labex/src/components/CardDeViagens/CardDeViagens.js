import React from "react";
import { StyledCardDeViagens } from "./styled";

export const CardDeViagens = (props) => {
    return(
        <StyledCardDeViagens>
            <p><strong>Nome:</strong> {props.viagem.name}</p>
            <p><strong>Descrição:</strong>{props.viagem.description}</p>
            <p><strong>Planeta:</strong>{props.viagem.planet}</p>
            <p><strong>Duração:</strong>{props.viagem.durationInDays}</p>
            <p><strong>Data:</strong>{props.viagem.date}</p>
        </StyledCardDeViagens>
    )
}