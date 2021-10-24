import './styles/App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home.js';
import Budget from './pages/Budget.js';
import Transactions from './pages/Transactions.js';
import Loan from './pages/Loan.js';

function App() {

  return (
    <Router>
      <div>
        <nav className="nav">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/budget">Budget</Link>
          </div>
          <div>
            <Link to="/transactions">Transactions</Link>
          </div>
        </nav>

        <Switch>
          <Route path="/budget">
            <Budget />
          </Route>
          <Route path="/transactions">
            <Transactions />
          </Route>
          <Route path="/loan">
            <Loan />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
