import * as React from 'react';
import './App.css';
import { SMMSLayout } from "../src/componments/SMMSLayout";
import { Layout } from 'antd';
import { Redirect, Switch, Route, StaticRouter, BrowserRouter } from "react-router-dom"
import { SMMSIndex } from "./views/SMMS-index";
import { SMMSError } from "./views/SMMS-error";
import loadable from '@loadable/component'
import { SMMSFooter } from "./componments/SMMSFooter";


const SMMSAbout = loadable(() => import('./views/SMMS-about'), {
  fallback: <div>loading</div>,
})
const SMMSApi = loadable(() => import('./views/SMMS-api'), {
  fallback: <div>loading</div>,
})
// const LoadableComponent = loadable(() => import('./view/SMMS-about'), {
//   fallback: <div>loading</div>,
// })
const { Content } = Layout;

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <SMMSLayout />
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Switch>
                <Route path="/" exact component={SMMSIndex} />
                <Route path="/api" exact component={SMMSApi} />
                <Route path="/about" exact component={SMMSAbout} />
                <Route component={SMMSError} />
              </Switch>
            </div>
          </Content>
          <SMMSFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
