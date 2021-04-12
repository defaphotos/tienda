import './styles/main.scss';
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from '@pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
