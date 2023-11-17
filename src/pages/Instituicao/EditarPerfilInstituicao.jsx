import styled from "styled-components";

const FormEditarPerfil = styled.div`
    background-color: #D9D9D9;
    display: grid; 
    grid-template-columns: 3fr 1fr; 
    grid-template-rows: 0.5fr 5fr; 
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

const AlterarImagemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

import React from 'react'
import TitleTopo from  '../../components/pagina_instituicao/ThirdColumn/TitleTopo'
import DescricaoSobInput from '../../components/form/DescricaoSobInput'
import Input from '../../components/form/Input'
import Button from '../../components/Button'
import LinhaAbaixoTitle from "../../components/pagina_instituicao/ThirdColumn/LinhaAbaixoTitle";
import Circulo from '../../img/circulo.svg'
import ImagemPerfil from '../../components/pagina_admin/SecondColum/ImagemPerfil'

const EditarPerfilInstituicao = () => {
  return (
    <FormEditarPerfil>
      <div>
        <TitleTopo>Editar Perfil</TitleTopo>
        <LinhaAbaixoTitle />
      </div>
      <form>
        <AlterarImagemContainer>
          <ImagemPerfil src={Circulo} style={{ width: '10em', height: '10em' }} />
          <Button>Alterar Imagem</Button>
        </AlterarImagemContainer>
        <DescricaoSobInput>Alterar Descrição</DescricaoSobInput>
        <Input style={{width: '70%'}}/>
        <DescricaoSobInput>Telefone</DescricaoSobInput>
        <Input style={{width: '40%'}}/>
        <DescricaoSobInput>Alterar Senha</DescricaoSobInput>
        <Input style={{width: '40%'}}/>
        <DescricaoSobInput>Confirmar Senha</DescricaoSobInput>
        <Input style={{width: '40%'}}/>
        </form>
        <div>
          <Button>Adicionar</Button>
        </div>
    </FormEditarPerfil>
  )
}

export default EditarPerfilInstituicao
