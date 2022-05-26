import React from "react";
import "./CardCompetencias.css"

function CardCompetencias(props) {
    return (
        <div className="skillscard-container">
            <img src={props.imagem} />
            <div>
                <h4>{props.linguagem}</h4>
                <p>{props.competencias}</p>
            </div>
        </div>
    )
}

export default CardCompetencias;