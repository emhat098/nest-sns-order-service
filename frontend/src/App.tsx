/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Connect to WebSocket server

function Orders() {
  const [orders, setOrders] = useState<any>([]);

  console.log({orders});

  useEffect(() => {
    socket.on('newOrder', (order) => {
      setOrders((prevOrders: any) => [...prevOrders, order]);
    });

    return () => {
      socket.off('newOrder');
    };
  }, []);

  return (
    <div>
      <h1>Real-Time Orders</h1>
      <ul>
        {orders.map((order: any) => (
          <li key={order.orderId}>
            Order ID: {order.orderId}, User ID: {order.userId}, Time: {order.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;