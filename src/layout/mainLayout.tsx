import { Layout, Menu } from "antd";
import * as React from "react";
import * as Style from "./style/mainLayout.module.less";
import { layoutConfig } from "./config/layout.config";
// import { Ilayout } from "./config/layout.interface";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import { SMMSbreadcrumb } from "../layout/breadcrumb";

const { Header, Footer, Content } = Layout;

export class MainLayout extends React.Component {
  // private layoutConfig = new layoutConfig();

  render() {
    const props: any = this.props;
    const { children, location } = props;

    const checkSelectKeys = (link: string) => {
      const key = _.findIndex(layoutConfig.menu, { link: link });
      console.log(key);
      const selectedKeys: Array<string> = [key.toString()];
      return selectedKeys;
    };

    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["0"]}
            className={Style.menu}
            selectable
            selectedKeys={checkSelectKeys(location.pathname)}
          >
            {layoutConfig.menu.map((menuItem, index) => (
              <Menu.Item key={index}>
                <NavLink to={menuItem.link}>{menuItem.name}</NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content className={Style.content_container}>
          <SMMSbreadcrumb />
          <div className={Style.content}>{children}</div>
        </Content>
        <Footer className={Style.footer}>
          SMMS ©2019 CREATED BY JOYNOP.COM
        </Footer>
      </Layout>
    );
  }
}
