import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Expenses from './components/Expenses';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Expenses} />
        </div>
      </Router>
    );
  }
}

export default App;
