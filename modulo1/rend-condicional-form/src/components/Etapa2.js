import React from 'react'
import { Pergunta } from './Pergunta'

const Etapa2 = () => {

    return (
        <div>
            <h3>ETAPA 2 - DADOS GERAIS</h3>
            <ol start={5}>
                <Pergunta questao={'5. Qual curso?'}/>
                <Pergunta questao={'6. Qual a unidade de ensino?'} />
            </ol>
        </div>
    )
}

export { Etapa2 }