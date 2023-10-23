import React from 'react'
import DisplayFlex from '../../utils/DisplayFlex'
import { FundoComLogo, LogoImagem } from '../../components/FundoComLogo'
import LogoSVG from '../../img/logo-e-nome.svg'
import { CenteredContent, FormContainer } from '../../components/form/FormContainer'
import Title2 from '../../components/form/Title2'
import DescricaoSobInput from '../../components/form/DescricaoSobInput'
import Input from '../../components/form/Input'
import Button from '../../components/form/Button';
import TextoPossuiConta from '../../components/form/TextoPossuiConta'
import { Link } from 'react-router-dom';

const CadastroUsuario = () => {
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
            <Input />
            <DescricaoSobInput>E-mail</DescricaoSobInput>
            <Input />
            <DescricaoSobInput>CPF</DescricaoSobInput>
            <Input />
            <DescricaoSobInput>Senha</DescricaoSobInput>
            <Input />
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
