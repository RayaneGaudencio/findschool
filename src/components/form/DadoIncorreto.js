import styled from "styled-components";

const DadoIncorreto =styled.span`
    color: #FF0808;
    font-size: 0.8rem;
    max-width: 100%;
    flex: none;
`;

const DescricaoDadoIncorreto = ({ children })=> {
    return <DadoIncorreto>{children}</DadoIncorreto>
}

export default DescricaoDadoIncorreto;