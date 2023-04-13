
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connexion from './Connexion';
import Inscription from './Inscription';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </Router>
  );
};

export default App;
