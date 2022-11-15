import styled from 'styled-components'

export const StyledDashboard = styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;


    @media screen and (max-width: 1200px){
        align-items: center;
        align-content: center;
        flex-direction: column;
        gap: 0;
    }
`