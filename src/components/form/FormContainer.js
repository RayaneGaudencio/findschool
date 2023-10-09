import styled from "styled-components";

const FormContainer = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: auto;
  max-width: 18rem;
  flex-wrap: wrap;
`;

const CenteredContent  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export { FormContainer, CenteredContent }
