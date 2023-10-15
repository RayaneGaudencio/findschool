import React from 'react'
import DisplayFlex from '../../utils/DisplayFlex'
import { FormContainer, CenteredContent } from '../../components/form/FormContainer'
import LogoSVG from '../../img/logo-e-nome.svg'
import Title2 from '../../components/form/Title2'
import DescricaoSobInput from '../../components/form/DescricaoSobInput'
import Input from '../../components/form/Input'
import { FundoComLogo, LogoImagem } from '../../components/FundoComLogo'
import Button from '../../components/form/Button'

const LoginAdmin = () => {
  return (
    <DisplayFlex>
        <FundoComLogo>
         <LogoImagem src={LogoSVG} alt="Logo branca FindSchool" />
        </FundoComLogo>
        <FormContainer>
        <CenteredContent>
          <Title2>Login Administrador</Title2>
        </CenteredContent>
            <DescricaoSobInput>Email:</DescricaoSobInput>
            <Input />
            <DescricaoSobInput>Senha:</DescricaoSobInput>
            <Input />
            <CenteredContent>
               <Button>Entrar</Button>
            </CenteredContent>
        </FormContainer>
    </DisplayFlex>
  )
}

export default LoginAdmin
