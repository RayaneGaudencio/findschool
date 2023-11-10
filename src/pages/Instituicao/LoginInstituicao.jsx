import { React, useState } from 'react'
import DisplayFlex from '../../utils/DisplayFlex'
import { FundoComLogo, LogoImagem } from '../../components/FundoComLogo'
import LogoSVG from '../../img/logo-e-nome.svg'
import { CenteredContent, FormContainer } from '../../components/form/FormContainer'
import Title2 from '../../components/form/Title2'
import DescricaoSobInput from '../../components/form/DescricaoSobInput'
import Button from '../../components/Button'
import Input from '../../components/form/Input'
import DescricaoDadoIncorreto from '../../components/form/DadoIncorreto'
import { validateEmail, validateSenha } from '../../validations/validaDadosCadastro'
import axios from 'axios'
import API_URL from '../../config/config'
import { useNavigate } from "react-router-dom";



const LoginInstituicao = () => {
    const [formData, setFormData] = useState({email: "", senha: ""});
  
    const [erros, setErros] = useState({
      email: {temErros: false, mensagem: ""},
      senha: {temErros: false, mensagem: ""}});

    const [formErros, setFormErros] = useState({ erros: false, mensagem: ""})
    
    const [responseErros, setResponseErros] = useState({ temErrosNaResposta: false, mensagem: ""})
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    let navigate = useNavigate();

    const verificaPreenchimentoCampos = (name) => {
        
        if (name == "email") {
            if (formData.email.trim() == '') {
              setErros({ ...erros, email: { temErros: true, mensagem: 'Campo obrigatório.'}})
            }else if (!validateEmail(formData.email)){
                setErros({ ...erros, email: { temErros: true, mensagem: 'Email inválido.'}})
            } else {
              setErros({...erros, email:({ temErros: false})})
            }
        }else if (name == "senha") {
            if (formData.senha.trim() == '') {
              setErros({ ...erros, senha: { temErros: true, mensagem: 'Campo obrigatório.'}})
            } else {
              setErros({...erros, senha:({ temErros: false})})
            }
          } 
      }

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
            const response = await axios.post(`${API_URL}/login_escola`, formData, {
              withCredentials: true
            });
            console.log('Instituição logada com sucesso:', response.data);
    
            const escola = {
              nome: response.data.nome,
              email: response.data.email
            }
    
            // Redirecionamento para a página HomeInstituicao com os dados da instituicao cadastrada
            navigate(`/instituicao`, { state: { escola } });
    
          } catch (error) {
            console.error('Erro ao fazer login:', error);
            const mensagemDeErro = error.response.data.message;
            setErros({email: {temErros: false, mensagem: "",}, senha: {temErros: false, mensagem: ""}})
            setResponseErros({temErrosNaResposta: true, mensagem: mensagemDeErro})
          }
        }
      };
    
    
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
                    <Title2>Olá parceiro, bem-vindo ao login</Title2>
                </CenteredContent>
            <DescricaoSobInput>E-mail</DescricaoSobInput> 
                <Input 
                type="email" 
                name='email'
                onChange={handleInputChange}
                onBlur={(e) => verificaPreenchimentoCampos(e.target.name)} />  
            {erros.email.temErros && <DescricaoDadoIncorreto>{erros.email.mensagem}</DescricaoDadoIncorreto>} 
            <DescricaoSobInput>Senha</DescricaoSobInput>   
                <Input 
                type="password"
                name="senha" 
                onChange={handleInputChange}
                onBlur={(e) => verificaPreenchimentoCampos(e.target.name)}/>
            {erros.senha.temErros && <DescricaoDadoIncorreto>{erros.senha.mensagem}</DescricaoDadoIncorreto>} 
            {(formErros.erros && !erro.temErro) && <DescricaoDadoIncorreto>{formErros.mensagem}</DescricaoDadoIncorreto>}
            {(!formErros.erros && responseErros.temErrosNaResposta) && <DescricaoDadoIncorreto>{responseErros.mensagem}</DescricaoDadoIncorreto>}
            <CenteredContent>
                <Button type='submit'>Entrar</Button>
            </CenteredContent>
            </FormContainer>
        </DisplayFlex>
  )
}

export default LoginInstituicao