import { React, useState } from 'react';
import Title2 from '../../components/form/Title2';
import Input from '../../components/form/Input';
import Button from '../../components/form/Button';
import { FormContainer, CenteredContent } from '../../components/form/FormContainer';
import DisplayFlex from '../../utils/DisplayFlex';
import DescricaoSobInput from '../../components/form/DescricaoSobInput';
import FundoComLogo from '../../components/FundoComLogo';
import LogoSVG from '../../img/logo-e-nome.svg'
import API_URL from '../../config/config'
import axios from "axios";
import { validateNomeCompleto, validateCPF, validateEmail, validateSenha } from '../../validations/validaDadosCadastro';
import DescricaoDadoIncorreto from '../../components/form/DadoIncorreto';

const CadastroAdmin = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    senha: ""
  });

  const [erros, setErros] = useState({
    nome: { temErros: false, mensagem: "" },
    email: { temErros: false, mensagem: "" },
    cpf: { temErros: false, mensagem: "" },
    senha: { temErros: false, mensagem: "" }
  });

  const [formErros, setFormErros] = useState({ erros: false, mensagem: ""})

  const [responseErros, setResponseErros] = useState({ temErrosNaResposta: false, mensagem: ""})

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
        const response = await axios.post(`${API_URL}/admins`, formData, {
          withCredentials: true
        });
        console.log('Administrador cadastrado com sucesso:', response.data);
        window.location.reload();
      } catch (error) {
        console.error('Erro ao cadastrar administrador:', error);
        const mensagemDeErro = error.response.data.errors[0];
        setResponseErros({temErrosNaResposta: true, mensagem: mensagemDeErro})
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const verificaPreenchimentoCampos = (name) => {
    if (name == "nome") {
      if (formData.nome.trim() === '') {
        setErros({ ...erros, nome: { temErros: true, mensagem: 'Campo obrigatório.'}})
      } else if (!validateNomeCompleto(formData.nome)){
          setErros({ ...erros, nome: { temErros: true, mensagem: 'Deve conter nome e sobrenome.'}})
      } else {
        setErros({...erros, nome:({ temErros: false})})
      }
    } else if (name == "email") {
        if (formData.email.trim() == '') {
          setErros({ ...erros, email: { temErros: true, mensagem: 'Campo obrigatório.'}})
        }else if (!validateEmail(formData.email)){
            setErros({ ...erros, email: { temErros: true, mensagem: 'Email inválido.'}})
        } else {
          setErros({...erros, email:({ temErros: false})})
        }
    } else  if (name == "cpf") {
        if (formData.cpf.trim() == '') {
          setErros({ ...erros, cpf: { temErros: true, mensagem: 'Campo obrigatório.'}})
        }else if (!validateCPF(formData.cpf)){
            setErros({ ...erros, cpf: { temErros: true, mensagem: 'CPF inválido.'}})
        } else {
          setErros({...erros, cpf:({ temErros: false})})
        }
    }else if (name == "senha") {
        if (formData.senha.trim() == '') {
          setErros({ ...erros, senha: { temErros: true, mensagem: 'Campo obrigatório.'}})
        }else if (!validateSenha(formData.senha)){
            setErros({ ...erros, senha: { temErros: true, mensagem: 'Senha deve ter pelo menos 8 caracteres, contendo pelo menos uma letra maíuscula, um número e um símbolo.'}})
        } else {
          setErros({...erros, senha:({ temErros: false})})
        }
      } else {
        setValido(true)
      }
  }


  return (
    <DisplayFlex>
      <FundoComLogo>
        <img src={LogoSVG} alt="Logo branca FindSchool" style={{ width: '500px', height: 'auto' }}></img>
      </FundoComLogo>
      <FormContainer onSubmit={(event) => {
        event.preventDefault();
        enviarFormulario(formData);
      }}>
        <CenteredContent>
          <Title2>Cadastrar Administrador</Title2>
        </CenteredContent>
        <DescricaoSobInput>Nome:</DescricaoSobInput>
        <Input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
          onBlur={(e) => verificaPreenchimentoCampos(e.target.name)}
        />
        {erros.nome.temErros && <DescricaoDadoIncorreto>{erros.nome.mensagem}</DescricaoDadoIncorreto>}
        <DescricaoSobInput>Email:</DescricaoSobInput>
        <Input type="email"
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          onBlur={(e) => verificaPreenchimentoCampos(e.target.name)}
        />
        {erros.email.temErros && <DescricaoDadoIncorreto>{erros.email.mensagem}</DescricaoDadoIncorreto>}
        <DescricaoSobInput>CPF:</DescricaoSobInput>
        <Input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleInputChange}
          onBlur={(e) => verificaPreenchimentoCampos(e.target.name)}
        />
        {erros.cpf.temErros && <DescricaoDadoIncorreto>{erros.cpf.mensagem}</DescricaoDadoIncorreto>}
        <DescricaoSobInput>Senha:</DescricaoSobInput>
        <Input
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleInputChange}
          onBlur={(e) => verificaPreenchimentoCampos(e.target.name)}
        />
        {erros.senha.temErros && <DescricaoDadoIncorreto>{erros.senha.mensagem}</DescricaoDadoIncorreto>}
        <CenteredContent>
           {formErros.erros && <DescricaoDadoIncorreto>{formErros.mensagem}</DescricaoDadoIncorreto>}
           {responseErros && <DescricaoDadoIncorreto>{responseErros.mensagem}</DescricaoDadoIncorreto>}
          <Button type="submit">Cadastrar</Button>
        </CenteredContent>
      </FormContainer>
    </DisplayFlex>
  );
};

export default CadastroAdmin;
