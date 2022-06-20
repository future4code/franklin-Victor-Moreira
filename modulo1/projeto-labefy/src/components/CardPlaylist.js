import React from "react";
import styled from "styled-components";

const CardPlaylistDiv = styled.div`
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding: 10px;
`

const PlaylistDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    text-align: center;
    gap: 10px;
`

const Button = styled.button`
 padding: 0.8em 1.8em;
 border: 2px solid #17C3B2;
 position: relative;
 overflow: hidden;
 background-color: transparent;
 text-align: center;
 text-transform: uppercase;
 font-size: 16px;
 transition: .3s;
 z-index: 1;
 font-family: inherit;
 color: #17C3B2;
`

const ButtonRemove = styled.button`
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

const CardPlaylist = (props) => {

    const { pegaMusicasDaPlaylist } = props
    const { deletaPlaylist } = props

    return (
        <CardPlaylistDiv>
            <PlaylistDiv key={props.id}>
                {props.name}
                <Button onClick={() => pegaMusicasDaPlaylist(props.id)}>Acessar músicas da playlist</Button>
                <ButtonRemove onClick={() => deletaPlaylist(props.id)}>X</ButtonRemove>
            </PlaylistDiv>
        </CardPlaylistDiv>
    );
}

export default CardPlaylist;