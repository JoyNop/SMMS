import { Layout, Menu, Breadcrumb } from "antd";
import * as React from "react";
import * as Style from "./style/mainLayout.module.less";
import { layoutConfig } from "./config/layout.config";
import { Ilayout } from "./config/layout.interface";
import { Link } from "react-router-dom";

const { Header, Footer, Content } = Layout;
export class MainLayout extends React.Component {
  // private layoutConfig = new layoutConfig()

  render() {
    console.log(this.props);
    const { children } = this.props;
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            className={Style.menu}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content className={Style.content_container}>
          <Breadcrumb className={Style.breadcrumb}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className={Style.content}>{children}</div>
        </Content>
        <Footer className={Style.footer}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
