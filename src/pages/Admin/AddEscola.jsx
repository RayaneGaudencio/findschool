import styled from "styled-components";

const FormAddEscola = styled.div`
    background-color: #D9D9D9;
    display: grid; 
    grid-template-columns: 3fr 1fr; 
    grid-template-rows: 1fr 5fr; 
    margin: 2em;
    border-radius: 8px;

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

import React from 'react'
import TitleTopo from  '../../components/pagina_admin/ThirdColumn/TitleTopo'
import DescricaoSobInput from '../../components/form/DescricaoSobInput'
import Input from '../../components/form/Input'
import Button from '../../components/Button'
import LinhaAbaixoTitle from "../../components/pagina_admin/ThirdColumn/LinhaAbaixoTitle";

const AddEscola = () => {
  return (
    <FormAddEscola>
        <div>
            <TitleTopo>Adicionar Escola</TitleTopo>
            <LinhaAbaixoTitle />
        </div>
        <form>
            <DescricaoSobInput>Nome da Instituição</DescricaoSobInput>
            <Input style={{width: '70%'}}/>
            <DescricaoSobInput>Email</DescricaoSobInput>
            <Input style={{width: '70%'}}/>
            <DescricaoSobInput>CNPJ</DescricaoSobInput>
            <Input />
            <DescricaoSobInput>Senha</DescricaoSobInput>
            <Input />
        </form>
        <div>
            <Button>Adicionar</Button>
        </div>
   </FormAddEscola>
  )
}

export default AddEscola
