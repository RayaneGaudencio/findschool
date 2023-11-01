import styled from "styled-components";

const ButtonOpcoes = styled.button`
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid #efefef;
    width: 80%;
    cursor: pointer;
    color: #FFFFFF;
    padding: 0.7em;
    font-weight: 600;

    ${(props) => props.isClicked && 'background-color: #95FA15; color: #000000; border: 0; width: 100%'}
`

export default ButtonOpcoes