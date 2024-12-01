import person from "../assets/Our Trusted Partners.svg";
import PartnerCircle from "./PartnerCircle";
import partner from "../assets/Partner.svg";
import partner2 from "../assets/Partner2.svg";
import partner3 from "../assets/Partner3.svg";
import partner4 from "../assets/Partner4.svg";
import partner5 from "../assets/Partner5.svg";
import partner6 from "../assets/Partner6.svg";
import partner7 from "../assets/Partner7.svg";
const Trust = () => {
  return (
    <div className="flex flex-col gap-14 mt-40 w-full ">
      <div className="flex flex-col gap-3 items-center">
        <h3 className="uppercase bg-gradient-to-r from-[#0CBAF1] to-[#E95CE9] bg-clip-text text-transparent tracking-[4px] font-medium">
          Our Trusted Partners
        </h3>
        <h1 className="break-words text-5xl font-semibold">
          Discover the Companies We Work With
        </h1>
      </div>
      <div className="relative w-full flex justify-center">
        <img src={person} />
        <PartnerCircle imgSrc={partner} className="top-1/2 left-48 z-10" />
        <PartnerCircle
          imgSrc={partner2}
          className="top-1/4 left-[265px] z-10 !px-[17px]"
        />
        <PartnerCircle imgSrc={partner3} className="top-[9%] left-[30%] z-10" />
        <PartnerCircle
          imgSrc={partner4}
          className="top-[2%] left-[45.5%] z-10 !px-[17px]"
        />
        <PartnerCircle
          imgSrc={partner5}
          className="top-[11%] right-[30%] z-10 !px-[17px]"
        />
        <PartnerCircle
          imgSrc={partner6}
          className="top-1/4 right-[20.2%] z-10 !px-[17px]"
        />
        <PartnerCircle
          imgSrc={partner7}
          className="top-1/2 right-[15.2%] z-10 !px-[17px]"
        />
      </div>
    </div>
  );
};
export default Trust;
