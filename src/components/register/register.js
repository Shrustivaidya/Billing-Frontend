import axios from "axios";
import React, { useState } from "react";
import { Input, Button, message } from "antd";
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
      message.error("Please Register first");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <Input
        prefix={<UserOutlined />}
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      />
      <Input
        prefix={<MailOutlined />}
        type="email"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      />
      <Input.Password
        prefix={<LockOutlined />}
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      />
      <Input.Password
        prefix={<LockOutlined />}
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      />
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
