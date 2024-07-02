import React, { useState } from "react";
import { Input, Button, message } from "antd";
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

  const handleLogin = () => {
    const {email, password} = user;
    if (email && password) {
    axios.post("http://localhost:3001/register", user) 
      .then(res => {
        if (res.data.success) {
          message.success("Login successful");
          navigate("/register"); 
        } else {
          message.error("Login failed. User not found.");
          navigate("/register"); 
        }
      })
      .catch(error => {
        message.error("Login failed");
        console.error("Login error:", error);
      });
    } else {
      message.error("Please enter vaild Email and Pasword");
    }
  };

  const handleRegister = () => {
    navigate("/");
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <Input
        prefix={<UserOutlined />}
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      />
      <Input.Password
        prefix={<LockOutlined />}
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      />
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
