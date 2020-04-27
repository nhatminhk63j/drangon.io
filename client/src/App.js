import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import WriteFractionPicture from './containers/WriteFractionPicture/WriteFractionPicture';
import DecimalFractionsAndPercentage from './containers/DecimalFractionsAndPercentage';
import MatchingFiguresAndPictures from './containers/MatchingFiguresAndPictures/MatchingFiguresAndPictures';
import Home from './containers/Home/Home';
import {isLogin} from './auth/userAuth';
import {Redirect} from 'react-router-dom'


function App() {
  return (
    <Switch>
      <Route exact path="/write-the-fraction-according-to-the-picture" component={WriteFractionPicture} />
      <Route exact path="/matching-figures-and-pictures" component={MatchingFiguresAndPictures} />
      {/* <Route exact path="/courses" component={DecimalFractionsAndPercentage} /> */}
      <PrivateRoute exact path="/courses">
        <DecimalFractionsAndPercentage />
      </PrivateRoute>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
