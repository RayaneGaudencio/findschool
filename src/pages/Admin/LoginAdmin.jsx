import { React, useState } from 'react'
import DisplayFlex from '../../utils/DisplayFlex'
import { FormContainer, CenteredContent } from '../../components/form/FormContainer'
import LogoSVG from '../../img/logo-e-nome.svg'
import Title2 from '../../components/form/Title2'
import DescricaoSobInput from '../../components/form/DescricaoSobInput'
import Input from '../../components/form/Input'
import { FundoComLogo, LogoImagem } from '../../components/FundoComLogo'
import Button from '../../components/Button'
import axios from "axios";
import API_URL from '../../config/config'
import DescricaoDadoIncorreto from '../../components/form/DadoIncorreto'
import { validateEmail, validateSenha } from '../../validations/validaDadosCadastro';
import { useNavigate } from "react-router-dom";


const LoginAdmin = () => {
  const [formData, setFormData] = useState({email: "", senha: ""});

  const [erro, setErro] = useState({
    email: {temErro: false, mensagem: ""},
    senha: {temErro: false, mensagem: ""}});
  
  const [formErros, setFormErros] = useState({ erros: false, mensagem: ""})

  const [responseErros, setResponseErros] = useState({ temErrosNaResposta: false, mensagem: ""})

  let navigate = useNavigate();

  const enviarFormulario = async (e) => {
    for (const campo in formData) {
      if (formData[campo].trim() === '') {
        setFormErros({erros: true, mensagem: "Preencha os campos."})
      } else {
        setFormErros({erros: false, mensagem: ""})
      }
    }

    if (!formErros.erros) {
      try {
        const response = await axios.post(`${API_URL}/login_admin`, formData, {
          withCredentials: true
        });
        console.log('Administrador logado com sucesso:', response.data);
        // window.location.reload();

        const usuario = {
          nome: response.data.nome,
          email: response.data.email
        }

        // Redirecionamento para a página HomeAdmin com os dados do usuário cadastrado
        navigate(`/admin`, { state: { usuario } });

      } catch (error) {
        console.error('Erro ao fazer login:', error);
        const mensagemDeErro = error.response.data.message;
        setErro({email: {temErro: false, mensagem: "",}, senha: {temErro: false, mensagem: ""}})
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
     if (name == "email") {
        if (formData.email.trim() == '') {
          setErro({...erro, email: { temErro: true, mensagem: 'Campo obrigatório.'}})
        }else if (!validateEmail(formData.email)){
            setErro({...erro, email: { temErro: true, mensagem: 'Email inválido.'}})
        } else {
          setErro({...erro, email:({ temErro: false})})
        }
      } 
      
      if (name == "senha") {
        if (formData.senha.trim() == '') {
          setErro({...erro, senha: { temErro: true, mensagem: 'Campo obrigatório.'}})
        } else {
          setErro({...erro, senha:({ temErro: false})})
        }
      } 
    }

  return (
    <DisplayFlex>
        <FundoComLogo>
         <LogoImagem src={LogoSVG} alt="Logo branca FindSchool" />
        </FundoComLogo>
        <FormContainer onSubmit={(event) => {
          event.preventDefault();
          enviarFormulario(formData);
        }}>
        <CenteredContent>
          <Title2>Login Administrador</Title2>
        </CenteredContent>
            <DescricaoSobInput>Email:</DescricaoSobInput>
            <Input type="email"
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            onBlur={(e) => verificaPreenchimentoCampos(e.target.name)}
            />
            {erro.email.temErro && <DescricaoDadoIncorreto>{erro.email.mensagem}</DescricaoDadoIncorreto>}
            <DescricaoSobInput>Senha:</DescricaoSobInput>
            <Input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleInputChange}
            onBlur={(e) => verificaPreenchimentoCampos(e.target.name)}
            />
            {erro.senha.temErro && <DescricaoDadoIncorreto>{erro.senha.mensagem}</DescricaoDadoIncorreto>}
            {(formErros.erros && !erro.temErro) && <DescricaoDadoIncorreto>{formErros.mensagem}</DescricaoDadoIncorreto>}
            {(!formErros.erros && responseErros.temErrosNaResposta) && <DescricaoDadoIncorreto>{responseErros.mensagem}</DescricaoDadoIncorreto>}
            <CenteredContent>
               <Button type="submit">Entrar</Button>
            </CenteredContent>
        </FormContainer>
    </DisplayFlex>
  )
}

export default LoginAdmin
