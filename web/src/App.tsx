import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/GlobalStyles.css';

import Homepage from './pages/Homepage/';
import Showcontactpage from './pages/Showcontactpage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Homepage} />
        <Route path="/:id" exact={true} component={Showcontactpage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
