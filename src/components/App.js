import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import Red from './Red';
import Blue from './Blue';
import Yellow from './Yellow';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path='/red' component={Red} />
          <Route path='/blue' component={Blue} />
          <Route path='/yellow' component={Yellow} />
        </Switch>
      </>
    </Router>
  );
}
