import { React, useState } from 'react'
import ContainerPage from '../../components/pagina_admin/ContainerPage'
import FirstColumn from '../../components/pagina_admin/FirstColumn/FirstColumn'
import StyledImageIcon from '../../components/pagina_admin/FirstColumn/ImageIcon'
import IconPerfilSVG from '../../img/perfil.svg'
import IconEditarSVG from  '../../img/editar.svg'
import IconLogoutSVG from  '../../img/logout.svg'
import SecondColumn from '../../components/pagina_admin/SecondColum/SecondColumn'
import Circulo from '../../img/circulo.svg'
import ImagemPerfil from '../../components/pagina_admin/SecondColum/ImagemPerfil'
import NomePerfil from '../../components/pagina_admin/NomePerfil'
import ButtonOpcoes from '../../components/pagina_admin/SecondColum/ButtonOpcoes'
import { useLocation } from 'react-router-dom';

const HomeAdmin = () => {
  const [isIconPerfilClicked, setIconPerfilClicked] = useState(true);
  const [isIconEditarClicked, setIconEditarClicked] = useState(false);
  
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
          <ImagemPerfil src={Circulo} />
          <NomePerfil>{usuario.nome}</NomePerfil>
          <ButtonOpcoes>Editar Perfil</ButtonOpcoes>
          <ButtonOpcoes>Pedidos</ButtonOpcoes>
          <ButtonOpcoes>Relatorios</ButtonOpcoes>
          <ButtonOpcoes>Calendário</ButtonOpcoes>
      </SecondColumn> : 
       <SecondColumn>
       <ImagemPerfil src={Circulo} /> 
         <NomePerfil>{usuario.nome}</NomePerfil>
         <ButtonOpcoes>Adicionar Escola</ButtonOpcoes>
         <ButtonOpcoes>Remover Escola</ButtonOpcoes>
         <ButtonOpcoes>Editar Escola</ButtonOpcoes>
       </SecondColumn>}
    </ContainerPage>
  )
}

export default HomeAdmin
