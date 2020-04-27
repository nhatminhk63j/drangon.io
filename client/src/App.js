import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import WriteFractionPicture from './containers/WriteFractionPicture/WriteFractionPicture';
import MatchingFiguresAndPictures from './containers/MatchingFiguresAndPictures/MatchingFiguresAndPictures';
import Home from './containers/Home/Home';
import {isLogin} from './auth/userAuth';
import {Redirect} from 'react-router-dom'
import PartsAndFractions from './containers/PartsAndFractions';


function App() {
  return (
    <Switch>
      <Route exact path="/write-the-fraction-according-to-the-picture" component={WriteFractionPicture} />
      <Route exact path="/matching-figures-and-pictures" component={  MatchingFiguresAndPictures} />
      <PrivateRoute exact path="/parts-and-fractions">
        <PartsAndFractions />
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
