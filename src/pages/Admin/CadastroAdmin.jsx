import { React, useState } from 'react';
import Title2 from '../../components/form/Title2';
import Input from '../../components/form/Input';
import Button from '../../components/form/Button';
import { FormContainer, CenteredContent } from '../../components/form/FormContainer';
import DisplayFlexRow from '../../utils/DisplayFlexRow';
import DescricaoSobInput from '../../components/form/DescricaoSobInput';
import FundoComLogo from '../../components/FundoComLogo';
import LogoSVG from '../../img/logo-e-nome.svg'
import API_URL from '../../config/config'
import axios from "axios";
import { validateNomeCompleto, validateCPF, validateEmail, validateSenha } from '../../validations/validaDadosCadastro';
import DescricaoDadoIncorreto from '../../components/form/DadoIncorreto';

const CadastroAdmin = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    senha: ''
  });

  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    cpf: '',
    senha: ''
  });

  const handleCadastroAdmin = async (e) => {
    e.preventDefault()

    const newErrors = {};

    const { nome, email, cpf, senha } = formData;

    if (!nome) {
      alert('Por favor, preencha o campo Nome.');
      return;
    }

    if (!email) {
      alert('Por favor, preencha o campo Email.');
      return;
    }

    if (!cpf) {
      alert('Por favor, preencha o campo CPF.');
      return;
    }

    if (!validateNomeCompleto(formData.nome)) {
      newErrors.nome = 'Deve conter nome e sobrenome.';
    } 

    if (!senha) {
      alert('Por favor, preencha o campo Senha.');
      return;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }
  
    if (!validateCPF(formData.cpf)) {
      newErrors.cpf = 'CPF inválido';
    }
  
    if (!validateSenha(formData.senha)) {
      newErrors.senha = 'Senha deve ter pelo menos 8 caracteres, contendo pelo menos uma letra maíuscula, um número e um símbolo.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
    try {
        const response = await axios.post(`${API_URL}/admins`, formData, {
          withCredentials: true
        });
        console.log('Administrador cadastrado com sucesso:', response.data);
    } catch (error) {
        console.error('Erro ao cadastrar administrador:', error);
    }
  }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

return (
  <DisplayFlexRow>
    <FundoComLogo>
        <img src={LogoSVG} alt="Logo branca FindSchool" style={{ width: '500px', height: 'auto' }}></img>
    </FundoComLogo>
    <FormContainer onSubmit={handleCadastroAdmin}>
      <CenteredContent>
        <Title2>Cadastrar Administrador</Title2>
      </CenteredContent>
      <DescricaoSobInput>Nome:</DescricaoSobInput>
      <Input type="text" name='nome' value={formData.nome} onChange={handleInputChange}/>
      {errors.nome && <DescricaoDadoIncorreto>{errors.nome}</DescricaoDadoIncorreto>}
      <DescricaoSobInput>Email:</DescricaoSobInput>
      <Input type="email"  name='email' value={formData.email} onChange={handleInputChange}/>
      {errors.email && <DescricaoDadoIncorreto>{errors.email}</DescricaoDadoIncorreto>}
      <DescricaoSobInput>CPF:</DescricaoSobInput>
      <Input type="text" name="cpf" value={formData.cpf} onChange={handleInputChange}/>
      {errors.cpf && <DescricaoDadoIncorreto>{errors.cpf}</DescricaoDadoIncorreto>}
      <DescricaoSobInput>Senha:</DescricaoSobInput>
      <Input type="password" name="senha" value={formData.senha} onChange={handleInputChange} />
      {errors.senha && <DescricaoDadoIncorreto>{errors.senha}</DescricaoDadoIncorreto>}
      <CenteredContent>
        <Button type="submit" onClick={handleCadastroAdmin}>Cadastrar</Button>
      </CenteredContent>
    </FormContainer>
  </DisplayFlexRow>
);
};

export default CadastroAdmin;
