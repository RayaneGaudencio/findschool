import styled, { css } from "styled-components"
import { FundoComLogo, LogoImagem } from "../FundoComLogo"
import LogoSVG from '../../img/logo-e-nome.svg'
import { Link } from "react-router-dom"
import IconMenu from '../../img/icon-menu.svg'
import LogoPreta from '../../img/logo-preta.svg'
import IconHouse from '../../img/icon-house.svg'
import IconPerfil from '../../img/icon-perfil.svg'
import IconInstituicao from '../../img/icon-instituicao.svg'
import IconExtra from '../../img/icon-planeta.svg'
import IconParceria from '../../img/icon-parceria.svg'
import HomeUsuario from "../../pages/Usuario/HomeUsuario"
import CadastroAdmin from '../../pages/Admin/CadastroAdmin'


const BarraHeader = styled.header`
    background-color: #4234CF;
    height: 58px;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LogoImg = styled.img`
    width: 230px;
    height: 100%;
    transform: scale(2);
`

const LogoMenu = styled.img`
    width: 100%;
    border-bottom: 2px solid #95FA15;
`

const Icon = styled.img`
    cursor: pointer;
`

const Texto = styled.p`
    color: white;
`

const TextoCentral = styled.h1`
    font-size: 24px;
    text-align: center;
    color: white;
    text-transform: lowercase;
`

const ListHeader = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;
    list-style: none;
    margin-right: 10px;
    color: white;
`

const ItemList = styled.li`
    color: white;
`

const TextoLink = styled.a`
    text-decoration: none;
    color: inherit;
    font-weight: bold;
`

const TextoList = styled.p`
    display: flex;
    gap: 10px;
    color: white;
`

const ImagemIconPerfil = styled.img`

`

const BarraLateral = styled.div`
    width: 260px;
    height: 100vmax;
    background-color: #4234CFF2;
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    z-index: 2;

    &.show{
        display: flex;
        flex-direction: column;
    }
`

const ItemListBarraLateral = styled.li`
    color: white;
    width: 100%;
`

const ListBarraLateral = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    list-style: none;
    margin-top: 15px;
    /* margin-right: 10px; */
    
    color: white;
`

const IconBarraLateral = styled.img`
    cursor: pointer;
    margin-right: 30px;
`

const TextoBarraLateral = styled.p`
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 100%;
`

const ShowBarraLateral = () => {
    document.querySelector("#barraLateral").classList.add("show")
}

const HideBarraLateral = () => {
    document.querySelector("#barraLateral").classList.remove("show")
}

const Header = () => {
    return (
        <BarraHeader>
            <LogoImg src={LogoSVG}></LogoImg>
            <TextoCentral>Um novo conceito da sua escola ideal!</TextoCentral>
            <ListHeader>
                <ItemList>
                    <TextoList>
                        <Link>
                            <TextoLink>Entrar</TextoLink>
                        </Link>
                        <Texto>ou</Texto>
                        <Link>
                            <TextoLink>criar conta</TextoLink>
                        </Link>
                    </TextoList>
                </ItemList>
                <ItemList>
                    <Icon src={IconMenu} onClick={ShowBarraLateral}></Icon>
                </ItemList>
            </ListHeader>
            <BarraLateral id="barraLateral">
                <LogoMenu src={LogoPreta} onClick={HideBarraLateral}></LogoMenu>

                <ListBarraLateral>
                    <ItemListBarraLateral>
                        <Link to={'/'}>
                            <TextoBarraLateral>
                                <IconBarraLateral src={IconHouse}></IconBarraLateral>
                                <Texto>Home</Texto>
                            </TextoBarraLateral>
                        </Link>
                    </ItemListBarraLateral>

                    <ItemListBarraLateral>
                        <Link to={'/perfil_usuario'}>
                            <TextoBarraLateral>
                                <IconBarraLateral src={IconPerfil}></IconBarraLateral>
                                <Texto>perfil</Texto>
                            </TextoBarraLateral>
                        </Link>
                    </ItemListBarraLateral>

                    <ItemListBarraLateral>
                        <Link>
                            <TextoBarraLateral>
                                <IconBarraLateral src={IconInstituicao}></IconBarraLateral>
                                <Texto>Ensino</Texto>
                            </TextoBarraLateral>
                        </Link>
                    </ItemListBarraLateral>

                    <ItemListBarraLateral>
                        <Link>
                            <TextoBarraLateral>
                                <IconBarraLateral src={IconExtra}></IconBarraLateral>
                                <Texto>Extracurriculares</Texto>
                            </TextoBarraLateral>
                        </Link>
                    </ItemListBarraLateral>

                    <ItemListBarraLateral>
                        <Link>
                            <TextoBarraLateral>
                                <IconBarraLateral src={IconParceria}></IconBarraLateral>
                                <Texto>Seja um parceiro</Texto>
                            </TextoBarraLateral>
                        </Link>
                    </ItemListBarraLateral>
                    
                </ListBarraLateral>
            </BarraLateral>
        </BarraHeader>

    )
}

export default Header;