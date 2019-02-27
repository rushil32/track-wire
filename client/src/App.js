import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.scss';
import Dash from './pages/dash';
import Login from './pages/login';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/dash" exact component={Dash} />
        </div>
      </Router>
    </div>
  );
}

export default App;
