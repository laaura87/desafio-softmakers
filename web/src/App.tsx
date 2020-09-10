import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/GlobalStyles.css';

import Homepage from './pages/Homepage/';
import Showcontactpage from './pages/Showcontactpage';
import Signuppage from './pages/Signuppage';
import Editpage from './pages/Editpage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Homepage} />
        <Route path="/signup" exact={true} component={Signuppage} />
        <Route path="/:id" exact={true} component={Showcontactpage} />
        <Route path="/:id/edit" exact={true} component={Editpage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
