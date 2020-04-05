import React from 'react';
import './App.css';
import DoardBoard from './containers/DoardBoard';
import { Route, Switch } from 'react-router-dom'
import WriteFractionPicture from './containers/WriteFractionPicture/WriteFractionPicture';


function App() {
  return (
    <Switch>
      <Route path="/" component={DoardBoard} />
      
    </Switch>
  );
}

export default App;
