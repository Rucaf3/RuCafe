
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Lista from './components/Menu/MenuOpc/Lista';
import LoginForm from './components/LoginForm/LoginForm';
import Menu from './components/Menu/Menu';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/lista" element={<Lista/>} />
      </Routes>
    </Router>
  );
};

export default App;
