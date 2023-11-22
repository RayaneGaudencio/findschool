import styled from "styled-components";

const CardInstituicao = styled.div`
    width: 269px;
    height: 402px;
    border-radius: 15px;
    background: #4234CF;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    transition: .3s ease;
    color: #fff;

    &:hover{
        background-color: #95FA15;
        color: #000;
        transform: scale(1.2);
    }
`

const ImgInstituicao = styled.img`
    width: 269px;
    height: 240.606px;
    border-radius: 15px;
`

const NomeInstituicao = styled.p`
    font-size: 20px;
`

const DescricaoInstituicao = styled.p`
    font-size: 16px;
    text-align: center;
`

const Card = ({ path, nomeInstituicao, descricao}) => {
    return (
        <CardInstituicao>
            <ImgInstituicao src={path}></ImgInstituicao>
            <NomeInstituicao>{nomeInstituicao}</NomeInstituicao>
            <DescricaoInstituicao>{descricao}</DescricaoInstituicao>
        </CardInstituicao>
    )
}

export default Card