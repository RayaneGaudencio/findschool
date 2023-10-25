export const validateNomeCompleto = (nomeCompleto) => {
  // Remove espaços extras no início e no final do nome
  const trimmedNomeCompleto = nomeCompleto.trim();
  
  // Verifica se o nome contém pelo menos um espaço
  if (trimmedNomeCompleto.indexOf(' ') === -1) {
    return false; // Retorna falso se não houver espaço (ou seja, apenas um nome)
  }

  // Divide o nome em partes usando o espaço como separador
  const partesNome = trimmedNomeCompleto.split(' ');

  // Verifica se há pelo menos duas partes (um nome e um sobrenome)
  if (partesNome.length < 2) {
    return false; // Retorna falso se houver menos de duas partes (não tem sobrenome)
  }

  return true; // Retorna verdadeiro se houver pelo menos um nome e um sobrenome
};


export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validateCPF = (cpf) => {
    // Remove todos os caracteres não numéricos do CPF
    const cleanedCPF = cpf.replace(/\D/g, '');
  
    // Verifica se o CPF tem 11 dígitos
    if (cleanedCPF.length !== 11) {
      return false;
    }
  
    // Verifica se todos os dígitos são iguais; se sim, não é um CPF válido
    if (/^(\d)\1{10}$/.test(cleanedCPF)) {
      return false;
    }
  
    // Algoritmo para validar CPF
    let sum = 0;
    let remainder;
  
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cleanedCPF.substring(i - 1, i)) * (11 - i);
    }
  
    remainder = (sum * 10) % 11;
  
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
  
    if (remainder !== parseInt(cleanedCPF.substring(9, 10))) {
      return false;
    }
  
    sum = 0;
  
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cleanedCPF.substring(i - 1, i)) * (12 - i);
    }
  
    remainder = (sum * 10) % 11;
  
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
  
    if (remainder !== parseInt(cleanedCPF.substring(10, 11))) {
      return false;
    }
  
    return true;
  };
  
export const validateSenha = (senha) => {
    // Verifica se a senha tem pelo menos 6 caracteres
    if (senha.length < 6) {
      return false;
    }
  
    // Verifica se a senha contém pelo menos uma letra maiúscula
    if (!/[A-Z]/.test(senha)) {
      return false;
    }
  
    // Verifica se a senha contém pelo menos um número
    if (!/\d/.test(senha)) {
      return false;
    }
  
    // Verifica se a senha contém pelo menos um símbolo (caractere especial)
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
      return false;
    }
  
    return true;
  };
  
export const validateCNPJ = (cnpj) => {
  // Remove traços e pontos do CNPJ
  cnpj = cnpj.replace(/[^\d]+/g, '');

  // Verifica se o CNPJ tem 14 dígitos
  if (cnpj.length !== 14) {
      return false;
  }

  // Verifica se todos os dígitos são iguais, o que torna o CNPJ inválido
  if (/^(\d)\1+$/.test(cnpj)) {
      return false;
  }
  return true;
}
