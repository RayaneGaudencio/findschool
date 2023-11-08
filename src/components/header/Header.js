import styled, { css } from "styled-components"
import { FundoComLogo, LogoImagem } from "../FundoComLogo"
import LogoSVG from '../../img/logo-e-nome.svg'
import { Link } from "react-router-dom"
import IconMenu from '../../img/icon-menu.svg'
import LogoPreta from '../../img/logo-preta.svg'

const BarraHeader = styled.div`
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
    height: 100vh;
    background-color: #4234CFF2;
    position: absolute;
    top: 0;
    right: 0;
    display: none;

    &.show{
        display: flex;
        flex-direction: column;
    }
`

const ListBarraLateral = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    list-style: none;
    margin-right: 10px;
    color: white;
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
                    <ItemList>
                        <Link>
                            <TextoLink>Home</TextoLink>
                        </Link>
                    </ItemList>
                    <ItemList>
                        <Link>
                            <TextoLink>Perfil</TextoLink>
                        </Link>
                    </ItemList>
                    <ItemList>
                        <Link>
                            <TextoLink>Ensino</TextoLink>
                        </Link>
                    </ItemList>
                    <ItemList>
                        <Link>
                            <TextoLink>Extracurriculares</TextoLink>
                        </Link>
                    </ItemList>
                    <ItemList>
                        <Link>
                            <TextoLink>Seja um parceiro</TextoLink>
                        </Link>
                    </ItemList>
                </ListBarraLateral>
            </BarraLateral>
        </BarraHeader>

    )
}

export default Header;