import styled from 'styled-components'

export const StyledToolbar = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    padding: 20px;

    @media screen and (max-width: 700px){
        align-items: center;
        flex-direction: column;
    }
`