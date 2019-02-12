import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";

import FormField from  '@/components/FormField'

import "./index.less";

class LoginForm extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if(err) return;
      if (!err) {
        this.props.history.push('/');
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formData = [
      {
        id: 'username',
        type: 'input',
        options: {
          rules: [
            { required: true, message: "Please input your username!" }
          ],
        },
        props: {
          prefix: <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />,
          placeholder: 'Username'
        }
      },
      {
        id: 'password',
        type: 'input',
        options: {
          rules: [
            { required: true, message: "Please input your Password!" }
          ],
        },
        props: {
          prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />,
          placeholder: 'Username',
          type:"password"
        }
      }

    ];

    return (
      <div className="login">
        <div className="formWrapper">
          <Form onSubmit={this.handleSubmit} className="login-form">
            {formData.map(field => (
              <FormField
                key ={field.id} 
                field = {field}
                getFieldDecorator = {getFieldDecorator}
              />
            ))}

            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const Login = Form.create({})(LoginForm);

export default Login;
