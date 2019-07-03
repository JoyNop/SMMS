import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";


import configStore from "./store";
import { loadPostsAction } from './actions/post_action';


const store = configStore()
store.dispatch(loadPostsAction as any)
const RootCom = () => {
  return <Provider store={store}>
    <App />
  </Provider>
}
ReactDOM.render(
  <RootCom />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
