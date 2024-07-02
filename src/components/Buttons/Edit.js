import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Input, Button, DatePicker, message,Select, Space } from 'antd';
import { TagOutlined } from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment';
import  "./Edit.css";


const { Option } = Select;

const EditBillingData = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBillingData();
  }, []);

  const fetchBillingData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/homepage/${id}`);
      const data = response.data;
      form.setFieldsValue({
        date: moment(data.date),
        seller: data.seller,
        purchases: data.purchases,
        category: data.category,
        amount: data.amount,
        remark: data.remark,
      });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching billing data:', error);
      message.error('Error fetching billing data');
    }
  };

  const handleSave = async (values) => {
    try {
      await axios.put(`http://localhost:3001/homepage/${id}`, values);
      message.success('Billing record updated successfully');
      navigate('/register');
    } catch (error) {
      console.error('Error updating billing record:', error);
      message.error('Failed to update billing record');
    }
  };

  
  
  return (
    <div className="edit-billing-data-container">
      <h1>Edit Billing Record</h1>
      <Form form={form} onFinish={handleSave} layout="vertical">
        <Form.Item name="date" label="Date" rules={[{ required: true, message: 'Please select a date' }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item name="seller" label="Seller" rules={[{ required: true, message: 'Please enter the seller name' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="purchases" label="Purchases" rules={[{ required: true, message: 'Please enter the purchases' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="category" label="Category" rules={[{ required: true, message: 'Please enter the category' }]}>
        <Select placeholder="Select a category" prefix={<TagOutlined />}>
            <Option value="Master">Master</Option>
            <Option value="Admin">Admin</Option></Select> 
        </Form.Item>
        <Form.Item name="amount" label="Amount" rules={[{ required: true, message: 'Please enter the amount' }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name="remark" label="Remark" rules={[{ required: true, message: 'Please enter the remark' }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Space>
        {/* <div className="save-cancel-buttons"> */}
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button type="primary" htmlType="submit" >
            Cancel
          </Button>
          {/* </div> */}
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditBillingData;
