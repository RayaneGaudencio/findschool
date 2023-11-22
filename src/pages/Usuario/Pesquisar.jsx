import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Main from "../../components/main/Main"
import Pesquisa from '../../components/pagina_usuario/Escolas/PesquisarEscola'
import ResultadoPesquisa from "../../components/pagina_usuario/Escolas/ResultadoPesquisa"
import CardEscola from '../../components/card_instituicao/CardEscola'
import imgInstituiacao1 from '../../img/instituicao1.svg'
import Container from "../../utils/Container"


const Pesquisar = () => {
    return (
        <Container>
            <Header></Header>
            <Main>
                <Pesquisa></Pesquisa>
                <ResultadoPesquisa>
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
                </ResultadoPesquisa>
            </Main>
            <Footer></Footer>
        </Container>
    )
}



export default Pesquisar