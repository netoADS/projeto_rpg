import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login/LoginCss.css';// Utilize o mesmo CSS do Login

const NovoUsuario: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    console.log({ username, email, password, confirmPassword });
  };

  return (
    <div className="login-container">
      <div className="logo">
        <h1>Criar Nova Conta</h1>
      </div>
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Nome de Usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirmar Senha</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Criar Conta</button>
          <div className="additional-options">
            <Link to="/">Voltar para o Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NovoUsuario;
