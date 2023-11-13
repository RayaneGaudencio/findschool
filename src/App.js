import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CadastroAdmin from "./pages/Admin/CadastroAdmin";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import LoginAdmin from "./pages/Admin/LoginAdmin";
import HomeUsuario from "./pages/Usuario/HomeUsuario";
import CadastroUsuario from "./pages/Usuario/CadastroUsuario";
import LoginUsuario from "./pages/Usuario/LoginUsuario";
import LoginInstituicao from "./pages/Instituicao/LoginInstituicao";
import HomeInstituicao from "./pages/Instituicao/HomeInstituicao";
import AddSerie from "./pages/Instituicao/AddSerie";
import MeuPerfil from "./pages/Instituicao/MeuPerfil";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro_admin" Component={CadastroAdmin} />
        <Route path="/admin" Component={HomeAdmin} />
        <Route path="/login_admin" Component={LoginAdmin} />
        <Route path="/" Component={HomeUsuario} />
        <Route path="/cadastro_usuario" Component={CadastroUsuario} />
        <Route path="/login_usuario" Component={LoginUsuario} />
        <Route path="/login_instituicao" Component={LoginInstituicao} />
        <Route path="/parceiro" Component={HomeInstituicao} />
        {/* <Route path="/adicionar_serie" Component={AddSerie}/> */}
        {/* <Route path="/meu_perfil" Component={MeuPerfil}/>*/}
      </Routes>
    </Router>
  );
}

export default App;
