import styled from "styled-components";
import Banner1 from '../../img/banner-home.svg'

const BannerImg = styled.img`
    width: 100%;
    height: auto;
`

const Banner = ({ path }) => {
    return (
        <BannerImg src={path}></BannerImg>
    )
}

export default Banner