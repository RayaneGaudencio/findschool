import styled from "styled-components";
import TitleTopo from "../../components/pagina_instituicao/ThirdColumn/TitleTopo";
import LinhaAbaixoTitle from "../../components/pagina_instituicao/ThirdColumn/LinhaAbaixoTitle";
import Button from "../../components/Button";
import { React, useState } from 'react'
import DescricaoSobInput from '../../components/form/DescricaoSobInput'
import Input from '../../components/form/Input'
import { validateGrau, validateSerie, validateDescricao } from "../../validations/validaDadosAddSerie";
import DescricaoDadoIncorreto from "../../components/form/DadoIncorreto";

const FormHistorico = styled.div`
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
        padding: 2em;
        gap: 1em;

        & > div:nth-child(1) {
            color: #150096;
        }

        & > div:nth-child(2) {
            color: #FFFFFF;

        & > div {
          background-color: #4234CF;
          margin-bottom: 1em;
          padding: 0.6em;
          border-radius: 1em;
        }
      }
  
      }
`


const HistoricoInstituicao = () => {

    return (
    <FormHistorico>
        <div>
            <TitleTopo>Histórico</TitleTopo>
            <LinhaAbaixoTitle />
        </div>
        <form>
            <div>
                <h2> Olá, Colégio Santa Maria!</h2>  
                <h2>Seu perfil foi visitado 100 vezes hoje.</h2>
                <br></br>
            </div>
          
            <div>
                <div> 
                <span>Pedro Sampaoli</span><span> - visitou seu perfil 3 vezes hoje.</span>
                </div>

                <div>
                <span>Eduarda Nubia</span><span> - visitou seu perfil e avaliou em 5 estrelas.</span>
                </div>
              
                <div>
                <span>Maria Lourdes</span><span> - visitou seu perfil e pegou um código de desconto.</span>
                </div>              
            </div>

            <div>
            <DescricaoSobInput style={{marginBottom: '1em' }}>Inserir Cupom</DescricaoSobInput>
            <Input
            type="text"
            name="nome"
            />
            </div>

        <div>
            <Button><a href="" >Registrar Cupom</a></Button>
        </div>

        </form>
        
    </FormHistorico>
    )
}

export default HistoricoInstituicao