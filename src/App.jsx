import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Footer from './components/footer';
import Dashboard from './pages/dashboard';
import Private from './components/Private';

import Login from './containers/login';
import Header from './containers/header';
import reducers from './reducers';

import './app.css';

const initial = {
  login: {
    error: false,
    loggedIn: false,
  },
};

const App = () =>
  (
    <Provider store={createStore(reducers, initial)}>
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route exact component={Login} path="/" />
            <Private component={Dashboard} path="/dashboard" />
          </div>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
export default App;
