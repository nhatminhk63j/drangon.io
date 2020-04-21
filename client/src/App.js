import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import WriteFractionPicture from './containers/WriteFractionPicture/WriteFractionPicture';
import DecimalFractionsAndPercentage from './containers/DecimalFractionsAndPercentage';
import MatchingFiguresAndPictures from './containers/MatchingFiguresAndPictures/MatchingFiguresAndPictures';



function App() {
  return (
    <Switch>
      <Route exact path="/write-the-fraction-according-to-the-picture" component={WriteFractionPicture} />
      <Route exact path="/matching-figures-and-pictures" component={MatchingFiguresAndPictures} />
      <Route exact path="/" component={DecimalFractionsAndPercentage} />
    </Switch>
  );
}

export default App;
