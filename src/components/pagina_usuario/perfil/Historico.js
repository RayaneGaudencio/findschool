import styled from "styled-components";

const DivHistorico = styled.div`
    width: 95%;
    height: 609px;
    margin: 20px auto 30px;
    background-color: #4234CF59;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 170px;
`

const Historico = ({ children }) => {
    return(
        <DivHistorico>
            { children }
        </DivHistorico>
    )
}

export default Historico