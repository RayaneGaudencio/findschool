import styled from "styled-components";
import { Navigation, PNavigation, H1PaginationBlack } from "../../../components/NavigationPages"
import { MaiorQue } from "../../../components/SpanUnicode"
import iconFiltro from '../../../img/icon-filtro.svg'



const AreaPesquisa = styled.div`
    width: 85%;
    margin: 0 auto;
    position: relative;
`;

const Filtro = styled.div`
    width: 60px;
    height: 60px;
    background-color: #95FA15;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    
    position: absolute;
    right: 10px;
    top: 50%;

    cursor: pointer;
`

const Icon = styled.img`
`

const Pesquisa = () => {
    
    const teste = () => {
        alert(1)
    }

    return (
        <>
            <AreaPesquisa>
                <Navigation>home <MaiorQue /> pesquisar</Navigation>
                <H1PaginationBlack>Escolas em:</H1PaginationBlack>
                <H1PaginationBlack>Pernambuco, Recife, Paiva, Ensino  Médio</H1PaginationBlack>
                <Filtro className="filtro" onClick={teste}>
                    <Icon src={iconFiltro}></Icon>
                </Filtro>
            </AreaPesquisa>
        </>
    )
}

export default Pesquisa