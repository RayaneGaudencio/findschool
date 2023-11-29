import { React, useState, useEffect } from 'react'
import ContainerPage from '../../components/pagina_admin/ContainerPage.js'
import FirstColumn from '../../components/pagina_instituicao/FirstColumn/FirstColumn.js'
import StyledImageIcon from '../../components/pagina_instituicao/FirstColumn/ImageIcon.js'
import IconPerfilSVG from '../../img/perfil.svg'
import IconEditarSVG from  '../../img/editar.svg'
import IconLogoutSVG from  '../../img/logout.svg'
import SecondColumn from '../../components/pagina_instituicao/SecondColum/SecondColumn.styled.js'
import Circulo from '../../img/circulo.svg'
import ImagemPerfil from '../../components/pagina_instituicao/SecondColum/ImagemPerfil.js'
import NomePerfil from '../../components/pagina_admin/NomePerfil.js'
import ButtonOpcoes from '../../components/pagina_instituicao/SecondColum/ButtonOpcoes.js'
import { useLocation } from 'react-router-dom';
import AddSerie from './AddSerie.jsx'
import LogoutInstituicao from './LogoutInstituicao.jsx'
import EditarInfos from './EditarInfos.jsx'
import HistoricoInstituicao from './HistoricoInstituicao.jsx'
import EditarPerfilInstituicao from './EditarPerfilInstituicao.jsx'


const HomeInstituicao = () => {
  const [isIconPerfilClicked, setIconPerfilClicked] = useState(true);
  const [isIconEditarClicked, setIconEditarClicked] = useState(false);
  const [isIconLogoutClicked, setIconLogoutClicked] = useState(false);
  const [isButtonAddSerieClicked, setIsButtonAddSerieClicked] = useState(false)
  const [isButtonEditarInformacoesClicked, setIsButtonEditarInformacoesClicked] = useState(false)
  const [isButtonHistoricoClicked, setIsButtonHistoricoClicked] = useState(false)
  const [isButtonEditarPerfilClicked, setIsButtonEditarPerfilClicked] = useState(false)
  
  useEffect(() => {
    if (isIconPerfilClicked) {
      setIconEditarClicked(false);
      setIconLogoutClicked(false)
      setIsButtonHistoricoClicked(false)
      setIsButtonEditarPerfilClicked(false)
    } 
  }, [isIconPerfilClicked]);

  useEffect(() => {
    if (isIconEditarClicked) {
      setIconPerfilClicked(false);
      setIconLogoutClicked(false)
    } 
  }, [isIconEditarClicked]);
  
  useEffect(() => {
    if (isIconLogoutClicked) {
      setIconEditarClicked(false)
      setIconPerfilClicked(false)
    } 
  }, [isIconLogoutClicked]);

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

  useEffect(() => {
    if (isIconPerfilClicked && isButtonHistoricoClicked) {
      setIsButtonEditarPerfilClicked(false)
     }
     
  }, [isButtonHistoricoClicked]);

  useEffect(() => {
    if (isIconPerfilClicked && isButtonEditarPerfilClicked) {
      setIsButtonHistoricoClicked(false)
     }
     
  }, [isButtonEditarPerfilClicked]);

  const location = useLocation();
  const { escola } = location.state;
  

  return (
    <ContainerPage 
    qtdColumns={isIconLogoutClicked}>
        <FirstColumn>
            <div>
              <StyledImageIcon 
                src={IconPerfilSVG} 
                isClicked={isIconPerfilClicked} 
                onClick={() => {
                  setIconPerfilClicked(true);}}
                style={{width: '1.6em'}}/>
              <StyledImageIcon 
                src={IconEditarSVG} 
                isClicked={isIconEditarClicked} 
                onClick={() => {
                  setIconEditarClicked(true); }}/>
            </div>
            <div>
            <StyledImageIcon 
                src={IconLogoutSVG} 
                isClicked={isIconLogoutClicked} 
                onClick={() => {
                  setIconLogoutClicked(true)
                }}
                />            
            </div>
        </FirstColumn>
        {(isIconPerfilClicked && !isIconLogoutClicked) &&
        <SecondColumn> 
          <div>
            <ImagemPerfil src={Circulo} />
            <NomePerfil>{escola.nome}</NomePerfil>
          </div>
          <div>
            <ButtonOpcoes
             isClicked={isButtonEditarPerfilClicked}
             onClick={() => {
              setIsButtonEditarPerfilClicked(true)
             }}
             >Editar Perfil</ButtonOpcoes>
            <ButtonOpcoes
            isClicked={isButtonHistoricoClicked}
            onClick={() => {
              setIsButtonHistoricoClicked(true)
            }}
            >Histórico</ButtonOpcoes>
          </div>
        </SecondColumn>}
        {(isIconEditarClicked && !isIconLogoutClicked) &&     
        <SecondColumn>
          <div>
            <ImagemPerfil src={Circulo} /> 
            <NomePerfil>{escola.nome}</NomePerfil>
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
      {isIconLogoutClicked && <LogoutInstituicao />}
      {(isIconEditarClicked && isButtonEditarInformacoesClicked) && 
      <EditarInfos />}
      {(isIconEditarClicked && isButtonEditarInformacoesClicked) && 
      <EditarInfos escola={escola}/>}
      {isIconPerfilClicked && isButtonHistoricoClicked && (
      <HistoricoInstituicao />
      )}
      {(isIconPerfilClicked && isButtonEditarPerfilClicked) &&
      <EditarPerfilInstituicao />}
    </ContainerPage>
  )
}

export default HomeInstituicao