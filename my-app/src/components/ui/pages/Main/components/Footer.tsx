import waves from "../assets/image 33.svg";
import twitter from "../assets/1.svg";
import facebook from "../assets/2 (1).svg";
import instagram from "../assets/3.svg";
import github from "../assets/4.svg";
import logo from "../../../../../assets/Frame 22.svg";
import location from "../assets/Location.svg";
import message from "../assets/Message.svg";
import calling from "../assets/Calling.svg";
const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center  mt-60 gap-8">
      <img src={waves} className="absolute left-0 -z-10" />
      <div className="flex flex-row justify-around w-full relative">
        <div className="flex flex-col gap-28 items-start ">
          <img src={logo} />
          <div className="flex flex-row gap-5">
            <img src={twitter} />
            <img src={facebook} />
            <img src={instagram} />
            <img src={github} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Quicklinks</h3>
          <a href="#" className="font-light">
            Home
          </a>
          <a href="#" className="font-light">
            Pricing Plan
          </a>
          <a href="#" className="font-light">
            Service
          </a>
          <a href="#" className="font-light">
            Blog
          </a>
          <a href="#" className="font-light">
            Our Team
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Support</h3>
          <a href="#" className="font-light">
            About us
          </a>
          <a href="#" className="font-light">
            Contact us
          </a>
          <a href="#" className="font-light">
            FAQ
          </a>
          <a href="#" className="font-light">
            Tems & Conditions
          </a>
          <a href="#" className="font-light">
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Need Help?</h3>
          <p className="font-light flex flex-row gap-2">
            <img src={location} />
            Tanjung Sari Street no.48, Pontianak City
          </p>
          <p className="font-light flex flex-row gap-2">
            <img src={message} />
            Support@VRNas.com
          </p>
          <p className="font-light flex flex-row gap-2">
            <img src={calling} />
            +123 456 7890
          </p>
        </div>
      </div>
      <div className="border-gradient w-full !border-[0.5px]"></div>
      <p className="font-light -mb-16">© Copyright 2023, All Rights Reserved</p>
    </div>
  );
};
export default Footer;
