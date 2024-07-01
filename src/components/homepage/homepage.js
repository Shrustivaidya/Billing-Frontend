import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, ShoppingCartOutlined, TagOutlined, DollarOutlined, FieldTimeOutlined, MessageOutlined } from '@ant-design/icons';
import './homepage.css';

function Homepage() {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <div className="container">
      <h1>Billing Form</h1>
      <Form
        id="purchase-form"
        onFinish={onFinish}
        layout="vertical" // Vertical layout for labels on top of inputs
      >
        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: 'Please input the date!' }]}
        >
          <Input type="date" />
        </Form.Item>
        <Form.Item
          label="Seller"
          name="seller"
          rules={[{ required: true, message: 'Please input the seller!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Seller" />
        </Form.Item>
        <Form.Item
          label="Purchases"
          name="purchases"
          rules={[{ required: true, message: 'Please input the purchases!' }]}
        >
          <Input prefix={<ShoppingCartOutlined />} placeholder="Purchases" />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: 'Please input the category!' }]}
        >
          <Input prefix={<TagOutlined />} placeholder="Category" />
        </Form.Item>
        <Form.Item
          label="Amount"
          name="amount"
          rules={[{ required: true, message: 'Please input the amount!' }]}
        >
          <Input prefix={<DollarOutlined />} placeholder="Amount" />
        </Form.Item>
        <Form.Item
          label="Remark"
          name="remark"
          rules={[{ required: true, message: 'Please input the remark!' }]}
        >
          <Input prefix={<MessageOutlined />} placeholder="Remark" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Homepage;
