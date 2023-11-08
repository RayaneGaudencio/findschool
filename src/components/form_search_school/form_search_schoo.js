import styled from "styled-components"
import iconlupa from '../../img/icon-lupa.svg'

const Form_title = styled.h1`
    font-size: 20px;
    text-align: center;
`

const Form_input = styled.input`
    border-radius: 10px;
    border: 2px solid #D9D9D9;
    background: #150096;
    width: 220px;
    height: 51px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: white;
    padding: 0 20px;
    outline: none;
    
    &::placeholder{
        color: white;
    }
`

const Form_button = styled.button`
    border-radius: 5px;
    background: #95FA15;
    cursor: pointer;
    width: 86px;
    height: 46px;
`

const Icon = styled.img`
    width: auto;
    height: auto;
`

const DivForm = styled.div`
    margin: 50px auto;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Form = styled.form`
    display: flex;
    align-items: center;
    margin-top: 20px;
`

const FormSearchSchool = () => {
    return (
        <DivForm>
            <Form_title>Pesquise aqui a sua escola ideal:</Form_title>
            <Form action="#">
                <Form_input type="text" placeholder="Digite seu estado"></Form_input>
                <Form_input type="text" placeholder="Digite sua cidade"></Form_input>
                <Form_input type="text" placeholder="Digite seu bairro"></Form_input>
                <Form_input type="text" placeholder="Digite uma série"></Form_input>
                <Form_button type="button">
                    <Icon src={iconlupa}></Icon>
                </Form_button>
            </Form>
        </DivForm>
    )
}

export default FormSearchSchool