import Header from "../../Header";
import Light from "./assets/Light.svg";
import Person from "./assets/Image.svg";
import Clients from "./assets/Happy Client.svg";
import Lines from "../../../../assets/Assets.svg";
import Line from "./assets/Element.svg";
import Video from "./assets/Video.svg";
import { Button } from "../../button";
import Cards from "./components/Cards";
const Main = () => {
  return (
    <div className="flex flex-col items-center container">
      <Header />
      <img
        className="absolute -z-10 overflow-hidden -left-0 top-[248px]"
        src={Lines}
      />
      <div className="flex flex-row relative gap-32">
        <div className="flex flex-col gap-8 items-start">
          <h1 className="capitalize font-semibold text-[64px]">
            Immerse Yourself
            <br /> in Virtual Reality
          </h1>
          <p className="text-[#D1D1D1]">
            Experience Unforgettable Events in VR. Bring your events to
            <br /> life like never before with our VR services
          </p>
          <Button
            className="uppercase bg-gradient-to-r from-[#0cbaf1] to-[#e95ce9] rounded-none h-[50px] w-[206px]"
            size={"lg"}
          >
            Discover more
          </Button>
          <div className="flex flex-row mt-16 gap-4 items-center">
            <img src={Clients} />
            <div className="flex flex-row relative">
              <img className="absolute bottom-0 -left-2" src={Line} />
              <p className="font-light">
                <span className="font-semibold">32k+ </span>
                Happy Client
              </p>
            </div>
            <img src={Video} className="ml-16" />
          </div>
        </div>
        <div className="relative">
          <img src={Person} className="" />
          <img
            src={Light}
            className="absolute top-0 -z-10 -right-1/4 overflow-hidden scale-150"
          />
        </div>
      </div>
      <Cards/>
    </div>
  );
};
export default Main;
