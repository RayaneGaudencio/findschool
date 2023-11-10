import styled from "styled-components";
import TitleTopo from "../../components/pagina_instituicao/ThirdColumn/TitleTopo";
import LinhaAbaixoTitle from "../../components/pagina_instituicao/ThirdColumn/LinhaAbaixoTitle";
import Button from "../../components/Button";

const FormLogout = styled.div`
    background-color: #D9D9D9;
    display: grid; 
    grid-template-columns: 3fr 1fr; 
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
        align-items: flex-start;
        gap: 1em;
        padding: 2em;

        color: #030200;
    }

    & > div:nth-child(3) {
        grid-column: 2;
        grid-row: 2;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 1em 2em;
    }

`
const LogoutInstituicao = () => {

    return (
        <FormLogout>
        <div>
            <TitleTopo>Logout</TitleTopo>
            <LinhaAbaixoTitle />
        </div>
        <form>
          <h3 color="#150096"> Olá !</h3>  
          <h4>Você deseja mesmo abandonar a plataforma?</h4>
        </form>
        <div>
            <Button><a href="">Sim</a></Button>
        </div>
    </FormLogout>
    )
}

export default LogoutInstituicao