import styled from "styled-components";
import axios from 'axios'


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

import { React, useState, useEffect } from 'react'
import TitleTopo from  '../../components/pagina_admin/ThirdColumn/TitleTopo'
import DescricaoSobInput from '../../components/form/DescricaoSobInput'
import Input from '../../components/form/Input'
import Button from '../../components/Button'
import LinhaAbaixoTitle from "../../components/pagina_admin/ThirdColumn/LinhaAbaixoTitle";
import DescricaoDadoIncorreto from "../../components/form/DadoIncorreto";
import API_URL from '../../config/config'
import DescricaoMensagemSucesso from "../../components/form/MensagemSucesso";


const AddEndereco = ({ escola }) => {

  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [cnpj, setCnpj] = useState(escola.cnpj);

  const [formErros, setFormErros] = useState({ erros: false, mensagem: ""})
  
  const [response, setResponse] = useState({ temErrosNaResposta: false, sucessoCadastro: false, mensagem: ""})

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");

  useEffect(() => {
    if (selectedUf === "0") {
      return;
    }
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        setCities(response.data);
      });
  }, [selectedUf]);

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((response) => {
        setUfs(response.data);
      });
  }, [selectedUf]);

  function handleSelectUf(e) {
    const uf = e.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(e) {
    const city = e.target.value;
    setSelectedCity(city);
  }
    

  const enviarFormulario = async (e) => {

    if (cep == '' || rua == '' || bairro == '' || selectedCity == '' || selectedUf == '' || numero == '' ) {
      setFormErros({erros: true, mensagem: "É necessário o preenchimento de todos os campos."})
      return;
    } else {
      setFormErros({erros: false})
    }

    if (!formErros.erros) {
      const endereco = {
        cnpj,
        cep,
        rua,
        bairro,
        cidade: selectedCity,
        uf: selectedUf,
        numero,
      };

      try {
        const response = await axios
        .post(`${API_URL}/cadastrar_endereco`, (endereco), {
          withCredentials: true
        })
        console.log(formErros)
        console.log(response)

        setResponse({temErrosNaResposta: false, sucessoCadastro: true, mensagem: response.data.message})
        setCep("")
        setRua("")
        setSelectedCity("")
        setSelectedUf("")
        setNumero("")
        setBairro("")
        setSelectedUf("0")
        setSelectedCity("0")

        const inputs = document.querySelectorAll("input[name='rua'], input[name='cep'], input[name='bairro'], input[name='uf'], input[name='cidade'], input[name='numero']");

        inputs.forEach((input) => {
              input.value = "";
        });

      } catch (error) {
        console.log(error)
        setResponse({temErrosNaResposta: true, mensagem: "Não foi possível adicionar endereço a escola."})
      }
    }
  };     

  return (
    <FormAddEscola>
        <div>
            <TitleTopo>Adicionar Endereço</TitleTopo>
            <LinhaAbaixoTitle />
        </div>
        <form
          onSubmit={(event) => {
          event.preventDefault();
          enviarFormulario();
        }}>
            <DescricaoSobInput>CEP</DescricaoSobInput>
            <Input 
            type="text"
            name="cep"
            onChange={(e) => setCep(e.target.value)}
            />
            <DescricaoSobInput>Rua</DescricaoSobInput>
            <Input 
             type="text"
             name="rua"
             onChange={(e) => setRua(e.target.value)}
            />
            <DescricaoSobInput>Bairro</DescricaoSobInput>
            <Input 
            type="text"
            name="bairro"
            onChange={(e) => setBairro(e.target.value)}
            />
            <select name="uf" id="uf" onChange={handleSelectUf}>
              <option value="0">Selecione uma UF</option>
              {ufs.map((uf) => (
              <option value={uf.sigla}>{uf.nome}</option>
              ))}
             </select>
            <select
            name="cidade"
            id="cidade"
            value={selectedCity}
            onChange={handleSelectCity}
            >
              <option value="0">Selecione uma cidade</option>
                {cities.map((city) => (
                <option key={city.id} value={city.nome}>
                {city.nome}
              </option>
              ))}
            </select>
            <DescricaoSobInput>Número</DescricaoSobInput>
            <Input 
            type="text"
            name="numero"
            onChange={(e) => setNumero(e.target.value)}
            />
            {formErros.erros && <DescricaoDadoIncorreto>{formErros.mensagem}</DescricaoDadoIncorreto>}
            {response.sucessoCadastro && <DescricaoMensagemSucesso>{response.mensagem}</DescricaoMensagemSucesso>}
        <div>
            <Button type='submit'>Adicionar</Button>
        </div>
        </form>
   </FormAddEscola>
  )}

export default AddEndereco


function validateCEP(cep) {
  cep = cep.replace(/[^0-9]/g, "");

  if (cep.length !== 8) {
    return false;
  }

  for (let i = 0; i < cep.length; i++) {
    if (isNaN(cep[i])) {
      return false;
    }
  }

  return true;
}

function validateSomenteNumeros(cep) {
  for (let i = 0; i < cep.length; i++) {
    if (isNaN(cep[i])) {
      return false;
    }
  }

  return true;
}
