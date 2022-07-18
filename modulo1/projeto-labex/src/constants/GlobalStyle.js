import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0px 0;
    }

    body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;

        background-image: url(https://i.redd.it/g8yunxgj86u01.jpg);
        background-position: right center;
        background-size: 100vh;
        background-repeat: no-repeat;
        /* background-size: cover; */
    }

    button{
        font-weight: bold;
        background-color: #FE7E02;
        border: none;
        border-radius: 4px;
        padding: 0.8em 2em;
        margin: 0.8em .5em;
        cursor: pointer;
    }

    input, select{
        min-width: 250px;
        background-color: white;
        border: thin solid #767676;
        border-radius: 4px;
        padding: 0.8em;
        margin: 0.8em .5em;
    }

    select{
        min-width: 272px;
    }

    .page, .list-trip-page, .admin-home-page, .trip-details-page{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;

        background-color: #dddddd99;
    }

    .list-trip-page, .admin-home-page, .trip-details-page{
        justify-content: flex-start;
    }

    .logo-labex{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    .logo-labenu{
        width: 30px;
    }

    .material-icons{
        font-family: 'Material Icons';
        font-weight: bold;
        font-size: 10px;  /* Preferred icon size */
        margin: 0;
    }
`

export { GlobalStyle };
