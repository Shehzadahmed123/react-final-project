import React from 'react';

function OrderHistory() {
  const orders = [
    { id: 1, date: '2024-09-25', total: 120 },
    { id: 2, date: '2024-09-27', total: 45 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      <div>
        {orders.map((order) => (
          <div key={order.id} className="border p-4 mb-2">
            <p>Order ID: {order.id}</p>
            <p>Date: {order.date}</p>
            <p>Total: {order.total} USD</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
