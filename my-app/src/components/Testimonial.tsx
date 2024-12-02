import person from "../pages/assets/Image4.svg";
import comment from "../pages/assets/comment.svg";
import comment2 from "../pages/assets/comment2.svg";
import comment3 from "../pages/assets/comment3.svg";
import comment4 from "../pages/assets/comment4.svg";
import comment5 from "../pages/assets/comment5.svg";
import comment6 from "../pages/assets/comment6.svg";
import CommentPopover from "./CommentPopover";
const Testimonial = () => {
  return (
    <div className="relative flex flex-col items-center justify-center my-28 h-[1247px] w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[1247px] h-[1247px] rounded-full border border-gray-700 flex flex-col items-center gap-3">
          <h3 className="mt-[120px] bg-gradient-to-r from-[#0CBAF1] to-[#E95CE9] bg-clip-text text-transparent tracking-[4px] font-medium">
            TESTIMONIAL
          </h3>
          <h1 className="break-words text-5xl font-semibold">
            What Our Clients Are Saying
          </h1>
        </div>
        <div className="absolute w-[1084px] h-[1084px] rounded-full border border-gray-700 -z-10"></div>
        <div className="absolute w-[899px] h-[899px] rounded-full border border-gray-700 -z-10"></div>
        <div className="absolute w-[736px] h-[736px] rounded-full border border-gray-700 -z-10"></div>
        <div className="absolute -z-10 w-[560px] h-[560px] rounded-full border border-gray-700 "></div>
      </div>
      <CommentPopover
        imageUrl={comment}
        description="The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs."
        employeeName="Aldo Boy"
        employeePosition="3D Designer"
        classname="right-[36%] top-[21%] image-transition"
      />
      <CommentPopover
        imageUrl={comment2}
        description="The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs."
        employeeName="Robert Fox"
        employeePosition="CEO Anono"
        classname="left-[7%] top-[30%] image-transition"
      />
      <CommentPopover
        imageUrl={comment3}
        description="The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs."
        employeeName="Robert Fox"
        employeePosition="CEO Anono"
        classname="right-[16.5%] top-[45%] image-transition"
      />
      <CommentPopover
        imageUrl={comment4}
        description="The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs."
        employeeName="Robert Fox"
        employeePosition="CEO Anono"
        classname="right-[48%] bottom-1/4 image-transition"
      />
      <CommentPopover
        imageUrl={comment5}
        description="The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs."
        employeeName="Robert Fox"
        employeePosition="CEO Anono"
        classname="right-80 bottom-[7%] image-transition"
      />
      <CommentPopover
        imageUrl={comment6}
        description="The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs."
        employeeName="Robert Fox"
        employeePosition="CEO Anono"
        classname="left-56 bottom-[24%] image-transition"
      />

      {/* <img
        src={comment}
        className="absolute right-[29%] -top-2 p-2 bg-gradient-to-r from-slate-50 to-slate-600 hover:bg-gradient-to-r hover:from-[#0CBAF1] hover:to-[#E95CE9] z-30 cursor-pointer rounded-full"
      /> */}
      <img src={person} className="ml-20 mt-[70px]" />
    </div>
  );
};
export default Testimonial;
