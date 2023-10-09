import React from 'react';
import Title2 from '../components/form/Title2';
import Input from '../components/form/Input';
import Button from '../components/form/Button';
import { FormContainer, CenteredContent } from '../components/form/FormContainer';
import DisplayFlexRow from '../utils/DisplayFlexRow';
import DescricaoSobInput from '../components/form/DescricaoSobInput';
import FundoComLogo from '../components/FundoComLogo';
import LogoSVG from '../img/logo-e-nome.svg'

const CadastroAdmin = () => {
  return (
    <DisplayFlexRow>
      <FundoComLogo>
          <img src={LogoSVG} alt="Logo branca FindSchool" style={{ width: '500px', height: 'auto' }}></img>
      </FundoComLogo>
      <FormContainer>
        <CenteredContent>
          <Title2>Cadastrar Administrador</Title2>
        </CenteredContent>
        <DescricaoSobInput>Nome:</DescricaoSobInput>
        <Input type="text" />
        <DescricaoSobInput>Email:</DescricaoSobInput>
        <Input type="email"  />
        <DescricaoSobInput>CPF:</DescricaoSobInput>
        <Input type="text" />
        <DescricaoSobInput>Senha:</DescricaoSobInput>
        <Input type="password" />
        <CenteredContent>
          <Button>Cadastrar</Button>
        </CenteredContent>
      </FormContainer>
    </DisplayFlexRow>
  );
};

export default CadastroAdmin;
