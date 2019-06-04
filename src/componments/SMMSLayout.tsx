import * as React from 'react'
import { Layout, Menu } from 'antd';
import "./SMMSLayout.css";
import { Link } from 'react-router-dom'


export class SMMSLayout extends React.Component {
  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo">SMMS-IO</div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="2"> <Link to="/api">API</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
            </Menu>
          </Header>
        </Layout>,
      </div>
    )
  }
}
