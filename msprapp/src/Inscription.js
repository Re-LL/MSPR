import React, { useState } from 'react';
import { MainButton, NavLink } from './styles.js';
import bcrypt from 'bcryptjs'; 

const Inscription = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [verificationMotDePasse, setVerificationMotDePasse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (motDePasse !== verificationMotDePasse) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }
  
    
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(motDePasse, saltRounds);
  
    const data = {
      nom,
      prenom,
      email,
      motDePasse: hashedPassword, 
    };

    try {
      const response = await fetch('https://mon-api-exemple.com/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi des données');
      }

      const responseData = await response.json();
      console.log('Inscription réussie:', responseData);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <div className="container">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom:</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="prenom">Prénom:</label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
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
          <label htmlFor="verificationMotDePasse">Vérification du mot de passe:</label>
          <input
            type="password"
            id="verificationMotDePasse"
            value={verificationMotDePasse}
            onChange={(e) => setVerificationMotDePasse(e.target.value)}
          />
        </div>
        <MainButton>S'inscrire</MainButton>
        <NavLink href="/">J'ai déjà un compte. Se connecter</NavLink>
      </form>
    </div>
  );
};

export default Inscription;
