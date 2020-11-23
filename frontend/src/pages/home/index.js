import React from "react";
import { Link } from "react-router-dom";

import Navbar from '../../components/Navbar';

export default function Home() {
  return (
    <div className="home">
      <Navbar title="Home" />
      <h1>Protótipo - v1</h1>
      <p>Lista de rotas</p>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Cadastro</Link></li>
        <li><Link to="/signupsucess">Cadastro Sucesso</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/conta">Conta</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </div>
  );
}
