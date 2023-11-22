import { Link } from "react-router-dom"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Main from "../../components/main/Main"
import Container from '../../utils/Container'
import { Navigation, PNavigation, H1Pagination } from "../../components/NavigationPages"
import { MaiorQue } from "../../components/SpanUnicode"
import Perfil from "../../components/pagina_usuario/perfil/InfoUsuario"
import Historico from "../../components/pagina_usuario/perfil/Historico"
import CardEscola from "../../components/card_instituicao/CardEscola"
import imgInstituiacao1 from '../../img/instituicao1.svg'

const PerfilUsuario = () => {
    return (
        <Container>
            <Header></Header>
            <Main>
                <Navigation>
                    <PNavigation>home <MaiorQue /> perfil</PNavigation>
                    <H1Pagination>Perfil</H1Pagination>
                </Navigation>
                <Perfil></Perfil>
                <H1Pagination>Histórico</H1Pagination>
                <Historico>
                <CardEscola
                        path={imgInstituiacao1}
                        nameSchool={'Cólegio Santa Maria'}
                        description={'R. das Laranjeiras, 3887 - Paiva, Cabo de Santo Agostinho - PE, 54522-165'}
                        price={'R$1.230,80'}>
                    </CardEscola>
                    <CardEscola
                        path={imgInstituiacao1}
                        nameSchool={'Cólegio Santa Maria'}
                        description={'R. das Laranjeiras, 3887 - Paiva, Cabo de Santo Agostinho - PE, 54522-165'}
                        price={'R$1.230,80'}>
                    </CardEscola>
                    <CardEscola
                        path={imgInstituiacao1}
                        nameSchool={'Cólegio Santa Maria'}
                        description={'R. das Laranjeiras, 3887 - Paiva, Cabo de Santo Agostinho - PE, 54522-165'}
                        price={'R$1.230,80'}>
                    </CardEscola>
                </Historico>
            </Main>
            <Footer></Footer>
        </Container>
    )
}

export default PerfilUsuario