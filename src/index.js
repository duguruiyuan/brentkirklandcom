import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/VisibleApp';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import './index.css';

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
