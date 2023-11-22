import styled from "styled-components";

const DivInstituicoes = styled.div`
    width: 100%;
    margin: 50px 0;
`

const AreaInstituicoes = styled.div`
    width: 100%;
    align-items: center;
    margin: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 200px;
`

const H1Instituicoes = styled.h1`
    color: #000;
    text-align: justify;
    font-size: 35px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
`

const Instituicao = ({ children }) => {
    return (
        <DivInstituicoes>
            <H1Instituicoes>Instituições parceiras mais bem avaliadas:</H1Instituicoes>
            <AreaInstituicoes>
            {children}
            </AreaInstituicoes>
        </DivInstituicoes>
    )
}

export default Instituicao;