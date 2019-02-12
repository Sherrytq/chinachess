import React, { Component } from "react";
// import "./index.less";
import { Form, Icon, Input, Checkbox} from "antd";

const renderFormField = (field, form) => {
  switch (field.type) {
    case 'input':
      return <Input {...field.props}/>
      break;
    // case 'checkBox':
    //   return <Checkbox>field.text</Checkbox>
    //   break;
    default:
      break;
  }
};


const FormField = ({field, getFieldDecorator}) => {
  return (
    <Form.Item>
        {getFieldDecorator(field.id, field.options)(
           renderFormField(field)
        )}
    </Form.Item>
  );
};

export default FormField;
