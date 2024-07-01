// Dashboard.js

import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import your CSS file for styling

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNewButtonClick = () => {
    navigate('/homepage');
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <button onClick={handleNewButtonClick}>New</button>
    </div>
  );
};

export default Dashboard;
