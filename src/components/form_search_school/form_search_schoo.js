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

const ContainerEscolas = styled.section`
    margin-top: 2em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
`
import API_URL from '../../config/config'
import Instituicao from "../pagina_usuario/home/Instituicoes_bem_avaliadas"
import Card from "../card_instituicao/Card"
import imgInstituiacao1 from '../../img/instituicao1.svg'
const FormSearchSchool = () => {

    const [states, setStates] = useState([])
    const [currentStateId, setCurrentStateId] = useState('') // esse estado pro estado selecionado
    const [cities, setCities] = useState([''])
    const [selectedCity, setSelectedCity] = useState('')
    const [selectedState, setSelectedState] = useState('')
    const [escolas, setEscolas] = useState([])

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

    }, [])


    function handleChangeState(event) {
        const selectStateId = event.target.value;
        setCurrentStateId(selectStateId);
      
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectStateId}`, {
        })
        .then((response) => response.json())
        .then((data) => {
            const selectedSigla = data.sigla;
            setSelectedState(selectedSigla);
        })
        .catch((error) => console.log(error));
        
    }

console.log(cities)
    function removerAcentosESubstituirCedilha(str) {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/ç/g, 'c')
        .replace(/Ç/g, 'C');
    }
    
    function enviarFormulario(estado, cidade) {

        if (estado == 'DF') {
            cidade = 'Brasília'
        }

        if (cidade == '') {
            cidade = cities[0].nome
            console.log(cidade)
        }

        const estadoSemAcento = removerAcentosESubstituirCedilha(estado);
        const cidadeSemAcento = removerAcentosESubstituirCedilha(cidade);

        console.log(cidadeSemAcento)
        fetch(`${API_URL}/buscar_escolas/${encodeURIComponent(estadoSemAcento)}/${encodeURIComponent(cidadeSemAcento)}`)
            .then((response) => response.json())
            .then((data) => {
            setEscolas(data);
            })
            .catch((error) => console.error('Erro ao buscar escolas:', error));
    }

    function handleSelectCity(e) {
        const selectedValue = e.target.value;
        setSelectedCity(selectedValue);
    }


    return (
        <DivForm>
            <Form_title>Pesquise aqui a sua escola ideal:</Form_title>
            <Form action="#" 
                onSubmit={(event) => {
                event.preventDefault();
                enviarFormulario(selectedState, selectedCity);}}
            >
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

                <Select_input disabled={!(cities.length > 0)}   
                value={selectedCity}
                onChange={(e) => handleSelectCity(e)}>
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

                <Form_button type="submit" disabled={!(cities.length > 0)}>
                    <Icon src={iconlupa}></Icon>
                </Form_button>
            </Form>
            {(escolas && escolas.length > 0) ? (
            <ContainerEscolas>
                {escolas.map((escola, index) => (
                <Card path={imgInstituiacao1} 
                nomeInstituicao={'Escola Cognitivo'} 
                descricao={`${escola.rua}, ${escola.bairro}, ${escola.cidade} - ${escola.uf}, ${escola.cep}`} />
                ))}
            </ContainerEscolas>
            ) : (
                <div>{escolas && escolas.message}</div>
            )}
        </DivForm>
    )
}

export default FormSearchSchool