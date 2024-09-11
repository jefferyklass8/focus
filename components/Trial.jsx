import { motion } from "framer-motion";
import { fadeInOnScroll } from "@/motion/motionVariants";

// components
import ButtonTertiary from "./ButtonTertiary";

const Trial = () => {
  return (
    <section className="xl:mb-32 w-full">
      <motion.div
        variants={fadeInOnScroll(0.2, 0.6)}
        initial="hidden"
        whileInView="visible"
        className="py-24 w-full xl:max-w-[1140px] mx-auto min-h-[300px] bg-gradient-to-r from-accent via-accent_secondary to-accent h-full flex items-center xl:rounded-2xl"
      >
        <div className="flex flex-col xl:flex-row items-center justify-between w-full xl:px-24">
          <div>
            {/* text */}
            <div className="text-center mb-12 xl:mb-0 xl:text-left">
              <h2 className="text-[40px] leading-tight font-bold mb-2">
                Start your 30-day free trial
              </h2>
              <p className="lead max-w-[400px] xl:max-w-[560px] mx-auto xl:mx-0">
                Experience the full power of our platform with a 30-day free
                trial. No credit card required.
              </p>
            </div>
          </div>
          {/* btn */}
          <div>
            <ButtonTertiary btnText="Get started" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Trial;
