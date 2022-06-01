import React from 'react'
import styled from 'styled-components'

const ShareContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

export function SecaoCompartilhamento(props) {
	return (
		<ShareContainer>
			<button onClick={props.aoCompartilhar}>Enviar</button>
		</ShareContainer>
	)
}