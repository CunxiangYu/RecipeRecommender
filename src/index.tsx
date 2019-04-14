import 'react-app-polyfill/ie11';
// The import of 'react-app-polyfill/ie11' must be placed in the first line
// of index.tsx to ensure proper functionality according to the official docs

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';

import './assets/index.css';
import App from './containers/App';

// Create store instance and pass it as global state to app
const store = configureStore();
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
