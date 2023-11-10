export const validateGrau = (grau) => {
    // Verifica se o grau está dentro das opções permitidas
    const opcoesPermitidas = ["Infantil", "Fundamental I", "Fundamental II" , "Ensino Médio"];
    return opcoesPermitidas.includes(grau.toLowerCase());
};
  
export const validateSerie = (serie) => {
    // Remove espaços em branco
    serie = serie.trim();
  
    // Divide o nome da série em partes (por exemplo, "1° ano do fundamental" será dividido em ["1° ano", "fundamental"])
    const partes = serie.split(" do ");
  
    // Verifica se há duas partes no nome da série
    if (partes.length !== 2) {
      return false;
    }
  
    const [grau, nomeSerie] = partes;
  
    if (!validateGrau(grau)) {
      return false;
    }
  
    if (nomeSerie.length < 15) {
      return false;
    }
  
    return true;
};

export const validateDescricao = (descricao) => {
    return descricao.length >= 250;
};
  
  