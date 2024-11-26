import person from "../assets/Image4.svg";
const Testimonial = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mt-[290px] w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[1247px] h-[1247px] rounded-full border border-gray-700 flex flex-col items-center">
          <h1 className="mt-[120px] bg-gradient-to-r from-[#0CBAF1] to-[#E95CE9] bg-clip-text text-transparent tracking-[4px] font-medium">
            TESTIMONIAL
          </h1>
        </div>
        <div className="absolute w-[1084px] h-[1084px] rounded-full border border-gray-700"></div>
        <div className="absolute w-[899px] h-[899px] rounded-full border border-gray-700"></div>
        <div className="absolute w-[736px] h-[736px] rounded-full border border-gray-700"></div>
        <div className="absolute -z-10 w-[560px] h-[560px] rounded-full border"></div>
      </div>
      <img src={person} className="ml-20 mt-[70px]" />
    </div>
  );
};
export default Testimonial;
