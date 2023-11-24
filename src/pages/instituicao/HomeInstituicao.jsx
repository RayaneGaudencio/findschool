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
import LogoutInstituicao from './LogoutInstituicao.jsx'
import EditarInfos from './EditarInfos.jsx'
import AddEndereco from './AddEndereço.jsx'


const HomeInstituicao = () => {
  const [isIconPerfilClicked, setIconPerfilClicked] = useState(true);
  const [isIconEditarClicked, setIconEditarClicked] = useState(false);
  const [isIconLogoutClicked, setIconLogoutClicked] = useState(false);
  const [isButtonAddSerieClicked, setIsButtonAddSerieClicked] = useState(false)
  const [isButtonEditarInformacoesClicked, setIsButtonEditarInformacoesClicked] = useState(false)
  const [isButtonAddEnderecoClicked, setIsButtonAddEnderecoClicked] = useState(false)
  
  useEffect(() => {
    if (isIconPerfilClicked) {
      setIconEditarClicked(false);
      setIconLogoutClicked(false)
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
    setIsButtonAddEnderecoClicked(false)
   }
  }, [isButtonAddSerieClicked]);

  useEffect(() => {
    if (isIconEditarClicked && isButtonEditarInformacoesClicked) {
      setIsButtonAddSerieClicked(false)
      setIsButtonAddEnderecoClicked(false)
     }
     
  }, [isButtonEditarInformacoesClicked]);

  useEffect(() => {
    if (isIconEditarClicked && isButtonAddEnderecoClicked) {
      setIsButtonAddSerieClicked(false)    
      setIsButtonEditarInformacoesClicked(false)
    }
     
  }, [isButtonAddEnderecoClicked]);

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
            <ButtonOpcoes>Meu Perfil</ButtonOpcoes>
            <ButtonOpcoes>Histórico</ButtonOpcoes>
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
          isClicked={isButtonAddEnderecoClicked}
            onClick={() => {
              setIsButtonAddEnderecoClicked(true)}}
            >Editar Endereço</ButtonOpcoes>
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
      <EditarInfos escola={escola}/>}
      {(isIconEditarClicked && isButtonAddEnderecoClicked) && <AddEndereco />}
    </ContainerPage>
  )
}

export default HomeInstituicao