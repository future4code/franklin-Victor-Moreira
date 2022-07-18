import React from "react";
import { StyledCardDeViagensAdm } from "./styled";

export const CardDeViagensAdm = (props) => {



    return(
        <StyledCardDeViagensAdm>
            <p>{props.viagem.name}</p>
            <button onClick={console.log("alsdkj")}>X</button>
        </StyledCardDeViagensAdm>
    )
}