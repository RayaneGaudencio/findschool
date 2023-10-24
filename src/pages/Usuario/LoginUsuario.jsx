import React from 'react'
import DisplayFlex from '../../utils/DisplayFlex'
import { FundoComLogo, LogoImagem } from '../../components/FundoComLogo'
import LogoSVG from '../../img/logo-e-nome.svg'
import { CenteredContent, FormContainer } from '../../components/form/FormContainer'
import Title2 from '../../components/form/Title2'
import DescricaoSobInput from '../../components/form/DescricaoSobInput'
import Button from '../../components/form/Button'
import TextoPossuiConta from '../../components/form/TextoPossuiConta'
import { Link } from 'react-router-dom';


const LoginUsuario = () => {
  return (
    <DisplayFlex> 
        <FundoComLogo>
            <LogoImagem src={LogoSVG} alt="Logo branca FindSchool" />
        </FundoComLogo>
        <FormContainer>
            <CenteredContent>
                <Title2>Olá, bem-vindo ao login</Title2>
            </CenteredContent>
         <DescricaoSobInput>E-mail</DescricaoSobInput> 
         <input type="email" />  
         <DescricaoSobInput>Senha</DescricaoSobInput>   
        <input type="password" />
        <CenteredContent>
            <Button type='submit'>Entrar</Button>
            <TextoPossuiConta>
                <p>Não possui conta?</p> 
                <Link to="/cadastro_usuario">Cadastre-se</Link>
            </TextoPossuiConta>
        </CenteredContent>
        </FormContainer>
    </DisplayFlex>
  )
}

export default LoginUsuario
