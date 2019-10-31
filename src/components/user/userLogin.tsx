import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import * as React from "react";
import { SMMSAPI } from "../../config/smms.api";
import { IUserBody, IUserLogin } from "../../interfaces/index";

class NormalLoginForm extends React.Component {
  private smmsAPI = new SMMSAPI();
  handleSubmit = (e: any) => {
    e.preventDefault();

    let form: any = this.props;
    form.form.validateFields(async (err: any, values: any) => {
      if (!err) {
        try {
          const userSuccess = await this.smmsAPI.smmsLogin(values);
          const userSuccessInfo: IUserBody = userSuccess.data;
          message.success(`你好${userSuccessInfo.username}，欢迎回来~！`);
        } catch (userError) {
          message.warn(userError.response.data.message);
        }
      } else {
        console.log(err);
      }
    });
  };

  render() {
    let props: any = this.props;
    const { getFieldDecorator } = props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "请输入用户名" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入密码" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>记住我</Checkbox>)}
          <span className="login-form-forgot">忘记密码</span>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <span>注册</span>
        </Form.Item>
      </Form>
    );
  }
}

export const LoginForm = Form.create({ name: "normal_login" })(NormalLoginForm);
