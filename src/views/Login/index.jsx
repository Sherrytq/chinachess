/*
 * @Author: sherry.zhai 
 * @Date: 2019-02-18 15:56:42 
 * @Last Modified by: sherry.zhai
 * @Last Modified time: 2019-02-20 17:14:04
 */
import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import qs from 'qs'
import { Form, Icon, Input, Button, Checkbox } from "antd";
import FormField from "@/components/FormField";
import {login} from '@/redux/app/user'

import "./index.less";

class LoginForm extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static propType = {
    login: PropTypes.func.isRequired
  }

  componentDidMount() {

  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) return;
      this.props.login(values).then(res => {
        console.log(33, res)
      })
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formData = [
      {
        id: "username",
        type: "input",
        options: {
          rules: [{ required: true, message: "Please input your username!" }]
        },
        props: {
          prefix: <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />,
          placeholder: "Username"
        }
      },
      {
        id: "password",
        type: "input",
        options: {
          rules: [{ required: true, message: "Please input your Password!" }]
        },
        props: {
          prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />,
          placeholder: "Username",
          type: "password"
        }
      }
    ];

    return (
      <div className="login">
        <div className="formWrapper">
          <Form onSubmit={this.handleSubmit} className="login-form">
            {formData.map(field => (
              <FormField
                key={field.id}
                field={field}
                getFieldDecorator={getFieldDecorator}
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

const mapStateToProps = ({ user }) => {
  return {
    userState: user
  }
}

const Login = connect(
  mapStateToProps,
  {
    login,
  }
)(Form.create({})(LoginForm));

export default Login;
