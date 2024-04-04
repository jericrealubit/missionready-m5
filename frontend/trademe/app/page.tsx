"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import {
  EyeIcon,
  HeartIcon,
  ShareIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

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
    id: number;
    name: string;
    buynow: string;
    shipping: string;
  };

  return (
    <main>
      <div className="flex flex-row w-full justify-between ">
        <div>
          <Image
            src="/images/products/thumb.png"
            width={100}
            height={100}
            alt="Product-thumb"
          />
        </div>
        <div>
          {" "}
          <Image
            src="/images/products/main-product-view.png"
            width={600}
            height={600}
            alt="main-product-view"
          />
        </div>
        <div className="w-96">
          <div>
            <h2>Madeeleine Chaise Sofa - Heritage (RRP: $3499)</h2>
          </div>
          <div className="flex flex-row space-x-2 text-sm mt-5">
            <EyeIcon className="h-5 w-5 text-slate-500" />
            <div>197 Views</div>
            <HeartIcon className="h-5 w-5 text-slate-500" />
            <div>13 Saves</div>
            <ShareIcon className="h-5 w-5 text-slate-500" />
            <div>Share</div>
          </div>
          <div>
            <div className="flex flex-row justify-between mt-8">
              <div className="text-slate-500 text-sm">Buy now</div>
              <div className="cursor-pointer hover:text-blue-500 flex flex-row space-x-1 font-bold text-blue-400">
                <ShoppingCartIcon className="h-5 w-5" />
                <div>Add to cart</div>
              </div>
            </div>
            <h2>$3,100</h2>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <hr />
      <div>
        <h3>Product Info</h3>
      </div>
      <ul>
        {orders.length > 0 &&
          orders.map((order: Order) => (
            <li key={order.id}>
              {order.id} - {order.name} - {order.buynow} - {order.shipping}
            </li>
          ))}
      </ul>
    </main>
  );
}
