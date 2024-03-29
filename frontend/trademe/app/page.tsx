"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [orders, setOrders] = useState([]);
  const url = "http://localhost:4000/api";

  const getData = async () => {
    await axios
      .get(url)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  type Order = {
    data: string;
    myid: number;
  };

  return (
    <main>
      <h1>Hello jeric</h1>
      <h2>world</h2>
      <ul>
        {orders.length > 0 &&
          orders.map((order: Order) => (
            <li key={order.myid}>
              {order.myid} - {order.data}
            </li>
          ))}
      </ul>
    </main>
  );
}
