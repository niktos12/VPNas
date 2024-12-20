import Header from "../../Header";
import Light from "./assets/Light.svg";
import Person from "./assets/Image.svg";
import Clients from "./assets/Happy Client.svg";
import Lines from "../../../../assets/Assets.svg";
import Line from "./assets/Element.svg";
import Video from "./assets/Video.svg";
import { Button } from "../../button";
import Cards from "./components/Cards";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import ChooseUs from "./components/ChooseUs";
import GetStarted from "./components/GetStarted";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Trust from "./components/Trust";
import Subscribe from "./components/Subscribe";
import Articles from "./components/Articles";
import AnimateOnScroll from "./components/AnimateOnScroll";
import waves from "../../../../assets/Clip path group.svg";
import withTransition from "./components/withTransition";
const Main = () => {
  return (
    <div className="flex flex-col items-center container ">
      <img src={waves} className="absolute -z-10 right-0 top-0" />
      <Header current="home"/>
      <img
        className="absolute -z-10 overflow-hidden -left-0 top-[248px] pointer-events-none"
        src={Lines}
      />
      <img
        src={Light}
        className="absolute -top-10 -z-10 -right-0 overflow-hidden  pointer-events-none"
      />
      <AnimateOnScroll>
        <div className="flex flex-row relative justify-between">
          <div className="flex flex-col gap-8 items-start">
            <h1 className="capitalize font-semibold text-[64px] leading-[83px]">
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
          <div className="">
            <img src={Person} className="" />
          </div>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Cards />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <AboutUs />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Service />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ChooseUs />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <GetStarted />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Testimonial />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Pricing />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Trust />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Articles />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Subscribe />
      </AnimateOnScroll>
      <Footer />
    </div>
  );
};

export default withTransition(Main);
