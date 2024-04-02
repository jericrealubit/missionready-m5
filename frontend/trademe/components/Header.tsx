import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex flex-row justify-between text-slate-500">
          {/* Your navigation links */}
          <li>Trade Me</li>
          <li>Trade Me Insurance</li>
          <li>Holiday Houses</li>
          <li>FindSomeone</li>
          <li>MotorWeb</li>
          <li>homes.co.nz</li>
        </ul>
        <div className="flex flex-row justify-between pt-8 pb-8">
          <div className="flex flex-row justify-left w-3/5 m-auto">
            <div>
              <Image
                src="/images/trade-me-logo.webp"
                width={200}
                height={200}
                className="align-middle5"
                alt="logo"
              />
            </div>
            <div className="flex flex-row ml-14 pl-3 border-2 border-slate-200 rounded-full w-80">
              <MagnifyingGlassIcon className="h-6 w-6 mt-3" />
              <input
                type="text"
                placeholder="Search all of Trade Me"
                className="pl-3 outline-none border-none"
              />
            </div>
          </div>
          <div className="w-2/5">
            <ul className="flex flex-row justify-between w-full">
              <li className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>{" "}
                <span className="ml-2">Cart</span>
              </li>
              <li className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
                <span className="ml-2">My bids</span>
              </li>
              <li className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <span className="ml-2">Saves</span>
              </li>
              <li className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
                <span className="ml-2">List item</span>
              </li>
              <li className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <span className="ml-2">Login</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-left p-4 bg-red-400 rounded-lg text-white font-bold">
          <ul className="flex flex-row space-x-5">
            <li className="flex flex-row space-x-1">
              <span>Browse Marketplace</span>{" "}
              <ChevronDownIcon className="h-6 w-6" />
            </li>
            <li>Stores</li>
            <li>Deals</li>
            <li>Book a courier</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
