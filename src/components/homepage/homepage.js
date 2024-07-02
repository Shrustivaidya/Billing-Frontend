import React from 'react';
import { Form, Input, Button,message,Select} from 'antd';
import { UserOutlined, ShoppingCartOutlined, TagOutlined, DollarOutlined, FieldTimeOutlined, MessageOutlined } from '@ant-design/icons';
import './homepage.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

function Homepage() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Received values of form:', values);
    handleSubmit(values); // Pass form values to handleSubmit
    navigate("/register");
 
  };

  


  
  const handleSubmit = (user) => {
    axios.post("http://localhost:3001/homepage", user)
    .then(res => {
      message.success("Login successful");
    })
    .catch(error => {
     
      console.error("Login error:", error);
    
    });
  }

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
          rules={[{ required: true, message: 'Please select the category!' }]}
        >
        <Select placeholder="Select a category" prefix={<TagOutlined />}>
            <Option value="Master">Master</Option>
            <Option value="Admin">Admin</Option>
            {/* {categories.map(category => (
              <Option key={category.id} value={category.name}>
                {category.name}
              </Option>
            ))} */}
          </Select>
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
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
        
      </Form>
    </div>
  );
}

export default Homepage;
