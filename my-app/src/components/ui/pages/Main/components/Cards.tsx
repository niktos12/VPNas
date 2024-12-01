import VR from "../assets/Title & Desc.svg";
import Cube from "../assets/Title & Desc (1).svg";
import Person from "../assets/Title & Desc (2).svg";
const Cards = () => {
  return (
    <div className="flex flex-row gap-[50px] px-16 py-12 bg-[#252532] border border-white-gradient ">
      <div className="flex flex-col gap-[42px] items-start">
        <img src={VR} />
        <div className="flex flex-col gap-3">
          <h3 className="text-xl">Expertise</h3>
          <p className="text-sm text-[#B0B0B2]">
            Our team consists of experienced VR developers, designers, and
            technicians who have a passion for VR and a commitment to delivering
            quality work and give the best service
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[42px] items-start">
        <img src={Cube} />
        <div className="flex flex-col gap-3">
          <h3 className="text-xl">Customization</h3>
          <p className="text-sm text-[#B0B0B2]">
            Every client is unique, and we believe every VR experience should be
            too. We'll work with you to create a customized solution that meets
            your specific needs and goals
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[42px] items-start">
        <img src={Person} />
        <div className="flex flex-col gap-3">
          <h3 className="text-xl">Service</h3>
          <p className="text-sm text-[#B0B0B2]">
            We believe in providing exceptional customer service, from initial
            consultation to final delivery. Our goal is to ensure you're
            satisfied with every aspect of your VR experience.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Cards;
