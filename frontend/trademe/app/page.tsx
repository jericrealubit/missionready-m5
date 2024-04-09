"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import {
  EyeIcon,
  HeartIcon,
  ShareIcon,
  ShoppingCartIcon,
  TruckIcon,
  Bars3CenterLeftIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [products, setProducts] = useState([]);
  const url = "http://localhost:4000/api/1";
  console.log(url);
  const getData = async () => {
    await axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  type Product = {
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
            <h2>{products.name}</h2>
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
            <h2>${products.price}</h2>
          </div>
          <div className="text-slate-500 text-sm mt-5 mb-8">
            <div className="flex flex-row space-x-2 mt-2 mb-2">
              <TruckIcon className="h-5 w-5" />
              <div>{products.shipping}</div>
            </div>
            <div className="flex flex-row space-x-4">
              <div>
                <Button className="w-48">Buy now</Button>
              </div>
              <div>
                <Button
                  className="w-48 text-blue-500 border-blue-500"
                  variant="outline"
                >
                  Secondary button
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-slate-200 px-5 py-3 rounded-md">
            <div className="font-bold">Bid closes: Mon 25th Mar, 11:00pm</div>
            <div className="text-sm">4 days, 22 hours, 21 minutes</div>
          </div>
          <div className="mt-8 mb-8 text-slate-500 ">
            <div className="text-sm">Current bid</div>
            <div className="flex flex-row justify-between">
              <div className="text-2xl text-black font-bold">$1,500</div>
              <div className="text-sm font-bold">
                <div className="text-black ">Your bid: $1,400</div>
                <div className="text-blue-400 underline">Bid history (1)</div>
              </div>
            </div>
            <div className="text-xs">Reserve not met</div>
          </div>
          <div>
            <Button className="w-full">Primary button</Button>
          </div>
          <div className="flex flex-row mt-8 mb-8 space-x-5">
            <div>
              {" "}
              <Image
                src="/images/twice-logo.png"
                width={100}
                height={100}
                alt="twice-logo"
              />
            </div>
            <div>
              <div className="flex flex-row justify-between">
                <div className="text-sm">Twice</div>
                <div>
                  <HeartIcon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-row space-x-2 pt-2 pb-2">
                <div className="flex flex-row text-yellow-400">
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                </div>
                <div>(19,162)</div>
              </div>
              <div className="text-xs flex flex-row space-x-3">
                <div className="p-1 bg-green-100 rounded">Address Verified</div>
                <div className="p-1 bg-slate-100 rounded">In Trade</div>
              </div>
              <div className="text-xs text-slate-500">
                Located in Auckland City, Auckland
              </div>
            </div>
          </div>
          <div>
            <Button className="w-full border-black" variant="outline">
              Visit shop
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-10">
        <div>
          <div>
            <h2>Product Info</h2>
          </div>
          <div className="ml-10">
            <div className=" mt-10 flex flex-row space-x-2">
              <Bars3CenterLeftIcon className="h-8 w-8" />
              <div className=" text-2xl">Description</div>
            </div>
            <div className="flex flex-row mt-5 space-x-20">
              <div>
                Condition: <span className="font-bold">Used</span>
              </div>
              <div className="space-x-2">
                Colour:{" "}
                <span className="rounded-full bg-gray-400 pr-4 space-x-2">
                  &nbsp;
                </span>
                <span className="font-bold">Grey</span>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="w-96">
          <h3 className="font-bold">Saved products (10)</h3>
          <Image
            src="/images/products/saved-product.png"
            alt="save-product"
            width={400}
            height={400}
          />
        </div>
      </div>
      <ul>
        {products.price}
        {/* {products.length > 0 &&
          products.map((product: Product) => (
            <li key={product.id}>
              {product.id} - {product.name} - {product.price} -{" "}
              {product.shipping}
            </li>
          ))} */}
      </ul>
    </main>
  );
}
