import React from 'react';
import { useLocation } from 'react-router-dom';
import './Invoice.css';

const Invoice = () => {
  const location = useLocation();
  const billingData = location.state.billingData;

  // Calculate total amount
  const totalAmount = billingData.reduce((total, record) => total + parseFloat(record.amount), 0);

  return (
    <div className="invoice-container">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="invoice-copy">
          <h2 className="invoice-header">Billing Information</h2>
          <table className="invoice-table">
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Date</th>
                <th>Seller</th>
                <th>Buy</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {billingData.map((record, i) => (
                <tr key={record._id}>
                  <td>{i + 1}</td>
                  <td>{new Date(record.date).toLocaleDateString()}</td>
                  <td>{record.seller}</td>
                  <td>{record.purchases}</td>
                  <td>{record.amount}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="total-label">Total Amount:</td>
                <td className="total-amount">${totalAmount.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Invoice;
