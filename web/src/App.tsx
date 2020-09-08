import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/GlobalStyles.css';

import Homepage from './pages/Homepage/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
