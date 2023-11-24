import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroAdmin from "./pages/Admin/CadastroAdmin";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import LoginAdmin from "./pages/Admin/LoginAdmin";
import HomeUsuario from "./pages/Usuario/HomeUsuario";
import CadastroUsuario from "./pages/Usuario/CadastroUsuario";
import LoginUsuario from "./pages/Usuario/LoginUsuario";
import HomeInstituicao from "./pages/instituicao/HomeInstituicao";
import LoginInstituicao from "./pages/instituicao/LoginInstituicao";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro_admin" Component={CadastroAdmin} />
        <Route path="/admin" Component={HomeAdmin} />
        <Route path="/login_admin" Component={LoginAdmin} />
        <Route path="/" Component={HomeUsuario} />
        <Route path="/cadastro_usuario" Component={CadastroUsuario}/>
        <Route path="/login_usuario" Component={LoginUsuario}/>
        <Route path="/instituicao" Component={HomeInstituicao}/>
        <Route path="/login_instituicao" Component={LoginInstituicao}/>
      </Routes>
    </Router>
  );
}

export default App;
