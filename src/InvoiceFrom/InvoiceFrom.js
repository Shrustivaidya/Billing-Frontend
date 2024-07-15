import React from "react";
import { Input, Table, Row, Col, DatePicker } from "antd";
import "./InvoiceFrom.css";

const InvoiceFrom = () => {
  const columns = [
    {
      title: "SL No:",
      dataIndex: "slno",
      key: "slno",
      align:"center",
      width: 80, // Adjust the width here
      render: () => <Input className="slno" style={{ width: "100%" }} />,
    },
    {
      title: "Date:",
      dataIndex: "date",
      key: "date",
      align:"center",
      width: 200,
      render: () => (
        <Row gutter={8}>
          <Col span={24}>
            <DatePicker style={{ width: "100%" }} />
          </Col>
        </Row>
      ),
    },
  ];

  const descriptionColumns = [
    {
      title: "SL No:",
      dataIndex: "slno",
      key: "slno",
      width: 20,
      render: () => <Input className="slno" />,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 270,
      align: "center",
      render: () => <Input />,
    },
    {
      title: "Qty.",
      dataIndex: "qty",
      key: "qty",
      width: 65,
      align: "center",
      render: () => <Input />,
    },
    {
      title: "Unit Price",
      dataIndex: "unitPrice",
      key: "unitPrice",
      width: 95,
      align: "center",
      render: () => <Input />,
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      width: 100,
      align: "center",
      render: (text) => <Input value={text} disabled />,
    },
  ];

  const data = [{ key: "1", total: 123.45 }];

  const dataDescription = [
    { key: "1" },
    { key: "2" },
    { key: "3" },
   //{ key: "4" },
   // { key: "5" },
  // { key: "6" },
  ];

  const total = 123.45; // Replace with actual total value

  return (
    <div className="wrapper">
      <div className="invoice-form-container">
        <h3 style={{textAlign:"center"}}>CASH MEMO</h3>
        <Table
          className="firstTable"
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
        />

        <div className="input-fields">
          <Row gutter={16} justify="space-between">
            <Col span={24}>
              <label>Retailer Name :</label>
              <Input placeholder="Enter Retailer Name" />
            </Col>
          </Row>
          <Row gutter={16} justify="space-between">
            <Col span={24}>
              <label>Sold To :</label>
              <Input defaultValue="AKSHARTH SOLUTIONS PVT LTD" />
            </Col>
          </Row>
          <Row gutter={16} justify="space-between">
            <Col span={24}>
              <label>Retailer Address :</label>
              <Input defaultValue="GADARWARA" />
            </Col>
          </Row>
        </div>
        <Table
          columns={descriptionColumns}
          dataSource={dataDescription}
          bordered
          pagination={false}
          className="description-table"
        />
        <div className="summary">
          <Row gutter={16} justify="end">
            <Col span={6} style={{ textAlign: "right" }}>
              <label>Total:</label>
            </Col>
            <Col span={6}>
              <Input value={total.toFixed(2)} disabled />
            </Col>
          </Row>
          <Row gutter={16} justify="end">
            <Col span={6} style={{ textAlign: "right" }}>
              <label>Advance:</label>
            </Col>
            <Col span={6}>
              <Input />
            </Col>
          </Row>
          <Row gutter={16} justify="end">
            <Col span={6} style={{ textAlign: "right" }}>
              <label>Due:</label>
            </Col>
            <Col span={6}>
              <Input />
            </Col>
          </Row>
        </div>
        <div className="signature">
          <h4>Retailer Signature</h4>
        </div>
     </div>
    </div>
  );
};

export default InvoiceFrom;
