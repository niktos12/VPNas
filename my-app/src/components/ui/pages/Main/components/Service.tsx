import React, { useState } from "react";
import CardVR from "./CardVR";
import VRDev from "../assets/software.svg";
import Light from "../assets/g4149.svg";
import Comment from "../assets/g1944.svg";
import Gamepad from "../assets/g4041.svg";
import Calendar from "../assets/g3720.svg";
import Masks from "../assets/g3977.svg";

const Service: React.FC = () => {
  return (
    <section className=" text-white py-16 px-8 mt-32 ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row gap-20 mb-12 items-center">
          <div className="flex flex-col gap-4 items-start">
            <h2 className="uppercase bg-gradient-to-r from-[#0CBAF1] to-[#E95CE9] bg-clip-text text-transparent tracking-[4px] font-medium">
              Our Service
            </h2>
            <h1 className="text-5xl font-semibold leading-[58px]">Our Service</h1>
          </div>

          <p className="mt-4 text-[#D1D1D1] max-w-[625px] mx-auto font-light">
            We use the latest VR hardware and software to create high-quality VR
            experiences that are accessible and affordable. Our goal is to
            provide exceptional customer service and support, and our team is
            always available to answer any questions and address any concerns
            you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-8">
            <CardVR
              imageSrc={VRDev}
              title="VR Development"
              description="From concept to creation, our team of VR developers will bring your vision to life."
            />
            <CardVR
              imageSrc={Gamepad}
              title="VR Games"
              description="We offer a wide selection of VR games that are suitable for players of all ages and skill levels."
            />
          </div>
          <div className="flex flex-col gap-8 mt-[57px]">
            <CardVR
              imageSrc={Light}
              title="VR Design"
              description="Our talented VR designers will create immersive and engaging environments that will captivate your audience."
            />
            <CardVR
              imageSrc={Calendar}
              title="VR Events"
              description="Make your next event unforgettable with our VR event services."
            />
          </div>
          <div className="flex flex-col gap-8 mt-[135px]">
            <CardVR
              imageSrc={Comment}
              title="VR Consulting"
              description="Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations."
            />

            <CardVR
              imageSrc={Masks}
              title="VR Entertainment"
              description="reate a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience to make it happen."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
