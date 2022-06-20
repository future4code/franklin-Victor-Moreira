import React from "react";
import styled from "styled-components";
import ReactAudioPlayer from 'react-audio-player';

const Button = styled.button`
 padding: 0.8em 1.8em;
 border: 2px solid red;
 position: relative;
 overflow: hidden;
 background-color: transparent;
 text-align: center;
 text-transform: uppercase;
 font-size: 16px;
 transition: .3s;
 z-index: 1;
 font-family: inherit;
 color: red;
`

const CardMusicaDiv = styled.div`
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding: 10px;
`

const MusicaDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    text-align: center;
    gap: 10px;
`

const CardMusica = (props) => {

    const { deletaMusica } = props

    return (
        <CardMusicaDiv>
            <MusicaDiv key={props.id}>{props.name}
                <ReactAudioPlayer src={props.url} controls />
                <Button onClick={() => deletaMusica(props.id)}>X</Button>
            </MusicaDiv>
        </CardMusicaDiv>
    );
}

export default CardMusica;