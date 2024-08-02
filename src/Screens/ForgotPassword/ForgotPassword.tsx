import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login/LoginCss.css'; // Reutilize o mesmo CSS do Login

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o e-mail de recuperação
        console.log({ email });
    };

    return (
        <div className="login-container">
            <div className="logo">
                <h1>Esqueci Minha Senha</h1>
            </div>
            <div className="login-box">
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Enviar E-mail de Recuperação</button>
                    <div className="additional-options">
                        <Link to="/">Voltar para o Login</Link>
                        <Link to="/new-user">Criar uma conta nova</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
