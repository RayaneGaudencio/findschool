import styled from "styled-components";

const FormRemoverEscola = styled.div`
    background-color: #D9D9D9;
    display: grid; 
    grid-template-columns: 3fr 1fr; 
    grid-template-rows: 1fr 5fr; 
    margin: 2em;
    border-radius: 8px;
    overflow-x: auto;

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

const Procura = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;

import React from 'react'
import TitleTopo from  '../../components/pagina_admin/ThirdColumn/TitleTopo'
import DescricaoSobInput from '../../components/form/DescricaoSobInput'
import Input from '../../components/form/Input'
import Button from '../../components/Button'
import LinhaAbaixoTitle from "../../components/pagina_admin/ThirdColumn/LinhaAbaixoTitle";

const RemoverEscola = () => {
  return (
    <FormRemoverEscola>
        <div>
            <TitleTopo>Remover Escola</TitleTopo>
            <LinhaAbaixoTitle />
        </div>
        <form>
            <DescricaoSobInput>Remover Escola</DescricaoSobInput>
            <Procura>
                <Input style={{width: '30em'}}/>
                <Button>Procurar Escola</Button>
            </Procura>
        </form>
        <div>
            <Button>Remover</Button>
        </div>
    </FormRemoverEscola>
  )
}

export default RemoverEscola