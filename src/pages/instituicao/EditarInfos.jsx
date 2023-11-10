import styled from "styled-components";

const FormEditarInfos = styled.div`
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

import { React, useState } from 'react'
import TitleTopo from  '../../components/pagina_instituicao/ThirdColumn/TitleTopo'
import DescricaoSobInput from '../../components/form/DescricaoSobInput'
import Input from '../../components/form/Input'
import Button from '../../components/Button'
import LinhaAbaixoTitle from "../../components/pagina_instituicao/ThirdColumn/LinhaAbaixoTitle";
import { validateGrau, validateSerie, validateDescricao } from "../../validations/validaDadosAddSerie";
import DescricaoDadoIncorreto from "../../components/form/DadoIncorreto";



const EditarInfos = () => {

    const [ formData, setFormData ] = useState({
        serie: "",
        descricao: "",
        selecao: ""
    })

    const [erros, setErros] = useState({
        serie: { temErros: false, mensagem: "" },
        descricao: { temErros: false, mensagem: "" },
        selecao: { temErros: false, mensagem: "" }
      });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

    const [selectedOption, setSelectedOption] = useState('');
    const options = ['Nova atividade esportiva', 'Novo idioma', 'Nova música/instrumento', 'Novo jogo']; 
  
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value)
        if (options.includes(selectedOption)) {
            setSelectedOption(selectedValue);
          } else {
            alert('Selecione uma opção válida.');
          }
    };
    
      const verificaPreenchimentoCampos = (name) => {
        if (name == "serie") {
          if (formData.serie.trim() === '') {
            setErros({ ...erros, serie: { temErros: true, mensagem: 'Campo obrigatório.'}})
          }else if (!validateSerie(formData.serie)){
            setErros({ ...erros, serie: { temErros: true, mensagem: 'O campo precisa ser preenchido da seguinte forma = "1° ano do fundamental" ano + grau, e ter no mínimo 5 caracters'}}) 
          }else {
            setErros({...erros, serie:({ temErros: false})})
          }
        } else if (name == "descricao") {
            if (formData.descricao.trim() == '') {
              setErros({ ...erros, descricao: { temErros: true, mensagem: 'Campo obrigatório.'}})
            }else if (!validateDescricao(formData.descricao)){
                setErros({ ...erros, descricao: { temErros: true, mensagem: 'Descrição deve ter no mínimo 250 caracteres.'}})
            } else {
              setErros({...erros, descricao:({ temErros: false})})
            }
        } else if (name == "selecao") {
            if (selectedOption === '') {
                setErros({...erros, selecao: { temErros: true, mensagem: 'Campo obrigatório.' }})
            }else if (!validateGrau(formData.selecao)){
                setErros({ ...erros, selecao: { temErros: true, mensagem: 'Por favor, selecione uma opção antes de prosseguir.'}})
            }else {
                setErros({...erros, selecao: ({ temErros: false})})
            } 
        }
      }

    return (
        <FormEditarInfos>
            <div>
                <TitleTopo>Editar Informações</TitleTopo>
                <LinhaAbaixoTitle />
                <text style={{padding: '2em' }} >Endereço de e-mail</text>
                <br/>
                <text style={{padding: '2em' }} >email@finderschool.com.br</text>
            </div>
            <form>
                <DescricaoSobInput>Nova senha</DescricaoSobInput>
                <Input 
                style={{width: '40%'}}
                type="text"
                name="nome"
                onChange={handleInputChange}
                onBlur={(e) => verificaPreenchimentoCampos(e.target.name)}
                />
                {erros.serie.temErros && <DescricaoDadoIncorreto>{erros.serie.mensagem}</DescricaoDadoIncorreto>}
                <DescricaoSobInput>Nova descrição</DescricaoSobInput>
                <Input 
                style={{width: '70%', height: '50%'}}
                type="text"
                name="descricao"
                onChange={handleInputChange}
                onBlur={(e) => verificaPreenchimentoCampos(e.target.name)}
                />
                <DescricaoSobInput>Nova endereço</DescricaoSobInput>
                <Input 
                style={{width: '40%'}}
                type="text"
                name="nome"
                onChange={handleInputChange}
                onBlur={(e) => verificaPreenchimentoCampos(e.target.name)}
                />
                <DescricaoSobInput>Nova contato (número ou gmail)</DescricaoSobInput>
                <Input 
                style={{width: '40%'}}
                type="text"
                name="nome"
                onChange={handleInputChange}
                onBlur={(e) => verificaPreenchimentoCampos(e.target.name)}
                />
                {erros.descricao.temErros && <DescricaoDadoIncorreto>{erros.descricao.mensagem}</DescricaoDadoIncorreto>}
                <DescricaoSobInput>Novos extracurriculares</DescricaoSobInput>
                <select 
                style={{width: '40%'}}
                type="text"
                name="selecao"
                onChange={handleSelectChange}
                onBlur={(e) => verificaPreenchimentoCampos(e.target.name)}
                >
                <option value="">Selecione uma opção</option>
                {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
                ))}
                </select>
                {erros.selecao.temErros && <DescricaoDadoIncorreto>{erros.selecao.mensagem}</DescricaoDadoIncorreto>}
                <DescricaoSobInput>Fotos / Descrição da Infraestrutura</DescricaoSobInput>
                <Input 
                style={{width: '40%'}}
                type="text"
                />   
            </form>
            <div>
                <Button>Adicionar</Button>
            </div>
        </FormEditarInfos>
    )
}



export default EditarInfos
