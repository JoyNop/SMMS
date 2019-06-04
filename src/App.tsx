import * as React from 'react';
import './App.css';
import { SMMSLayout } from "../src/componments/SMMSLayout";
import { Layout, Menu } from 'antd';
import { Redirect, Switch, Route, StaticRouter, BrowserRouter } from "react-router-dom"
import { SMMSUpdate } from "./componments/SMMS-update";
class App extends React.Component {

  public render() {
    const { Header, Content, Footer } = Layout;

    return (
      <BrowserRouter>
        <div  >
          <SMMSLayout />
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Switch>
                <Route path="/" exact component={SMMSUpdate} />
                {/* <Route path="/about" exact component={About} />
            <Route path="/project" exact component={ProjectIndex} />
            <Route component={Error} /> */}
              </Switch>

            </div>
          </Content>
          <Footer className='footer'>Ant Design ©2018 Created by Ant UED</Footer>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
