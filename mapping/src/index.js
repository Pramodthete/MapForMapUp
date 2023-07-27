import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import regionReducer from './redux/reducers'; // Make sure to import the correct reducers file
import './index.css';
import thunkMiddleware from 'redux-thunk';
import App from './App';

const store = createStore(regionReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
