import styled from "styled-components";

const FormAddEscola = styled.div`
    background-color: #D9D9D9;
    margin: 2em;
    border-radius: 8px;
    overflow-x: auto;

    & > form:nth-child(2) {
        grid-row: 2;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1em;
        padding: 2em;

        color: #030200;

        div:last-child {
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }
    }

    & > div:nth-child(3) {
        grid-row: 2;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 1em 2em;
    }
`

import { React, useState } from 'react'
import TitleTopo from  '../../components/pagina_admin/ThirdColumn/TitleTopo'
import DescricaoSobInput from '../../components/form/DescricaoSobInput'
import Input from '../../components/form/Input'
import Button from '../../components/Button'
import LinhaAbaixoTitle from "../../components/pagina_admin/ThirdColumn/LinhaAbaixoTitle";
import DescricaoDadoIncorreto from "../../components/form/DadoIncorreto";
const AddEndereco = () => {

    const [ formData, setFormData ] = useState({
        nome: "",
        email: "",
        cnpj: "",
        senha: ""
    })

    const [erros, setErros] = useState({
        nome: { temErros: false, mensagem: "" },
        email: { temErros: false, mensagem: "" },
        cnpj: { temErros: false, mensagem: "" },
        senha: { temErros: false, mensagem: "" }
      });

    const [formErros, setFormErros] = useState({ erros: false, mensagem: ""})

    
    const [responseErros, setResponseErros] = useState({ temErrosNaResposta: false, sucessoCadastro: false, mensagem: ""})

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });

        setResponseErros({...responseErros, sucessoCadastro: false, mensagem: ""})
      };

      const verificaPreenchimentoCampos = (name) => {
       

        }

        const enviarFormulario = async (e) => {
          for (const campo in formData) {
            if (formData[campo].trim() === '') {
              setFormErros({erros: true, mensagem: "Preencha os campos necessários antes de cadastrar."})
            } else {
              setFormErros({erros: false, mensagem: ""})
            }
          }
      
          if (!formErros.erros) {
            try {
                
            } catch (error) {
                
            }
          }
        };     

  return (
    <FormAddEscola>
        <div>
            <TitleTopo>Editar Endereço</TitleTopo>
            <LinhaAbaixoTitle />
        </div>
        <form
          onSubmit={(event) => {
          event.preventDefault();
          enviarFormulario(formData);
        }}>
            <DescricaoSobInput>CEP</DescricaoSobInput>
            <Input 
           
            />
            <DescricaoSobInput>Rua</DescricaoSobInput>
            <Input 
           
            />
            <DescricaoSobInput>Bairro</DescricaoSobInput>
            <Input 
           
            />
            <DescricaoSobInput>Cidade</DescricaoSobInput>
            <Input 
          
            />
            <DescricaoSobInput>UF</DescricaoSobInput>
            <Input 
           
            />
            <DescricaoDadoIncorreto></DescricaoDadoIncorreto>
        <div>
            <Button type="submit">Editar</Button>
        </div>
        </form>
   </FormAddEscola>
  )
}

export default AddEndereco
