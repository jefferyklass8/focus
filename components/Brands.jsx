"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// motion variant
import { fadeInOnScroll } from "@/motion/motionVariants";

const brandsImages = [
  {
    src: "/brands/brand-1.svg",
  },
  {
    src: "/brands/brand-2.svg",
  },
  {
    src: "/brands/brand-3.svg",
  },
  {
    src: "/brands/brand-4.svg",
  },
  {
    src: "/brands/brand-5.svg",
  },
  {
    src: "/brands/brand-6.svg",
  },
  {
    src: "/brands/brand-7.svg",
  },
];

const Brands = () => {
  return (
    <section className="w-full h-[24vh] pt-24 flex justify-center items-center">
      <motion.div
        variants={fadeInOnScroll(0.2, 0.6)}
        initial="hidden"
        whileInView="visible"
        className="container mx-auto overflow-hidden"
      >
        <p className="lead text-center mb-6">
          Join 200+ companies already growing
        </p>
        <div className="flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex"
          >
            {brandsImages.map((item, index) => {
              return (
                <div key={index} className="relative w-52 h-20 mr-12">
                  <Image
                    src={item.src}
                    fill
                    alt=""
                    className="object-contain"
                  />
                </div>
              );
            })}
          </motion.div>
          {/* duplicated div */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex"
          >
            {brandsImages.map((item, index) => {
              return (
                <div key={index} className="relative w-52 h-20 mr-12">
                  <Image
                    src={item.src}
                    fill
                    alt=""
                    className="object-contain"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;
