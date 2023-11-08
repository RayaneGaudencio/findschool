import { React, useState } from 'react'
import DisplayFlex from '../../utils/DisplayFlex'
import { FundoComLogo, LogoImagem } from '../../components/FundoComLogo'
import LogoSVG from '../../img/logo-e-nome.svg'
import { CenteredContent, FormContainer } from '../../components/form/FormContainer'
import Title2 from '../../components/form/Title2'
import DescricaoSobInput from '../../components/form/DescricaoSobInput'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/form/Input'
import DescricaoDadoIncorreto from '../../components/form/DadoIncorreto'
import { validateEmail, validateSenha } from '../../validations/validaDadosCadastro'
import styled from 'styled-components';


const LoginInstituicao = () => {
    const [formData, setFormData] = useState({email: "", senha: ""});
  
    const [erros, setErros] = useState({
      email: {temErros: false, mensagem: ""},
      senha: {temErros: false, mensagem: ""}});
    
  
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
              setErros({ ...erros, email: { temErros: true, mensagem: 'Campo obrigatório.'}})
            }else if (!validateEmail(formData.email)){
                setErros({ ...erros, email: { temErros: true, mensagem: 'Email inválido.'}})
            } else {
              setErros({...erros, email:({ temErros: false})})
            }
        }else if (name == "senha") {
            if (formData.senha.trim() == '') {
              setErros({ ...erros, senha: { temErros: true, mensagem: 'Campo obrigatório.'}})
            }else if (!validateSenha(formData.senha)){
                setErros({ ...erros, senha: { temErros: true, mensagem: 'Senha deve ter pelo menos 8 caracteres, contendo pelo menos uma letra maíuscula, um número e um símbolo.'}})
            } else {
              setErros({...erros, senha:({ temErros: false})})
            }
          } 
      }
    
      
    

    
    return (
        <DisplayFlex> 
            <FundoComLogo>
                <LogoImagem src={LogoSVG} alt="Logo branca FindSchool" />
            </FundoComLogo>
            <FormContainer>
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
            <CenteredContent>
                <Button type='submit'>Entrar</Button>
            </CenteredContent>
            </FormContainer>
        </DisplayFlex>
  )
}

export default LoginInstituicao