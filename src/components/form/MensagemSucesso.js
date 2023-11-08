import styled from "styled-components";

const MensagemSucesso =styled.span`
    color: #04D935;
`;

const DescricaoMensagemSucesso = ({ children })=> {
    return <MensagemSucesso>{children}</MensagemSucesso>
}

export default DescricaoMensagemSucesso;