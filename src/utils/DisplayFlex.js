import styled from "styled-components";

// coloca os itens filhos lado a lado
// em 900px tela flex-direction passa a ser column, posicionando os itens um abaixo do outro
const DisplayFlex = styled.div`
  display: flex;
  background-color: white;
  min-height: 100vh;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export default DisplayFlex 