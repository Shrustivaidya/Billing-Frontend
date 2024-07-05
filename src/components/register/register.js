import axios from "axios";
import React, { useState } from "react";
import { Input, Button, message,Form } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && (password === reEnterPassword)) {
      axios.post("http://localhost:3001/register", user)
        .then(res => {
          message.success(res.data.message);
          navigate("/login");
        })
        .catch(error => {
          message.error("Registration failed");
          console.error("Registration error:", error);
        });
    } else {
      message.error("Please Register First");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      
      <Form layout="vertical">
      <Form.Item name="Name" label="Name" rules={[{ required: true, message: 'Please enter the your Name' }]}>
      <Input
        prefix={<UserOutlined />}
        type="text"
        name="name"
        size="small"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      />
      </Form.Item>
      <Form.Item name="Email" label="Email" rules={[{ required: true, message: 'Please enter the your Email' }]}>
      <Input
        prefix={<MailOutlined />}
        type="email"
        name="email"
        size="small"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      /></Form.Item>
      <Form.Item name="Password" label="Password" rules={[{ required: true, message: 'Please enter the your Password' }]}>
      <Input.Password
        prefix={<LockOutlined />}
        type="password"
        name="password"
        size="small"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      /></Form.Item>
      <Form.Item name="Re-enter Password" label="Re-enter Password" rules={[{ required: true, message: 'Please enter the your Re-enter Password' }]}>
      <Input.Password
        prefix={<LockOutlined />}
        type="password"
        name="reEnterPassword"
        size="small"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      />
      </Form.Item>
    </Form>
      <Button type="primary" className="button" onClick={register}>
        Register
      </Button>
      <div>or</div>
      <Button  type="primary" className="button" onClick={() => navigate("/login")}>
        Login
      </Button>
    </div>
  );
};

export default Register;
