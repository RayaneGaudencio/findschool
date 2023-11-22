import styled from "styled-components";

const DivCard = styled.div`
    width: 269px;
    height: 450px;
    color: #150096;

`

const DivSchool = styled.div`
    height: 350px;
    background-color: #D9D9D9;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const ImgCard = styled.img`
    width: 269px;
    height: 243px;
`

const NomeEscola = styled.h1`
    font-size: 20px;
`

const DescricaoEscola = styled.p`
    width: 211px;
    font-size: 16px;
`

const DivPreco = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Preco = styled.span`
    width: 150px;
    height: 46px;
    border-radius: 30px;
    background-color: #95FA15;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CardEscola = ({ path, nameSchool, description, price }) => {
    return (
        <DivCard>
            <DivSchool>
                <ImgCard src={path}></ImgCard>
                <NomeEscola>{nameSchool}</NomeEscola>
                <DescricaoEscola>{description}</DescricaoEscola>
            </DivSchool>
            <DivPreco>
                <Preco>{price}</Preco>
            </DivPreco>
        </DivCard>
    )
}

export default CardEscola 