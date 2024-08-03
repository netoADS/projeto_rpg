import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Screens/Login/Login';
import NovoUsuario from './Screens/NovoUsuario/NovoUsuario';
import ForgotPassword from './Screens/ForgotPassword/ForgotPassword';
import FactionPage from './Screens/FactionPage/FactionPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/new-user" element={<NovoUsuario />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/factions" element={<FactionPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
