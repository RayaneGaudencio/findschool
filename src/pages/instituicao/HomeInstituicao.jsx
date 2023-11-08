import { React, useState, useEffect } from 'react'
import ContainerPage from '../../components/pagina_admin/ContainerPage'
import FirstColumn from '../../components/pagina_instituicao/FirstColumn/FirstColumn'
import StyledImageIcon from '../../components/pagina_instituicao/FirstColumn/ImageIcon'
import IconPerfilSVG from '../../img/perfil.svg'
import IconEditarSVG from  '../../img/editar.svg'
import IconLogoutSVG from  '../../img/logout.svg'
import SecondColumn from '../../components/pagina_instituicao/SecondColum/SecondColumn.styled.js'
import Circulo from '../../img/circulo.svg'
import ImagemPerfil from '../../components/pagina_instituicao/SecondColum/ImagemPerfil'
import NomePerfil from '../../components/pagina_admin/NomePerfil'
import ButtonOpcoes from '../../components/pagina_instituicao/SecondColum/ButtonOpcoes'
import { useLocation } from 'react-router-dom';
import AddSerie from './AddSerie'


const HomeInstituicao = () => {
  const [isIconPerfilClicked, setIconPerfilClicked] = useState(true);
  const [isIconEditarClicked, setIconEditarClicked] = useState(false);
  const [isButtonAddSerieClicked, setIsButtonAddSerieClicked] = useState(false)
  const [isButtonEditarInformacoesClicked, setIsButtonEditarInformacoesClicked] = useState(false)


  useEffect(() => {
   if (isIconEditarClicked && isButtonAddSerieClicked) {
    setIsButtonEditarInformacoesClicked(false)
   }
  }, [isButtonAddSerieClicked]);


  useEffect(() => {
    if (isIconEditarClicked && isButtonEditarInformacoesClicked) {
      setIsButtonAddSerieClicked(false)
     }
     
  }, [isButtonEditarInformacoesClicked]);

  

  return (
    <ContainerPage>
        <FirstColumn>
            <div>
              <StyledImageIcon 
                src={IconPerfilSVG} 
                isClicked={isIconPerfilClicked} 
                onClick={() => {
                  setIconPerfilClicked(true);
                  setIconEditarClicked(false);}}
                style={{width: '1.6em'}}/>
              <StyledImageIcon 
                src={IconEditarSVG} 
                isClicked={isIconEditarClicked} 
                onClick={() => {
                  setIconEditarClicked(true); 
                  setIconPerfilClicked(false);}} />
            </div>
            <div>
             <StyledImageIcon src={IconLogoutSVG}/>        
            </div>
        </FirstColumn>
        {isIconPerfilClicked ? 
        <SecondColumn> 
          <div>
            <ImagemPerfil src={Circulo} />
            {/* <NomePerfil>{usuario.nome}</NomePerfil> */}
          </div>
          <div>
            <ButtonOpcoes>Meu Perfil</ButtonOpcoes>
            <ButtonOpcoes>Histórico</ButtonOpcoes>
          </div>
        </SecondColumn> : 
        <SecondColumn>
          <div>
            <ImagemPerfil src={Circulo} /> 
            {/* <NomePerfil>{usuario.nome}</NomePerfil> */}
          </div>
          <div>
          <ButtonOpcoes
          isClicked={isButtonEditarInformacoesClicked}
            onClick={() => {
              setIsButtonEditarInformacoesClicked(true)}}
            >Editar informações</ButtonOpcoes>
          <ButtonOpcoes
          isClicked={isButtonAddSerieClicked}
          onClick={() => {
            setIsButtonAddSerieClicked(true)}}
          >Adicionar séries</ButtonOpcoes>
          </div>
        </SecondColumn>}
      {(isIconEditarClicked && isButtonAddSerieClicked) && 
      <AddSerie />}
      <link rel="stylesheet" href="" />
    </ContainerPage>
  )
}

export default HomeInstituicao