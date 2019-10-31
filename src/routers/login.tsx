import * as React from "react";
import { LoginForm } from "../components";
import { Card, Layout, Row, Col } from "antd";
import * as Style from "./style/login.module.less";
export class SMMSLogin extends React.Component {
  render() {
    return (
      <div>
        <Layout className={Style.Layout}>
          <Row type="flex" justify="center" align="top">
            <Col>
              <Card title="登录">
                <LoginForm />
              </Card>
            </Col>
          </Row>
        </Layout>
      </div>
    );
  }
}
