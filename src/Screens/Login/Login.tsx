import React from 'react';
import { Link } from 'react-router-dom';
import './LoginCss.css';
import logo from '../../img/logo2.png';


const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="Logo do Jogo" />
        <h1>Nome do RPG</h1>
      </div>
      <div className="login-box">
        <form action="/login" method="POST">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
          <div className="additional-options">
            <Link to="/forgot-password">Esqueceu a senha?</Link>
            <Link to="/new-user">Criar uma conta nova</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;