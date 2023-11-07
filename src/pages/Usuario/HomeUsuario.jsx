import Header from "../../components/header/Header"
import Banner from "../../components/pagina_usuario/Banner_home"
import BannerImg from '../../components/banner/Banner'
import Banner1 from '../../img/banner-home.svg'
import FormSearchSchool from "../../components/form_search_school/form_search_schoo"
import Funcionamento from "../../components/pagina_usuario/Funcionamento"

const HomeUsuario = () => {
    return(
        <>
            <Header></Header>
            <Banner>
                <BannerImg path={Banner1}></BannerImg>
            </Banner>
            <FormSearchSchool></FormSearchSchool>
            <Funcionamento></Funcionamento>
        </>
    )
}

export default HomeUsuario