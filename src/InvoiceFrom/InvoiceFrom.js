import React from "react";
import { Input, Table, Row, Col, DatePicker, Form } from "antd";
import "./InvoiceFrom.css";

const InvoiceFrom = () => {
  const columns = [
    {
      title: "SL No:",
      dataIndex: "slno",
      key: "slno",
      align: "center",
      width: 20, // Adjust the width here
      render: () => (
        <div style={{ display: "flex", alignItems: "center" }}>
         <Form.Item style={{ marginBottom: 0 }}>
          <Input className="slno-input" />
        </Form.Item>
        </div>
      ),
    },
    {
      title: "Date:",
      dataIndex: "date",
      key: "date",
      align: "center",
      width: 200,
      render: () => (
        <Row gutter={8}>
          <Col span={24}>
          <Form.Item style={{ marginBottom: 0 }}>
          <DatePicker className="date-picker" style={{ width: "100%" }} />
        </Form.Item>
          </Col>
        </Row>
      ),
    },
  ];

  const descriptionColumns = [
    {
      title: "SLNo:",
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
   // { key: "2" },
   // { key: "3" },
  ];

  const total = 123.45; // Replace with actual total value

  return (
    <div className="wrapper">
      <div className="invoice-form-container">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="invoice-box">
            <h3>CASH MEMO</h3>
            <Form>
              <Table
                className="firstTable"
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered
              />
            </Form>
            <div className="input-fields">
              <Form layout="inline" className="horizontal-form">
                <Form.Item label="Retailer Name:" className="horizontal-form-item">
                  <Input placeholder="Enter Retailer Name" />
                </Form.Item>
                <Form.Item label="Sold To:" className="horizontal-form-item">
                  <Input defaultValue="AKSHARTH SOLUTIONS PVT LTD" />
                </Form.Item>
                <Form.Item label="Retailer Address:" className="horizontal-form-item">
                  <Input defaultValue="GADARWARA" />
                </Form.Item>
              </Form>
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
        ))}
      </div>
    </div>
  );
};

export default InvoiceFrom;
