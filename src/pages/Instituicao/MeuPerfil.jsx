import styled from "styled-components";


const FormMeuPerfil = styled.div`
  display: grid; 
  grid-template-rows: 1.5fr 1fr 1fr 1fr 1fr;
  margin: 1.5em;
  overflow-x: auto;
  backgroud: #F4F2EB;

  &>div:nth-child(1) {
   margin-bottom: 0.5em;
  }

  &>div:nth-child(2) {
   max-width: 50em;
   font-size:1.3em;
   margin-bottom: 2em;
  }

  &>div:nth-child(3) {
    max-width: 50em;
    font-size:1.3em;
    max-heigth: 1.5em;
   }

   &>div:nth-child(4) {
    max-width: 50em;
    font-size:1.3em;
    max-heigth: 1.5em;
   }

   &>div:nth-child(5) {
    max-width: 50em;
    font-size:1.3em;
    max-heigth: 1.5em;
   }

   
  }
`;

import React from "react";
import TitleTopo from "../../components/pagina_instituicao/ThirdColumn/TitleTopo";
import LinhaAbaixoTitle from "../../components/pagina_instituicao/ThirdColumn/LinhaAbaixoTitle";

const MeuPerfil = () => {
  return (
    <FormMeuPerfil>
      <div>
        <TitleTopo>Meu Perfil</TitleTopo>
       <LinhaAbaixoTitle />
      </div>

      <div>
        <h5>Descrição</h5>
        <p
        style={{ color:"#4234CF"}}
        >
          Somos o Santa Maria, uma escola que vai muito além do básico. Da
          educação infantil ao ensino médio. Aqui formamos grandes futuros
          profissionais qualificados e prontos para o mundo de trabalho.
          Contamos com cerca de mais de 1000 alunos aprovados no Exame Nacional
          do Ensino Médio. Aqui é a escolha certa. Venha ser um de nós.
        </p>
      </div>

      <div>
        <h5
        >Endereço</h5>
        <p
         style={{ color:"#4234CF"}}
        >
        R. das laranjeiras, 3887 - Paiva, Cabo de Santo Agostinho-PE 54522-165
        </p>
      </div>
      <div>
        <h5>Contato</h5>
        <p
         style={{ color:"#4234CF"}}
        >
        colegio@colegiosantamaria.com.br, @colegiosantamaria e (81) 3455-7651.
        </p>
      </div>
      <div>
        <h5>Extracurriculares</h5>
        <p
         style={{ color:"#4234CF"}}
        >
        Ballet, Artes Marciais, Natação e Idiomas.
        </p>
      </div>
    </FormMeuPerfil>
  );
};

export default MeuPerfil;
