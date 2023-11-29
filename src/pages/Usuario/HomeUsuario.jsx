import Header from "../../components/header/Header"
import Banner from "../../components/pagina_usuario/home/Banner_home"
import BannerImg from '../../components/banner/Banner'

import ImagemBanner1 from '../../img/banner/banner-1.png'
import ImagemBanner2 from '../../img/banner/banner-2.png'
import ImagemBanner3 from '../../img/banner/banner-3.png'
import ImagemBanner4 from '../../img/banner/banner-4.png'
import ImagemBanner5 from '../../img/banner/banner-5.png'
import ImagemBanner6 from '../../img/banner/banner-6.png'
import ImagemBanner7 from '../../img/banner/banner-7.png'

import FormSearchSchool from "../../components/form_search_school/form_search_schoo"
import Funcionamento from "../../components/pagina_usuario/home/Funcionamento"
import Instituicao from "../../components/pagina_usuario/home/Instituicoes_bem_avaliadas"
import Card from "../../components/card_instituicao/Card"
import Footer from '../../components/footer/Footer'
import imgInstituiacao1 from '../../img/instituicao1.svg'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Parceria from "../../components/pagina_usuario/home/Parceria"
import Main from "../../components/main/Main"
import Container from "../../utils/Container"

const HomeUsuario = () => {

    const slides = [ImagemBanner1, ImagemBanner2, ImagemBanner3, ImagemBanner4, ImagemBanner5, ImagemBanner6, ImagemBanner7]

    return (
        <Container>
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