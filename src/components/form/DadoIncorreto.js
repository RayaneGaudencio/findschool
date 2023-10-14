import styled from "styled-components";

const DadoIncorreto =styled.span`
    color: #FF0808;
`;

const DescricaoDadoIncorreto = ({ children })=> {
    return <DadoIncorreto>{children}</DadoIncorreto>
}

export default DescricaoDadoIncorreto;