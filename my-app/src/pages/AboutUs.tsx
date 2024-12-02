import Header from "@/components/ui/Header";
import withTransition from "@/components/withTransition";
import Footer from "@/components/ui/Footer";
import Cards from "@/components/Cards";
import ChooseUs from "@/components/ChooseUs";
import Subscribe from "@/components/Subscribe";
import Trust from "@/components/Trust";
import AnimateOnScroll from "@/components/AnimateOnScroll";
const AboutUs = () => {
  return (
    <div className=" flex flex-col items-center container justify-center">
      <Header current="about" />
      <AnimateOnScroll>
        <Cards />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ChooseUs />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Trust />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Subscribe />
      </AnimateOnScroll>

      <Footer />
    </div>
  );
};
export default withTransition(AboutUs);
