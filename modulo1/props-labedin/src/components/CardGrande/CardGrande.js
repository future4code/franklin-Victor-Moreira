import React from 'react';
import './CardGrande.css'

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.cargo }</h4>
                <h5>{ props.nome }</h5>
                <p>{ props.data }</p>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardGrande;