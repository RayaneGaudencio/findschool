import styled from "styled-components";

const ContainerPage = styled.main`
    font-size: 14px;
    display: grid;
    grid-template-columns: 0.3fr 2fr 7fr;
    height: 100vh; 

    & > div:nth-child(1) {
        background-color: #4234CF; 
    }

    & > div:nth-child(2) {
        background-color: rgb(21, 0, 150); 
    }

    ${(props) => props.qtdColumns && 'grid-template-columns: 0.3fr 7fr; background-color: rgb(237,237,237);'}
    ${(props) => props.qtdColumns && 'div:nth-child(2) {background-color: rgb(237,237,237);'}}
`

export default ContainerPage