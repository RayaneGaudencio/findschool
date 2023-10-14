import styled from "styled-components";

// coloca os itens filhos lado a lado
// em 900px tela flex-direction passa a ser column, posicionando os itens um abaixo do outro
const DisplayFlex = styled.div`
  display: flex;
  align-items: center;
  background-color: white;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export default DisplayFlex 