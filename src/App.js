import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from "./pages/Admin/Admin";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admins" Component={Admin}/>
      </Routes>
    </Router>
  );
}

export default App;
