import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from './components/header';
import Footer from './components/footer';
import Login from './containers/login';
import reducers from './reducers';

import './app.css';

const initial = {
  login: {
    error: false,
  },
};

const App = () =>
  (
    <Provider store={createStore(reducers, initial)}>
      <div className="App">
        <Header />
        <Router>
          <Route component={Login} path="/" />
        </Router>
        <Footer />
      </div>
    </Provider>
  );
export default App;
