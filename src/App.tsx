import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UsersContainer from './screens/Users';
import WalletContainer from './screens/Wallet';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path={["/", "/users"]}>
            <UsersContainer />
          </Route>
          <Route path="/users/:id/accounts">
            <WalletContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
