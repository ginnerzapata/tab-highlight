import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import { Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/features">
        <Features />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
