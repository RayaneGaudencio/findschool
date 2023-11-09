import styled from "styled-components";
import ImagemFindSchool from '../../../img/find-school-parceria.svg'
import EscolaIdeal from '../../../img/escola-ideal.svg'
import Parceiro from '../../../img/parceira.svg'

const AreaParceria = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin: 70px 0;
`

const PrimeiraColuna = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

const SegundaColuna = styled.div``

const ImgParceria = styled.img`
    display: block;
`

const Parceria = () => {
    return (
        <AreaParceria>

            <PrimeiraColuna>
                <ImgParceria src={ImagemFindSchool}></ImgParceria>
                <ImgParceria src={EscolaIdeal}></ImgParceria>
            </PrimeiraColuna>

            <SegundaColuna>
            <ImgParceria src={Parceiro}></ImgParceria>
            </SegundaColuna>

        </AreaParceria>
    )
}

export default Parceria