import React, { useState } from 'react';
import { MainButton, NavLink } from './styles.js';

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // À faire : vérifier et envoyer les identifiants à l'API
  };

  return (
    <div className="container">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Adresse e-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="motDePasse">Mot de passe:</label>
          <input
            type="password"
            id="motDePasse"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
          />
        </div>
        <div>
          <h1>Connexion</h1>
          <MainButton>Se connecter</MainButton>
          <NavLink href="/inscription">Pas encore inscrit ? Inscrivez-vous</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Connexion;
