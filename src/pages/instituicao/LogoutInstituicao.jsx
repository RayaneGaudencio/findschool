const FormLogout = styled.div`
  background-color: #d9d9d9;
  display: grid;
  grid-template-columns: 17fr 2fr;
  grid-template-rows: 1fr 5fr;
  margin: 2em;
  border-radius: 8px;

  & > div:nth-child(1) {
    grid-column: 1 / span 2;
    grid-row: 1;
  }

  & > form:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    padding: 2em;

    color: #030200;

    h1 {
      color: #4231cf;
    }

    h2 {
      color: #150096;
    }

    .abandonar {
      background-color: #95FA15;
      padding: 0.2em;
      border-radius: 7px;
    }

    /* Mova o botão diretamente abaixo do h2 */
    ${Button} {
      margin-top: 1em; /* Adiciona margem superior ao botão abaixo do h2 */
    }
  }

  & > div:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1em 2em;
  }
`;

const LogoutInstituicao = () => {
  return (
    <FormLogout>
      <div>
        <TitleTopo>Logout</TitleTopo>
        <LinhaAbaixoTitle />
      </div>
      <form>
        <h1>Olá, !</h1>
        <h2>Você deseja mesmo <span className="abandonar">abandonar</span> a plataforma?</h2>
        <Button>
          <a href="">Sim</a>
        </Button>
      </form>
     </FormLogout>
  );
};

export default LogoutInstituicao;

