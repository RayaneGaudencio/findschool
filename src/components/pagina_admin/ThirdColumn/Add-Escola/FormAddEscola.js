import styled from "styled-components";

const FormAddEscola = styled.section`
    background-color: #D9D9D9;
    display: grid; 
    grid-template-columns: 3fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    margin: 2em;
    border-radius: 8px;

    & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

`

export default FormAddEscola;