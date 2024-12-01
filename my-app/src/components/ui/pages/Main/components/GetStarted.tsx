import { Button } from "@/components/ui/button";
import video from "../assets/Video (3).svg";
const GetStarted = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 ">
      <div className="flex flex-col gap-3 items-center">
        <h3 className="bg-gradient-to-r from-[#0CBAF1] to-[#E95CE9] bg-clip-text text-transparent tracking-[4px] font-medium">
          HOW TO GET STARTED
        </h3>
        <h1 className="break-words text-5xl font-semibold">
          Bringing Your Virtual Reality Dreams to Life
        </h1>
      </div>
      <img src={video} />
      <Button
        className="uppercase bg-gradient-to-r from-[#0cbaf1] to-[#e95ce9] rounded-none h-[50px] font-bold mt-5 tracking-[1.5px]"
        size={"lg"}
      >
        GET STARTED
      </Button>
    </div>
  );
};
export default GetStarted;
