import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Person from "../pages/assets/Image2.svg";
import bg from "../pages/assets/Image (1).svg";
import video from "../pages/assets/Video (2).svg";

const ChooseUs = () => {
  return (
    <div className="flex flex-row gap-20 items-center mt-20 mb-40 justify-center">
      <div className="flex flex-col gap-3 items-start max-w-[541.5px]">
        <h3 className="bg-gradient-to-r from-[#0CBAF1] to-[#E95CE9] bg-clip-text text-transparent tracking-[4px] font-medium">
          WHY CHOOSE US
        </h3>
        <h1 className="text-5xl font-semibold leading-[58px] break-words">
          Why Choose Us for Your VR Needs
        </h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className=" text-xl">
              Passionate and Experienced Team
            </AccordionTrigger>
            <AccordionContent className="">
              We are proud of our team of VR experts who are passionate about VR
              and dedicated to delivering the highest quality work. Our team
              consists of experienced VR developers, designers, and technicians
              who have a proven track record of creating immersive and engaging
              VR experiences.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="">
            <AccordionTrigger className="text-xl">
              Customized Solutions
            </AccordionTrigger>
            <AccordionContent className="">
              We are proud of our team of VR experts who are passionate about VR
              and dedicated to delivering the highest quality work. Our team
              consists of experienced VR developers, designers, and technicians
              who have a proven track record of creating immersive and engaging
              VR experiences.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="">
            <AccordionTrigger className=" text-xl">
              Exceptional Customer Service
            </AccordionTrigger>
            <AccordionContent className="">
              We are proud of our team of VR experts who are passionate about VR
              and dedicated to delivering the highest quality work. Our team
              consists of experienced VR developers, designers, and technicians
              who have a proven track record of creating immersive and engaging
              VR experiences.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="relative">
        <img src={Person} />
        <img src={bg} className="absolute -z-10 bottom-0 right-24" />
        <img src={video} className="z-10 absolute -bottom-10 right-20" />
      </div>
    </div>
  );
};

export default ChooseUs;
