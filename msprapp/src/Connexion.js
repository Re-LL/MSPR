
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // todo vérifier et envoyer identifiants api
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
        <button type="submit">Se connecter</button>
      </form>
      <p>
        Vous n'avez pas de compte?{' '}
        <Link to="/inscription">Créez un compte</Link>
      </p>
    </div>
  );
};

export default Connexion;
