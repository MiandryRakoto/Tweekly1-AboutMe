import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Accueil from './pages/Accueil';
import Competences from './pages/Competences';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

const App = () => {
  return (
   <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Accueil}/>
        <Route path="/Competences" component={Competences}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Portfolio" component={Portfolio}/>
        <Route component={NotFound}/>
      </Switch>  
    </BrowserRouter>
   </>
  );
};

export default App;