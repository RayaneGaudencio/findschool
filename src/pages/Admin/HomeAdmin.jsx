import { React, useState, useEffect } from 'react'
import ContainerPage from '../../components/pagina_admin/ContainerPage'
import FirstColumn from '../../components/pagina_admin/FirstColumn/FirstColumn'
import StyledImageIcon from '../../components/pagina_admin/FirstColumn/ImageIcon'
import IconPerfilSVG from '../../img/perfil.svg'
import IconEditarSVG from  '../../img/editar.svg'
import IconLogoutSVG from  '../../img/logout.svg'
import SecondColumn from '../../components/pagina_admin/SecondColum/SecondColumn.styled.js'
import Circulo from '../../img/circulo.svg'
import ImagemPerfil from '../../components/pagina_admin/SecondColum/ImagemPerfil'
import NomePerfil from '../../components/pagina_admin/NomePerfil'
import ButtonOpcoes from '../../components/pagina_admin/SecondColum/ButtonOpcoes'
import { useLocation } from 'react-router-dom';
import AddEscola from './AddEscola'



const HomeAdmin = () => {
  const [isIconPerfilClicked, setIconPerfilClicked] = useState(true);
  const [isIconEditarClicked, setIconEditarClicked] = useState(false);
  const [isButtonAddEscolaClicked, setIsButtonAddEscolaClicked] = useState(false)
  const [isButtonRemoverEscolaClicked, setIsButtonRemoverEscolaClicked] = useState(false)

  useEffect(() => {
    if (isIconPerfilClicked && isIconEditarClicked) {
      setIconEditarClicked(false);
    }

    if (isIconEditarClicked) {
      setIconPerfilClicked(false);
    }
  }, [isIconPerfilClicked, isIconEditarClicked]);

  useEffect(() => {
   if (isIconEditarClicked && isButtonAddEscolaClicked) {
    setIsButtonRemoverEscolaClicked(false)
   }
  }, [isButtonAddEscolaClicked]);


  useEffect(() => {
    if (isIconEditarClicked && isButtonRemoverEscolaClicked) {
      setIsButtonAddEscolaClicked(false)
     }
     
  }, [isButtonRemoverEscolaClicked]);

  const location = useLocation();
  const { usuario } = location.state;

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
            <NomePerfil>{usuario.nome}</NomePerfil>
          </div>
          <div>
            <ButtonOpcoes>Editar Perfil</ButtonOpcoes>
            <ButtonOpcoes>Pedidos</ButtonOpcoes>
            <ButtonOpcoes>Relatorios</ButtonOpcoes>
            <ButtonOpcoes>Calendário</ButtonOpcoes>
          </div>
        </SecondColumn> : 
        <SecondColumn>
          <div>
            <ImagemPerfil src={Circulo} /> 
            <NomePerfil>{usuario.nome}</NomePerfil>
          </div>
          <div>
          <ButtonOpcoes
          isClicked={isButtonAddEscolaClicked}
            onClick={() => {
              setIsButtonAddEscolaClicked(true)}}
            >Adicionar Escola</ButtonOpcoes>
          <ButtonOpcoes
          isClicked={isButtonRemoverEscolaClicked}
          onClick={() => {
            setIsButtonRemoverEscolaClicked(true)}}
          >Remover Escola</ButtonOpcoes>
          <ButtonOpcoes>Editar Escola</ButtonOpcoes>
          </div>
        </SecondColumn>}
      {(isIconEditarClicked && isButtonAddEscolaClicked) && 
      <AddEscola />}
      <link rel="stylesheet" href="" />
    </ContainerPage>
  )
}

export default HomeAdmin
