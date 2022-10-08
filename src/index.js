import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';
import Navigation from './components/Navigation/Navigation';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from './components/Events/Events';

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  </Router>,

  document.querySelector('#root')
);
