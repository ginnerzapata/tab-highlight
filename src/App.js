import React from 'react';
import Header from './components/Header';
import Routes from './Routes';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <Header />
          <div className="viewport">
            <Routes />
          </div>
        </div>
      </div>

      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
