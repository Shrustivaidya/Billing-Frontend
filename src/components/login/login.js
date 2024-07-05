import React, { useState } from "react";
import { Input, Button, message, Form } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Register from "../register/register";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 9;
  };

  const handleLogin = () => {
    const { email, password } = user;
    if (!validateEmail(email)) {
      message.error("Please enter a valid Email and Password");
      return;
    }
    if (!validatePassword(password)) {
      message.error("Password must be at least 9 characters long");
      return;
    }
    axios.post("http://localhost:3001/login", user)
      .then(res => {
        if (res.data.success) {
          message.success("Login successful");
          navigate("/register");
        } else {
          message.error("Please Registered First");
        }
      })
      .catch(error => {
        message.error("Login failed User already exists");
        console.error("Login error:", error);
      });
  };

  const handleRegister = () => {
    navigate("/");
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <Form layout="vertical">
        <Form.Item name="Email" label="Email" rules={[{ required: true, message: 'Please enter the your Email' }]}>
      <Input
        prefix={<UserOutlined />}
        type="text"
        name="email"
        size="large"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      />
      </Form.Item>
      <Form.Item name="Password" label="Password" rules={[{ required: true, message: 'Please enter the your Password' }]}>
      <Input.Password
        prefix={<LockOutlined />}
        type="password"
        name="password"
        size="large"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      />
       </Form.Item>
      </Form>
      <Button type="primary" className="button" onClick={handleLogin}>
        Login
      </Button>
      <div>or</div>
      <Button className="button" onClick={handleRegister}>
        Register
      </Button>
    </div>
  );
};

export default Login;
