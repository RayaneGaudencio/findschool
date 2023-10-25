import { React, useState } from 'react';
import DisplayFlex from '../../utils/DisplayFlex'
import { FundoComLogo, LogoImagem } from '../../components/FundoComLogo'
import LogoSVG from '../../img/logo-e-nome.svg'
import { CenteredContent, FormContainer } from '../../components/form/FormContainer'
import Title2 from '../../components/form/Title2'
import DescricaoSobInput from '../../components/form/DescricaoSobInput'
import Input from '../../components/form/Input'
import Button from '../../components/Button';
import TextoPossuiConta from '../../components/form/TextoPossuiConta'
import { Link } from 'react-router-dom';
import { validateNomeCompleto, validateCPF, validateEmail, validateSenha } from '../../validations/validaDadosCadastro';
import DescricaoDadoIncorreto from '../../components/form/DadoIncorreto'

const CadastroUsuario = () => {
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
            <LogoImagem src={LogoSVG} alt="Logo branca FindSchool" />
        </FundoComLogo>
        <FormContainer>
            <CenteredContent>
                <Title2>Olá, bem-vindo ao cadastro</Title2>
            </CenteredContent>
            <DescricaoSobInput>Nome</DescricaoSobInput>
            <Input 
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                onBlur={(e) => verificaPreenchimentoCampos(e.target.name)}
            />
            {erros.nome.temErros && <DescricaoDadoIncorreto>{erros.nome.mensagem}</DescricaoDadoIncorreto>}
            <DescricaoSobInput>Email</DescricaoSobInput>
            <Input 
                type="email"
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                onBlur={(e) => verificaPreenchimentoCampos(e.target.name)}
            />
            {erros.email.temErros && <DescricaoDadoIncorreto>{erros.email.mensagem}</DescricaoDadoIncorreto>}
            <DescricaoSobInput>CPF</DescricaoSobInput>
            <Input 
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleInputChange}
                onBlur={(e) => verificaPreenchimentoCampos(e.target.name)}
            />
            {erros.cpf.temErros && <DescricaoDadoIncorreto>{erros.cpf.mensagem}</DescricaoDadoIncorreto>}
            <DescricaoSobInput>Senha</DescricaoSobInput>
            <Input 
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleInputChange}
                onBlur={(e) => verificaPreenchimentoCampos(e.target.name)}
            />
            {erros.senha.temErros && <DescricaoDadoIncorreto>{erros.senha.mensagem}</DescricaoDadoIncorreto>}
            <CenteredContent>
                <Button type="submit">Cadastrar</Button>
                <TextoPossuiConta>
                   <p>Já possui conta?</p> 
                    <Link to="/login_usuario">Login</Link>
                </TextoPossuiConta>
            </CenteredContent>  
        </FormContainer>
    </DisplayFlex>
  )
}

export default CadastroUsuario
