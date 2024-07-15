import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Edit from './components/Buttons/Edit';
import InvoiceFrom from './InvoiceFrom/InvoiceFrom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/register" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage/:id" element={<Edit/>} />
          <Route path="/invoicepdf" element={<InvoiceFrom/>} />
         
          
          
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
