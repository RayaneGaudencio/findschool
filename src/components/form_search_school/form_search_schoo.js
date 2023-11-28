'use client'
import styled from "styled-components"
import iconlupa from '../../img/icon-lupa.svg'
import { useEffect, useState } from 'react'

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

const Select_input = styled.select`
    border-radius: 10px;
    border: 2px solid #D9D9D9;
    background: #150096;
    width: 230px;
    height: 51px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: white;
    padding: 0 20px;
    outline: none;
    
    &::placeholder{
        color: white;
    }
`

const Option_input = styled.option`

`

const Form_button = styled.button`
    border-radius: 5px;
    background: #95FA15;
    cursor: pointer;
    width: 86px;
    height: 46px;

    &:disabled {
        background-color: gray;
        cursor: no-drop;
    }
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

    const [states, setStates] = useState([])
    const [currentStateId, setCurrentStateId] = useState('')
    const [cities, setCities] = useState([])

    useEffect(() => {
        if (currentStateId !== '') {
            fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${currentStateId}/municipios`,
            )
                .then((response) => response.json())
                .then((data) => setCities(data))
                .catch(error => console.log(error))
        } else {
            setCities([])
        }
    }, [currentStateId])

    useEffect(() => {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
            .then((response) => response.json())
            .then((data) => setStates(data))

    })

    function handleChangeState(event) {
        const selectStateId = event.target.value
        setCurrentStateId(selectStateId)
    }

    return (
        <DivForm>
            <Form_title>Pesquise aqui a sua escola ideal:</Form_title>
            <Form action="#">

                <Select_input onChange={handleChangeState}>
                    <Option_input value={''}>Selecione um estado</Option_input>
                    {states.map((state) => {
                        return (
                            <Option_input key={state.id} value={state.id}>
                                {state.nome}
                            </Option_input>
                        )
                    })}
                </Select_input>

                <Select_input disabled={!(cities.length > 0)}>
                    {!(cities.length > 0) && (
                        <Option_input value={""}>Preencha o estado</Option_input>
                    )}

                    {cities.map(city => {
                        return(
                            <Option_input key={city.id} value={city.nome}>
                                {city.nome}
                            </Option_input>
                        )
                    })}
                </Select_input>

                <Form_button type="button" disabled={!(cities.length > 0)}>
                    <Icon src={iconlupa}></Icon>
                </Form_button>
            </Form>
        </DivForm>
    )
}

export default FormSearchSchool