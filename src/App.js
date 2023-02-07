import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from "react"

import './App.css';

import { LandingPage, SignUp } from './components/LandingPage';
import { Profile } from './components/Profile';
import { SetRemembrall } from './components/SetRemembrall';
import { LogIn } from './components/LogIn';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/profile" component={Profile} />
        <Route path="/setremembrall" component={SetRemembrall} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;






















