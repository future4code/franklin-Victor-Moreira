import React from 'react'
import { Pergunta } from './Pergunta'

const Etapa3 = () => {

    return (
        <div>
            <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
            <Pergunta questao={'5. Por que você não terminou um curso de graduação?'} />
            <Pergunta questao={'6. Você fez algum curso complementar?'} opcoes = {['Nenhum', 'Curso técnico','Curso de inglês']} tipo = {'opcoes'}/>
        </div>
    )
}

export { Etapa3 }