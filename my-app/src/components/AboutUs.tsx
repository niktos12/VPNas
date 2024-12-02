import { Button } from "@/components/ui/button";
import Person from "../pages/assets/2.svg";
import bg from '../pages/assets/Bg.svg'
import check from "../pages/assets/check-box (1).svg";
import video from "../pages/assets/Video (1).svg";
const AboutUs = () => {
  return (
    <div className="relative flex flex-row gap-20 mt-32 w-full justify-center items-center ">
      <div className="relative">
        <img src={bg} className="absolute -left-2 -z-10 bottom-0" />
        <img src={Person} />
        <img src={video} className="absolute -bottom-6 right-0" />
      </div>
      <div className="flex flex-col gap-3 items-start">
        <h2 className="uppercase bg-gradient-to-r from-[#0cbaf1] to-[#e95ce9] bg-clip-text text-transparent tracking-[4px] font-medium">
          About us
        </h2>
        <h1 className="text-5xl font-semibold">
          Bring your events to life
          <br /> like never before with
          <br /> our VR services.
        </h1>
        <p className="text-[#D1D1D1] font-light">
          VRNas is a leading provider of VR services for education,
          entertainment,
          <br /> architecture, and events. Our mission is to bring the power of
          virtual
          <br /> reality to everyone, allowing them to explore new
          <br /> worlds, learn in new ways, and experience events in a whole new
          light.
        </p>
        <div className="flex flex-col gap-[14px] mt-3">
          <div className="flex flex-row gap-3 items-center">
            <img src={check} />
            <p>Cutting-Edge Technology</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <img src={check} />
            <p>Versatile Applications</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <img src={check} />
            <p>Affordable and Accessible</p>
          </div>
        </div>
        <Button
          className="uppercase bg-gradient-to-r from-[#0cbaf1] to-[#e95ce9] rounded-none h-[50px] font-bold mt-5 tracking-[1.5px]"
          size={"lg"}
        >
          Read more
        </Button>
      </div>
    </div>
  );
};
export default AboutUs;
