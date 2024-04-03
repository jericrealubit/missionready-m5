import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ShoppingCartIcon,
  CircleStackIcon,
  HeartIcon,
  UserIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex flex-row justify-between text-slate-500 cursor-pointer">
          {/* Your navigation links */}
          <li className="hover:text-blue-500">Trade Me</li>
          <li className="hover:text-blue-500">Trade Me Insurance</li>
          <li className="hover:text-blue-500">Holiday Houses</li>
          <li className="hover:text-blue-500">FindSomeone</li>
          <li className="hover:text-blue-500">MotorWeb</li>
          <li className="hover:text-blue-500">homes.co.nz</li>
        </ul>
        <div className="flex flex-row justify-between pt-8 pb-8">
          <div className="flex flex-row justify-left w-3/5 m-auto">
            <div>
              <Image
                src="/images/trade-me-logo.webp"
                width={200}
                height={200}
                className="align-middle cursor-pointer"
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
            <ul className="flex flex-row justify-between w-full cursor-pointer">
              <li className="flex flex-row hover:text-blue-500">
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="ml-2">Cart</span>
              </li>
              <li className="flex flex-row hover:text-blue-500">
                <CircleStackIcon className="h-6 w-6" />
                <span className="ml-2">My bids</span>
              </li>
              <li className="flex flex-row hover:text-blue-500">
                <HeartIcon className="h-6 w-6" />
                <span className="ml-2">Saves</span>
              </li>
              <li className="flex flex-row hover:text-blue-500">
                <PencilIcon className="h-6 w-6" />
                <span className="ml-2">List item</span>
              </li>
              <li className="flex flex-row hover:text-blue-500">
                <UserIcon className="h-6 w-6" />
                <span className="ml-2">Login</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-left p-4 bg-red-400 rounded-lg text-white font-bold cursor-pointer">
          <ul className="flex flex-row space-x-5">
            <li className="flex flex-row space-x-1 hover:text-yellow-200">
              <span>Browse Marketplace</span>{" "}
              <ChevronDownIcon className="h-6 w-6" />
            </li>
            <li className="hover:text-yellow-200">Stores</li>
            <li className="hover:text-yellow-200">Deals</li>
            <li className="hover:text-yellow-200">Book a courier</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
