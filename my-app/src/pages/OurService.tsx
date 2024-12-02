import Header from "@/components/ui/Header";
import withTransition from "@/components/withTransition";
import Footer from "@/components/ui/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Service from "@/components/Service";
import Pricing from "@/components/Pricing";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
const OurService = () => {
  return (
    <div className=" flex flex-col items-center container justify-center">
      <Header current="service" />
      <AnimateOnScroll>
        <Service />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Pricing />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Testimonial />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Subscribe />
      </AnimateOnScroll>
      <Footer />
    </div>
  );
};
export default withTransition(OurService);
