import styled from "styled-components";

const FormContainer = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: auto;
  padding: 5em;
  width: 18rem;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    padding: 0;
  }
  
  @media (max-width: 310px) {
    font-size: 10px;
    width: 12rem;
  }
`;

const CenteredContent  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0.3em;
  gap: 0.5em;

  @media (max-width: 310px) {
    font-size: 10px;
  }
`;


export { FormContainer, CenteredContent }
