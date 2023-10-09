import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroAdmin from "./pages/Admin/CadastroAdmin";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admins" Component={CadastroAdmin}/>
      </Routes>
    </Router>
  );
}

export default App;
