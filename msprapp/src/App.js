import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connexion from './Connexion';
import Inscription from './Inscription';
import { Container } from './styles';

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
