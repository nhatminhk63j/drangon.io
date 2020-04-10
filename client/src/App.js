import React from 'react';
import './App.css';
import DoardBoard from './containers/DoardBoard';
import { Route, Switch } from 'react-router-dom';
import WriteFractionPicture from './containers/WriteFractionPicture/WriteFractionPicture';
import DecimalFractionsAndPercentage from './containers/DecimalFractionsAndPercentage';
import MatchingFigures from './containers/MatchingFigures/MatchingFigures';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={DoardBoard} />
      <Route exact path="/write-the-fraction-according-to-the-picture" component={WriteFractionPicture} />
      <Route exact path="/decimal-fractions-and-percentage" component={DecimalFractionsAndPercentage} />
      <Route exact path="/matching-figures-and-baskets" component={MatchingFigures} />
    </Switch>
  );
}

export default App;
