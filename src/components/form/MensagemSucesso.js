import styled from "styled-components";

const MensagemSucesso =styled.span`
    color: #04D935;
    font-weight: 600;
    font-size: 1.2rem;
`;

const DescricaoMensagemSucesso = ({ children })=> {
    return <MensagemSucesso>{children}</MensagemSucesso>
}

export default DescricaoMensagemSucesso;