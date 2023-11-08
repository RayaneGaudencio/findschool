import styled from "styled-components";
import ImagemYt from '../../img/imagem-yt.svg'
import iconAddress from '../../img/icon-address.svg'
import iconIntelligence from '../../img/icon-intelligence.svg'
import iconManagement from '../../img/icon-management.svg'
import iconMoneyBox from '../../img/icon-money-box.svg'


const Container = styled.div`
    width: 100%;
    height: 359px;
    background-color: rgba(66, 52, 207, 0.55);
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const IframeYt = styled.iframe`
    width: 524px;
    height: 308px;
    border-radius: 10px;
`

const ImageYt = styled.img`
    width: 524px;
    height: 308px;
    border-radius: 10px;
`

const DivFuncionalidades = styled.div`

`

const ImgFuncionalidades = styled.img``

const TextFuncionalidades = styled.h1`
    color: white;
    text-align: center;
    font-size: 20px;
`

const UlFuncionalidades = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    gap: 30px;
`

const LiFuncionalidades1 = styled.li`
    border-radius: 10px;
    background: #150096;
    transition: .3s ease;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 117px;
    padding: 0 0 5px 0;
    text-align: center;

    &:hover{
        background-color: #4234CF;
    }
`

const LiFuncionalidades2 = styled.li`
    border-radius: 10px;
    background: #95FA15;
    transition: .3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 117px;
    text-align: center;
    padding: 0 0 5px 0;

    &:hover{
        background-color: #3C9406C4;
    }
`

const PLi = styled.p`
    color: white;
`

const Funcionamento = () => {
    return (
        <Container>
            <ImageYt src={ImagemYt}></ImageYt>
            <DivFuncionalidades>
                <TextFuncionalidades>Confira como funciona</TextFuncionalidades>
                <UlFuncionalidades>

                    <LiFuncionalidades1>
                        <ImgFuncionalidades src={iconAddress}></ImgFuncionalidades>
                        <PLi>Melhores localizações</PLi>
                    </LiFuncionalidades1>

                    <LiFuncionalidades2>
                        <ImgFuncionalidades src={iconMoneyBox}></ImgFuncionalidades>
                        <PLi>Melhor custo beneficio</PLi>
                    </LiFuncionalidades2>

                    <LiFuncionalidades2>
                        <ImgFuncionalidades src={iconManagement}></ImgFuncionalidades>
                        <PLi>Escolas de confiança</PLi>
                    </LiFuncionalidades2>

                    <LiFuncionalidades1>
                        <ImgFuncionalidades src={iconIntelligence}></ImgFuncionalidades>
                        <PLi>Simples de entender</PLi>
                    </LiFuncionalidades1>

                </UlFuncionalidades>
            </DivFuncionalidades>
        </Container>
    )
}

export default Funcionamento