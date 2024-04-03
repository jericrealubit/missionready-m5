import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-slate-500">
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
        </div>
        <div className="w-2/5">
          <ul className="flex flex-row justify-between w-full cursor-pointer">
            <li className="flex flex-row hover:text-blue-500">
              <span className="ml-2">Cart</span>
            </li>
            <li className="flex flex-row hover:text-blue-500">
              <span className="ml-2">My bids</span>
            </li>
            <li className="flex flex-row hover:text-blue-500">
              <span className="ml-2">Saves</span>
            </li>
            <li className="flex flex-row hover:text-blue-500">
              <span className="ml-2">List item</span>
            </li>
            <li className="flex flex-row hover:text-blue-500">
              <span className="ml-2">Login</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full">
        <ul>
          <li className="font-semibold">Marketplace</li>
          <li>Latest deals</li>
          <li>Stores</li>
          <li>Closing soon</li>
          <li>$1 reserve</li>
        </ul>
        <ul>
          <li className="font-medium">Jobs</li>
          <li>Browse categories</li>
          <li>Careers advice</li>
          <li>JobSmart</li>
          <li>Advertisers advice</li>
        </ul>
        <ul>
          <li className="font-medium">Motors</li>
          <li>Brose all cars</li>
          <li>Other vehicles</li>
          <li>Buying & selling</li>
          <li>Dealer news & info</li>
        </ul>
        <ul>
          <li className="font-medium">Property</li>
          <li>International property</li>
          <li>News & guides</li>
          <li>Homes.co.nz</li>
          <li>Dealer news & info</li>
        </ul>
        <ul>
          <li className="font-medium">Services</li>
          <li>Trades</li>
          <li>Domestic services</li>
          <li>Events & entertainment</li>
          <li>Health & wellbeing</li>
        </ul>
        <ul>
          <li className="font-medium">Community</li>
          <li>Help</li>
          <li>Announcements</li>
          <li>Trust & safety</li>
          <li>Saller information</li>
        </ul>
      </div>
      <div className="flex flex-row w-full justify-between mt-10 mb-10">
        <div>© 2024 Trade Me Limited</div>
        <div>
          <ul className="flex flex-row">
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
        <div className="flex flex-row">
          <div>
            <Image
              src="/images/icons/facebook-icon.jpg"
              width={100}
              height={100}
            />
          </div>
          <div>twitter ling</div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
