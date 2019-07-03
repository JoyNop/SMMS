import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configStore from './configStore'
import { createHashHistory } from 'history'
// We use hash history because this example is going to be hosted statically.
// Normally you would use browser history.
const history = createHashHistory()

const initialState = window.initialReduxState  
const store = configStore(history, initialState)
ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
