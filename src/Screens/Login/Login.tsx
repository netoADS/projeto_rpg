import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginCss.css';
import logo from '../../img/logo2.png';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Implementar a lógica de autenticação aqui
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    // Supondo que a autenticação foi bem-sucedida
    if (username && password) {
      // Redirecionar para a página de seleção de facções após o login bem-sucedido
      navigate('/factions');
    } else {
      // Exibir mensagem de erro ou realizar alguma ação apropriada
      console.error('Login falhou.');
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="Logo do Jogo" />
        <h1>Nome do RPG</h1>
      </div>
      <div className="login-box">
        <form onSubmit={handleLogin}>
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
