import React from "react";

const Pergunta = (props) => {

    const dados = props.opcoes

    console.log(props.opcoes);

    const dadosGenericos = ['1° Opção', '2° Opção', '3° Opção', '4° Opção']

    // const listaDeOpcoes = dados.map((opcao) => { 
    //     return <option>{opcao}</option>
    // })

    const renderPergunta = () => {
        if (props.tipo === 'opcoes') {
            return <select> {dados.map((opcao) => { return <option>{opcao}</option>})} </select>
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