import styled from "styled-components"

const DivResultado = styled.div`
    width: 85%;
    margin: 20px auto 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
`


const ResultadoPesquisa = ({ children }) => {
    return(
        <DivResultado>
            { children }
        </DivResultado>
    )
}

export default ResultadoPesquisa