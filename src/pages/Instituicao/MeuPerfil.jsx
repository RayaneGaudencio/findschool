import styled from "styled-components";

const FormAddSerie = styled.div`
    display: grid; 
    grid-template-columns: 3fr 1fr; 
    grid-template-rows: 1fr 5fr; 
    margin: 2em;

    & > div:nth-child(1) {
        grid-column: 1 / span 2;
        grid-row: 1;
    } 

    & > form:nth-child(2) {
        grid-column: 1;
        grid-row: 2;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1em;
        padding: 2em;

        color: #030200;
    }

    & > div:nth-child(3) {
        grid-column: 2;
        grid-row: 2;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 1em 2em;
    }
`
import { React, useState } from 'react'
import TitleTopo from  '../../components/pagina_instituicao/ThirdColumn/TitleTopo'
import LinhaAbaixoTitle from "../../components/pagina_instituicao/ThirdColumn/LinhaAbaixoTitle";

const MeuPerfil = () => {
    return(
        // <FormMeuPerfil>
        <div>
            <TitleTopo>MeuPerfil</TitleTopo>
            <LinhaAbaixoTitle />
        </div>
        )
 }  

    

export default MeuPerfil;