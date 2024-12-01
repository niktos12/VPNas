import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import VR from "../assets/14.svg";
import arrow from "../assets/next 1.svg";
import Lines from "../../../../../assets/Assets.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import slide from "../assets/swiper.svg";
import 'swiper/css'
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Articles = () => {
  const cards = Array.from({ length: 20 }, (_, index) => ({ id: index }));
  return (
    <div className="flex flex-col gap-3 w-full mb-36 ">
      {" "}
      <h3 className="uppercase bg-gradient-to-r from-[#0CBAF1] to-[#E95CE9] bg-clip-text text-transparent tracking-[4px] font-medium">
        Our articles
      </h3>
      <div className="justify-between flex flex-row items-center mb-[60px]">
        <h1 className="break-words text-5xl font-semibold">
          Stay Up-to-Date with Our VR Insights
        </h1>
        <Button
          size={"lg"}
          className="uppercase h-[50px] tracking-[1.5px] bg-[#25253299] px-9 py-3 text-sm font-bold !border border-gradient rounded-none text-white"
        >
          see all
        </Button>
      </div>
      <div className="flex flex-row relative w-full items-center mb-10 justify-around">
        <img src={Lines} className="absolute -left-[18%] -bottom-[300px]" />
        <div className="flex flex-col">
          <p className="text-[28px] font-semibold leading-[36px] break-words mb-8">
            Popular Article
          </p>
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={true}
            className="!m-0 max-w-[636px]"
          >
            <SwiperSlide className="relative">
              <img src={slide} />
              <div className="absolute z-10 bottom-6 left-6 flex flex-row items-center gap-6">
                <div className="flex flex-col items-start max-w-[509px] gap-3">
                  <p className="rounded-2xl px-2 py-1 text-white bg-[#FFFFFF4D]">
                    VR Games
                  </p>
                  <h1 className="text-[32px] font-semibold leading-[41px] break-words">
                    Entertainment Goes Virtual: The Rise of VR Gaming
                  </h1>
                </div>
                <Button className="h-[50px] w-[50px] bg-[#25253299] p-4 !border border-gradient rounded-none -mb-8">
                  <img src={arrow} />
                </Button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img src={slide} />
              <div className="absolute z-10 bottom-6 left-6 flex flex-row items-center gap-6">
                <div className="flex flex-col items-start max-w-[509px] gap-3">
                  <p className="rounded-2xl px-2 py-1 text-white bg-[#FFFFFF4D]">
                    VR Games
                  </p>
                  <h1 className="text-[32px] font-semibold leading-[41px] break-words">
                    Entertainment Goes Virtual: The Rise of VR Gaming
                  </h1>
                </div>
                <Button className="h-[50px] w-[50px] bg-[#25253299] p-4 !border border-gradient rounded-none -mb-8">
                  <img src={arrow} />
                </Button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img src={slide} />
              <div className="absolute z-10 bottom-6 left-6 flex flex-row items-center gap-6">
                <div className="flex flex-col items-start max-w-[509px] gap-3">
                  <p className="rounded-2xl px-2 py-1 text-white bg-[#FFFFFF4D]">
                    VR Games
                  </p>
                  <h1 className="text-[32px] font-semibold leading-[41px] break-words">
                    Entertainment Goes Virtual: The Rise of VR Gaming
                  </h1>
                </div>
                <Button className="h-[50px] w-[50px] bg-[#25253299] p-4 !border border-gradient rounded-none -mb-8">
                  <img src={arrow} />
                </Button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img src={slide} />
              <div className="absolute z-10 bottom-6 left-6 flex flex-row items-center gap-6">
                <div className="flex flex-col items-start max-w-[509px] gap-3">
                  <p className="rounded-2xl px-2 py-1 text-white bg-[#FFFFFF4D]">
                    VR Games
                  </p>
                  <h1 className="text-[32px] font-semibold leading-[41px] break-words">
                    Entertainment Goes Virtual: The Rise of VR Gaming
                  </h1>
                </div>
                <Button className="h-[50px] w-[50px] bg-[#25253299] p-4 !border border-gradient rounded-none -mb-8">
                  <img src={arrow} />
                </Button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <ScrollArea className=" h-[605px] flex flex-col gap-3 pt-8 px-16 bg-[#252532]">
          <p className="text-[28px] font-semibold leading-[36px] break-words mb-8">
            Recent Article
          </p>
          {cards.map((card) => (
            <div className="flex flex-col gap-3 max-w-[513px]" key={card.id}>
              <div className="flex flex-row gap-5 mb-8 items-center">
                <img src={VR} />
                <div className="flex flex-col gap-2 items-start">
                  <p className="px-3 py-1 bg-[#FFFFFF4D] font-medium text-sm rounded-xl">
                    VR Education
                  </p>
                  <p className="text-lg break-words">
                    The Future of Education: How VR is Revolutionizing the
                    Classroom
                  </p>
                </div>
                <Button className="h-[40px] bg-[#25253299] p-4 !border border-gradient rounded-none">
                  <img src={arrow} />
                </Button>
              </div>
              <div className="w-full border border-[#FFFFFF26] mb-8"></div>
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
};
export default Articles;
