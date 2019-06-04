import * as React from 'react'
import { Layout, Menu } from 'antd';
import "./SMMSLayout.css";
import { Link } from 'react-router-dom'
import { createBrowserHistory } from "history";

const history = createBrowserHistory()



export class SMMSLayout extends React.Component {

  render() {
    let url = history.location.pathname
    let defaultIndex: string = '0'

    const checkURL = () => {
      if (url.startsWith('/api')) {
        defaultIndex = '1'
      }
      if (url.startsWith('/about')) {
        defaultIndex = '2'
      }
      return defaultIndex
    }

    const { Header } = Layout;
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo">SMMS-IO</div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[checkURL()]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="0"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="1"> <Link to="/api">API</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
            </Menu>
          </Header>
        </Layout>,
      </div>
    )
  }
}
