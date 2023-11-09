import styled from "styled-components";
import findSchoolLogo from '../../img/logo-e-nome.svg'
import iconFacebook from '../../img/icon-facebook.svg'
import iconInstagram from '../../img/icon-instagram.svg'
import iconTwitter from '../../img/icon-twitter.svg'
import iconYoutube from '../../img/icon-youtube.svg'
import iconWhatsapp from '../../img/icon-whatsapp.svg'
import iconPinterest from '../../img/icon-pinterest.svg'

const AreaFooter = styled.footer`
    width: 100%;
    height: 232px;
    background-color: #4234CF;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: absolute;

    color: white;

`

const AreaInfoFindSchool = styled.div`
    height: 100%;
    width: 300px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const LogoFindSchool = styled.img`
    width: 300px;
`

const PInfoFindSchool = styled.p`
    width: 243px;
    font-size: 16px;
`

const H1Footer = styled.h1``

const AreaRedesSociais = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

`

const UlFooter = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
`

const LiFooter = styled.li``

const IconFooter = styled.img`
    cursor: pointer;
`

const PRedesSociais = styled.p``

const Footer = () => {
    return (
        <AreaFooter>
            <AreaInfoFindSchool>
                <LogoFindSchool src={findSchoolLogo}></LogoFindSchool>
                <PInfoFindSchool>
                    Rua das Colhetas, 258-A, Apipucos
                    Recife, PE - Brasil
                    CEP: 10254-330
                </PInfoFindSchool>
                <PInfoFindSchool>
                    F&S INSTITUIÇÃO DE ENSINO
                    LTDA 08.591.212/0004-07
                </PInfoFindSchool>
            </AreaInfoFindSchool>
            <H1Footer>Entre em contato para obter mais informações</H1Footer>

            <AreaRedesSociais>
                <PRedesSociais>Encontre-nos nas redes sociais</PRedesSociais>
                <UlFooter>
                    <LiFooter>
                        <IconFooter src={iconFacebook}></IconFooter>
                    </LiFooter>
                    <LiFooter>
                        <IconFooter src={iconInstagram}></IconFooter>
                    </LiFooter>
                    <LiFooter>
                        <IconFooter src={iconWhatsapp}></IconFooter>
                    </LiFooter>
                    <LiFooter>
                        <IconFooter src={iconPinterest}></IconFooter>
                    </LiFooter>
                    <LiFooter>
                        <IconFooter src={iconTwitter}></IconFooter>
                    </LiFooter>
                    <LiFooter>
                        <IconFooter src={iconYoutube}></IconFooter>
                    </LiFooter>
                </UlFooter>
                <PRedesSociais>contato@findschool.com.br</PRedesSociais>
            </AreaRedesSociais>
        </AreaFooter>
    )
}

export default Footer