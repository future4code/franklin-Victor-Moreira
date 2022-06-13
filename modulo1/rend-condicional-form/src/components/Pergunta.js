import React from "react";

const Pergunta = (props) => {

    const dados = props.opcoes

    // const listaDeOpcoes = dados.map((opcao) => { return <option>{opcao}</option>})

    // console.log(`listaDeOpcoes: ${listaDeOpcoes}`);

    const renderPergunta = () => {
        if (props.tipo === 'opcoes') {
            return <select> {dados.map((opcao) => { return <option key={opcao}>{opcao}</option>})} </select>
        } else {
            return <input />
        }
    }

    return (
        <div>
            <p>{props.questao}</p>
            {renderPergunta()}
        </div>
    )
}

export { Pergunta }