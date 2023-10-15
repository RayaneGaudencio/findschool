import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroAdmin from "./pages/Admin/CadastroAdmin";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import LoginAdmin from "./pages/Admin/LoginAdmin";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro_admin" Component={CadastroAdmin}/>
        <Route path="/admin" Component={HomeAdmin}/>
        <Route path="/login_admin" Component={LoginAdmin}/>
      </Routes>
    </Router>
  );
}

export default App;
