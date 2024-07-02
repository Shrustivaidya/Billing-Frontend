import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Button, Space, message, Modal, DatePicker } from 'antd';
import { EditOutlined, DeleteOutlined, FilterOutlined,PrinterOutlined } from '@ant-design/icons';
import axios from 'axios';
import './Dashboard.css'; 

const { confirm } = Modal;
const { RangePicker } = DatePicker; 
const Dashboard = () => {
  const navigate = useNavigate();
  const [billingData, setBillingData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedDateRange, setSelectedDateRange] = useState([]);

  useEffect(() => {
    fetchBillingData();
  }, []);

  const fetchBillingData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/homepage');
      setBillingData(response.data);
    } catch (error) {
      console.error('Error fetching billing data:', error);
    }
  };

  const handleNewButtonClick = () => {
    navigate('/homepage');
  };

  const handleEdit = (id) => {
    navigate(`/homepage/${id}`);
  };
  

  const handleDelete = async (id) => {
    try {
      await confirmDelete(id);
    } catch (error) {
      console.error('Error deleting billing record:', error);
    }
  };





  const confirmDelete = (id) => {
    confirm({
      title: 'Are you sure you want to delete this record?',
      icon: <DeleteOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteBillingRecord(id);
      },
    });
  };

  const deleteBillingRecord = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/homepage/${id}`);
      fetchBillingData(); // Refresh data after delete
      message.success('Billing record deleted successfully');
    } catch (error) {
      console.error('Error deleting billing record:', error);
      message.error('Failed to delete billing record');
    }
  };

  const handleFilter = () => {
    // Implement filter functionality based on selectedDateRange
    console.log('Filter clicked with range:', selectedDateRange);
  };

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const handleSelectAll = (selected, selectedRows, changeRows) => {
    const selectedIds = changeRows.map((row) => row._id);
    setSelectedRowKeys(selected ? selectedIds : []);
  };

  const handleDateRangeChange = (dates) => {
    setSelectedDateRange(dates);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    onSelectAll: handleSelectAll,
  };
  const handlePrint = () => {
    window.print();
  };

  const columns = [
    
    {
      title: 'Date',
      dataIndex: 'date',
      render: (text, record) => new Date(record.date).toLocaleDateString(),
    },
    {
      title: 'Seller',
      dataIndex: 'seller',
    },
    {
      title: 'Purchases',
      dataIndex: 'purchases',
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      title: 'Remark',
      dataIndex: 'remark',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (text, record) => (
        <Space>
          <Button type="primary" icon={<EditOutlined />} onClick={() => handleEdit(record._id)}>
            Edit
          </Button>
          <Button type="danger" icon={<DeleteOutlined />} onClick={() => handleDelete(record._id)}>
            Delete
          </Button>
         
        </Space>
      ),
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Billing Information</h1>
        <Space>
        <Button type="primary" className="new-button" onClick={handleNewButtonClick}>
          New +
        </Button>
        <RangePicker className="date-picker" onChange={handleDateRangeChange} />
        <Button type="default" className="filter-button" icon={<FilterOutlined />} onClick={handleFilter}>
          Filter
        </Button>
        </Space>
      </div>
      <div className="table-container">
        <Table
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          dataSource={billingData}
          columns={columns}
        />
      </div>
      <Space>
      <div className="print-button-container">
        <Button type="primary" className="print-button" icon={<PrinterOutlined />} onClick={handlePrint}>
          Print All
        </Button>
      </div>
      </Space>
    </div>
  );
};

export default Dashboard;
