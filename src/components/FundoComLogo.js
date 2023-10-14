import styled from "styled-components";

const FundoComLogo = styled.div`
  background-color: #150096;
  display: flex;
  justify-content: center;

  @media (max-width: 700px) {
    height: 5rem;
    width: 100vw;
  }
`;

const LogoImagem = styled.img`
  width: 500px;
  height: auto;
`;

export { FundoComLogo, LogoImagem }