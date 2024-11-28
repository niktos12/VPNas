import { Button } from "@/components/ui/button";
import bg from "../assets/BG (1).svg";
import icon from "../assets/Icon.svg";
const Pricing = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-3 mt-[100px] items-start">
        <h3 className="bg-gradient-to-r from-[#0CBAF1] to-[#E95CE9] bg-clip-text text-transparent tracking-[4px] font-medium">
          OUR PRICING
        </h3>
        <h1 className="break-words text-5xl font-semibold">
          Affordable VR Services for Everyone
        </h1>
        <p className="break-words font-light text-[#D1D1D1] max-w-[625px] mb-10">
          At VRNas, we believe that everyone should have access to the benefits
          of VR. That's why we offer a range of pricing options to meet the
          needs of any budget.
        </p>
      </div>
      <div className="bg-[#252532CF] w-full h-[587px] border-white-gradient px-6 py-8 flex flex-row gap-28 relative">
        <div className="flex flex-col gap-8  justify-center">
          <div className="flex flex-row gap-4 max-w-[640px]">
            <img src={icon} />
            <div className="flex flex-col gap-3">
              <p className="text-lg">Customizable Packages</p>
              <p className="break-words text-[#B0B0B2]">
                We understand that each project is unique, so we offer
                customizable packages to ensure that you get the services you
                need at a price that works for you. Our team will work with you
                to create a package that meets your specific goals and budget.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4 max-w-[640px]">
            <img src={icon} />
            <div className="flex flex-col gap-3">
              <p className="text-lg">Flexible Payment Options</p>
              <p className="break-words text-[#B0B0B2]">
                We offer flexible payment options to make it easy for you to get
                started with our services. We accept various payment methods,
                including credit cards, bank transfers, and PayPal, and we can
                also work with you to create a payment plan that suits your
                needs.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4 max-w-[640px]">
            <img src={icon} />
            <div className="flex flex-col gap-3">
              <p className="text-lg">Satisfaction Guarantee</p>
              <p className="break-words text-[#B0B0B2]">
                We stand behind our services and are committed to ensuring that
                you are completely satisfied with the final product. If for any
                reason you are not happy with our services, we will work with
                you to make it right or provide a full refund.
              </p>
            </div>
          </div>
        </div>
        <div className="w-px h-75% border border-[#FFFFFF2B]"></div>
        <div className="absolute px-16 py-5 bg-[#252532] flex flex-col gap-3 -bottom-12 right-72 border-gradient !border items-center justify-center">
          <div className="flex flex-col items-center gap-1">
            <p className="text-[#D1D1D1] font-medium">Start from</p>
            <h1 className="font-semibold text-6xl">$99</h1>
          </div>
          <Button
            className="uppercase bg-gradient-to-r from-[#0cbaf1] to-[#e95ce9] rounded-none h-[50px] font-bold tracking-[1.5px]"
            size={"lg"}
          >
            GET STARTED
          </Button>
          <p className="text-[#B0B0B2] text-xs">30 Days Moneyback Guarantee</p>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
