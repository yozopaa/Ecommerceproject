import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';  

const Sidebar = () => {
  return (
    <div className="navbar">
      <h2 className="logo">Admin Panel</h2>
      <ul className="menu">
        <li className="menuItem">
          <Link to="/dashboard" className="link">Dashboard</Link>
        </li>
        <li className="menuItem">
          <Link to="/data" className="link">Products</Link>
        </li>
        <li className="menuItem">
          <Link to="/orders" className="link">Orders</Link>
        </li>
        <li className="menuItem">
          <Link to="/users" className="link">Users</Link>
        </li>
      </ul>
    </div>
  );
};

const Dashboard = () => {

  const statistics = [
    { title: "Total Products", value: 120 },
    { title: "Total Orders", value: 450 },
    { title: "Total Users", value: 350 },
    { title: "Pending Orders", value: 30 },
  ];

  const orders = [
    { id: 1, orderId: "ORD1", customer: "ahmed kamal", status: "Shipped", amount: "$45.00" },
    { id: 2, orderId: "ORD2", customer: "oussama moat", status: "Pending", amount: "$28.00" },
    { id: 3, orderId: "ORD3", customer: "yassine mahmoud", status: "Delivered", amount: "$110.00" },
    { id: 4, orderId: "ORD4", customer: "reda kimichi", status: "Shipped", amount: "$190.00" },
  ];

  return (
    <div className="container">
      <Sidebar />
      <div className="mainContent">
        <h1>Admin Dashboard</h1>

        <div className="statsContainer">
          {statistics.map((stat, index) => (
            <div className="statCard" key={index}>
              <h3>{stat.title}</h3>
              <p className="statValue">{stat.value}</p>
            </div>
          ))}
        </div>

        <h2>Recent Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th className="tableHeader">Order ID</th>
              <th className="tableHeader">Customer</th>
              <th className="tableHeader">Status</th>
              <th className="tableHeader">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="tableCell">{order.orderId}</td>
                <td className="tableCell">{order.customer}</td>
                <td className="tableCell">{order.status}</td>
                <td className="tableCell">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
