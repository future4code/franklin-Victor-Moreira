import React from 'react'
import { Pergunta } from './Pergunta'

const Etapa1 = () => {

    return (
        <div>
            <h3>ETAPA 1 - DADOS GERAIS</h3>
            <Pergunta questao={'1. Qual o seu nome?'} />
            <Pergunta questao={'2. Qual sua idade?'} />
            <Pergunta questao={'3. Qual seu email?'} />
            <Pergunta questao={'4. Qual a sua escolaridade?'} opcoes={['Ensino médio incompleto', 'Ensino médio completo','Ensino superior incompleto','Ensino superior completo']} tipo = {'opcoes'}/>
        </div>
    )
}

export { Etapa1 }