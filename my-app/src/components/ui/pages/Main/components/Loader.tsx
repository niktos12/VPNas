import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../../../../assets/Frame 22.svg";
import Spinner from "./Spinner";

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed z-50 top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-11 bg-[#18181b]"
          initial="visible"
          variants={{
            hidden: {
              opacity: 0,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.1,
                ease: "easeInOut",
              },
            },
          }}
          animate={loading ? "visible" : "hidden"}
          exit="hidden"
        >
          <div className="flex flex-col gap-[1.4rem] items-center justify-center">
            <img className="w-[5.125rem] h-[4.0625rem]" src={Logo} />
            <span className="text-2xl uppercase bg-gradient-to-r from-[#0CBAF1] to-[#E95CE9] bg-clip-text text-transparent tracking-[4px] font-medium">
              Welcome
            </span>
          </div>
          <Spinner />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
